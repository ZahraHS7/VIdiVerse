const request = require('supertest');
const { Rental } = require('../../../models/rental');
const { Movie } = require('../../../models/movie');
const { Customer } = require('../../../models/customer');
const {User} = require('../../../models/user');
const { Genre } = require('../../../models/genre');
const mongoose = require('mongoose');

let server;

describe('/api/rentals', () => {

  beforeEach(() => { server = require('../../../index'); });

  afterEach(async () => {
    await server.close();
    await Rental.deleteMany();
    await Movie.deleteMany();
    await Customer.deleteMany();
    await Genre.deleteMany();
  });

  describe('GET /', () => {
    it('should return all rentals', async () => {
      await Rental.collection.insertMany([
        {
          customer: { name: 'Mike', phone: '11234'},
          movie: { title: 'About Love', dailyRentalRate: 6}
        },
        {
          customer: { name: 'Dave', phone: '56789'},
          movie: { title: 'Avatar', dailyRentalRate: 8}
        }
      ]);

      const res = await request(server).get('/api/rentals');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toHaveProperty('customer.name', 'Mike');
      expect(res.body[1]).toHaveProperty('customer.name', 'Dave');
    });
  });

  describe('GET/:id', () => {
    it('should return a rental if valid id is passed' , async () => {
      const rental = new Rental({
        customer: { name: 'Dave', phone: '56789'},
        movie: { title: 'Avatar', dailyRentalRate: 8}
      });
      await rental.save();

      const res = await request(server).get('/api/rentals/' + rental._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('customer.name', 'Dave');
      expect(res.body).toHaveProperty('movie.title', 'Avatar');
    });

    it('should return 404 if no rental with the given ID exists' , async () => {
      const id = new mongoose.Types.ObjectId();
      const res = await request(server).get('/api/rentals/' + id);

      expect(res.status).toBe(404);
    });
  });

  describe('POST/', () => {
    let token;
    let customerId;
    let movieId;
    let movie;

    const exec = async () => {
      return await request(server)
      .post('/api/rentals')
      .set('x-auth-token', token)
      .send({ customerId, movieId });
    };

    beforeEach( async () => {
      token = new User().generateAuthToken();

      const customer = new Customer({ name: 'Mike', phone: '11234'});
      await customer.save();

      movie = new Movie({
        title: 'About Love',
        genre: { type: 'Romantic' },
        numberInStock: 10,
        dailyRentalRate: 6
      });
      await movie.save();

      customerId = customer._id;
      movieId = movie._id;
    });

    it('should return 401 if client is not logged in', async () => {
      token = '';

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 400 if customerID and movieID is not provided', async () => {
      customerId = '';
      movieId = '';

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if customerID is invalid', async () => {
      customerId = new mongoose.Types.ObjectId().toHexString();
      const res = await exec();

      expect(res.status).toBe(400);
      expect(res.text).toBe('Invalid customer.');
    });

    it('should return 400 if movieID is invalid', async () => {
      movieId = new mongoose.Types.ObjectId().toHexString();
      const res = await exec();

      expect(res.status).toBe(400);
      expect(res.text).toBe('Invalid movie.');
    });

    it('should return 400 if movie is not in stock', async () => {
      const movieInDb = await Movie.findByIdAndUpdate(movieId, { numberInStock : 0 });

      const res = await exec();

      expect(res.status).toBe(400);
      expect(res.text).toBe('Movie not in stock.');
    });

    it('should save a rental if it is valid', async () => {
      const res = await exec();

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('customer.name', 'Mike');
      expect(res.body).toHaveProperty('movie.title', 'About Love');
    });

    it('should decrease the movie stock by 1' , async () => {
      await exec();

      const movieInDb = await Movie.findById(movieId);

      expect(movieInDb.numberInStock).toBe(movie.numberInStock - 1);
    });

    it('should return 500 if an error occurs during the transaction', async () => {
      const rentalSaveMock = jest.fn().mockRejectedValue(new Error('Database error'));
      const movieSaveMock = jest.fn();
      const sessionMock = {
        withTransaction: jest.fn().mockImplementation(async (callback) => {
          await callback();
        }),
      };

      jest.spyOn(mongoose, 'startSession').mockReturnValue(sessionMock);
      Rental.prototype.save = rentalSaveMock;
      Movie.prototype.save = movieSaveMock;

      const res = await exec();

      expect(res.status).toBe(500);
      expect(res.text).toBe('Something failed.');
    });
  });
});