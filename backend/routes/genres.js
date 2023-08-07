const validateObjectId = require('../middleware/validateObjectId');
const auth = require('../middleware/auth');
const validation = require('../middleware/validate');
const admin = require('../middleware/admin');
const {Genre, validate} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await Genre.find().sort('type');
  res.send(genres);
});

router.post('/', [auth, validation(validate)], async (req, res) => {
  const genre = new Genre({ type: req.body.type });
  await genre.save();

  res.send(genre);
});

router.put('/:id', validation(validate), async (req, res) => {
  const genre = await Genre.findByIdAndUpdate(req.params.id, { type: req.body.type },
  { new: true});

  if(!genre) return res.status(404).send('No genres with the given ID');

  res.send(genre);
});

router.delete('/:id', [auth, admin], async (req, res) =>{
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if(!genre) return res.status(404).send('No genres with the given ID');

  res.send(genre);
});

router.get('/:id', validateObjectId, async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if(!genre) return res.status(404).send('No genres with the given ID');

  return res.send(genre);
});

module.exports = router;