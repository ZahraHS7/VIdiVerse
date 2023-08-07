const request = require('supertest');
const {Genre} = require('../../../models/genre');
const {User} = require('../../../models/user');
const mongoose = require('mongoose');

describe('/api/genres', () => {
  let server;

  beforeEach(() => { server = require('../../../index'); });

  afterEach(async () => {
    await server.close();
    await Genre.deleteMany();
  });

  describe('GET /', () => {
    it('should return all genres', async () => {
      await Genre.collection.insertMany([
        { type: 'Romantic' },
        { type: 'Action' }
      ]);

      const res = await request(server).get('/api/genres');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(g => g.type === 'Romantic')).toBeTruthy();
      expect(res.body.some(g => g.type === 'Action')).toBeTruthy();
    });
  });

  describe('GET/:id', () => {
    it('should return 404 if invalid id is passed' , async () => {
      const res = await request(server).get('/api/genres/1');

      expect(res.status).toBe(404);
    });

    it('should return 404 if no genre with the given ID exists' , async () => {
      const id = new mongoose.Types.ObjectId();
      const res = await request(server).get('/api/genres/' + id);

      expect(res.status).toBe(404);
    });

    it('should return a genre if valid id is passed' , async () => {
      const genre = new Genre({ type: 'Romantic' });
      await genre.save();

      const res = await request(server).get('/api/genres/' + genre._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('type', genre.type);
    });
  });

  describe('POST /', () => {
    let token;
    let type;

    const exec = async () => {
      return await request(server)
      .post('/api/genres')
      .set('x-auth-token', token)
      .send({ type });
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
      type = 'Romantic';
    });

    it('should return 401 if client is not logged in', async () => {
      token = '';

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 400 if genre is less than 3 characters', async () => {
      type = '12';

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if genre is more than 30 characters', async () => {
      type = new Array(32).join('a');

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should save the genre if it is valid', async () => {
      await exec();

      const genre = await Genre.find({ type: 'Romantic' });

      expect(genre).not.toBeNull();
    });

    it('should return the genre if it is valid', async () => {
      const res = await exec();

      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('type', 'Romantic');
    });
  });

  describe('PUT/:id', () => {
    let id;
    let type;

    const exec = async () => {
      return await request(server)
      .put('/api/genres/' + id)
      .send({ type });
    };

    beforeEach( async () => {
      let genre = new Genre({ type: 'Romantic' });
      await genre.save();
      id = genre._id;
    });

    it('should return 400 if genre is less than 3 characters', async () => {
      type = '12';

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should return 400 if genre is more than 30 characters', async () => {
      type = 'a'.repeat(32);

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should update the genre if it is valid', async () => {
      type = 'Comedy';

      await exec();

      genre = await Genre.findById(id);

      expect(genre).toHaveProperty('type', 'Comedy');
    });

    it('should return 404 if no genre with the given ID exists' , async () => {
      id = new mongoose.Types.ObjectId();

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should return updated genre if it is valid', async () => {
      const res = await exec();

      expect(res.body).toHaveProperty('type', 'Comedy');
    });
  });

  describe('DELETE/:id', () => {
    let token;
    let id;

    const exec = async () => {
      return await request(server)
      .delete('/api/genres/' + id)
      .set('x-auth-token', token);
    };

    beforeEach( async () => {
      const adminUser = new User({ isAdmin: true });
      token = adminUser.generateAuthToken();
      let genre = new Genre({ type: 'Romantic' });
      await genre.save();
      id = genre._id;
    });

    it('should return 401 if client is not logged in', async () => {
      token = '';

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should return 403 if client is not an admin', async () => {
      const nonAdmin = new User({ isAdmin: false });
      token = nonAdmin.generateAuthToken();

      const res = await exec();

      expect(res.status).toBe(403);
    });

    it('should delete the genre if it is valid', async () => {
      await exec();

      const deletedGenre = await Genre.findById(id);

      expect(deletedGenre).toBeNull();
    });

    it('should return 404 if no genre with the given ID exists' , async () => {
      id = new mongoose.Types.ObjectId().toHexString();

      const res = await exec();

      expect(res.status).toBe(404);
    });
  });
});