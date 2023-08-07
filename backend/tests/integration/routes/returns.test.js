const request = require('supertest');
const moment = require('moment');
const {Rental} = require('../../../models/rental');
const {Movie} = require('../../../models/movie');
const {User} = require('../../../models/user');
const mongoose = require('mongoose');
const { object } = require('joi');

describe('/api/returns', () => {
  let server;
  let token;
  let customerId;
  let movieId;
  let movie;
  let rental;

  const exec = () => {
    return request(server)
    .post('/api/returns')
    .set('x-auth-token', token)
    .send({ customerId, movieId });
  };

  beforeEach( async () => {
    server = require('../../../index');

    token = new User().generateAuthToken();
    customerId = new mongoose.Types.ObjectId().toHexString();
    movieId = new mongoose.Types.ObjectId().toHexString();

    movie = new Movie({
      _id: movieId,
      title: 'Marriage Story',
      dailyRentalRate: 8,
      genre : { type: 'Drama'},
      numberInStock: 5
    });
    await movie.save();

    rental = new Rental({
      customer:{
        _id: customerId,
        name: 'Ross',
        phone: '12345'
      },
      movie:{
        _id: movieId,
        title: 'Marriage Story',
        dailyRentalRate: 8
      }
    });
    await rental.save();
  });

  afterEach( async () => {
    await server.close();
    await Rental.deleteMany({});
    await Movie.deleteMany({});
  });

  describe('POST/', () => {
    it('should return 401 if client is not logged in', async () => {
      token = '';

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 400 if customerId is not provided', async () => {
      customerId = '';

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if movieId is not provided', async () => {
      movieId = '';

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 404 if no rental found for the customer/movie', async () => {
      await Rental.deleteMany({});

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should return 400 if return is already processed', async () => {
      rental.dateReturned = new Date();
      await rental.save();

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 200 if we have a valid request', async () => {
      const res = await exec();

      expect(res.status).toBe(200);
    });

    it('should set the return date if input is valid', async () => {
      const res = await exec();

      const rentalInDb = await Rental.findById(rental._id);
      const diff = new Date() - rentalInDb.dateReturned;

      expect(diff).toBeLessThan(10 * 1000);
    });

    it('should set the returnFee if input is valid', async () => {
      rental.dateOut = moment().add(-7, 'days').toDate();
      await rental.save();

      await exec();

      const rentalInDb = await Rental.findById(rental._id);

      expect(rentalInDb.rentalFee).toBe(56);
    });

    it('should increase the movie stock by 1 if input is valid', async () => {
      await exec();

      const movielInDb = await Movie.findById(movieId);

      expect(movielInDb.numberInStock).toBe(movie.numberInStock + 1);
    });

    it('should return the rental if input is valid', async () => {
      const res = await exec();

      const rentalInDb = await Rental.findById(rental._id);

      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining(['dateOut', 'dateReturned', 'rentalFee', 'customer', 'movie']))
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