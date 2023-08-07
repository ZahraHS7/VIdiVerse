const { Movie, validate } = require('../models/movie');
const { Genre } = require('../models/genre');
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")
const validation = require('../middleware/validate');
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find()
    .select("-__v")
    .sort('title');
  res.send(movies);
});

router.post('/', [auth, validation(validate)], async (req, res) => {
  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      type: genre.type
    },
    ageRating: req.body.ageRating,
    duration: req.body.duration,
    releaseDate: req.body.releaseDate,
    director: req.body.director,
    summary: req.body.summary,
    cast: req.body.cast,
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    publishDate: moment().toJSON(),
    posterURL: req.body.posterURL,
    moviePics: req.body.moviePics || [], // Initialize moviePics as an empty array
    liked: req.body.liked || false,
  });

  await movie.save();
  res.send(movie);
});

router.put('/:id', [auth, validation(validate)], async (req, res) => {
  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        type: genre.type
      },
      ageRating: req.body.ageRating,
      duration: req.body.duration,
      releaseDate: req.body.releaseDate,
      director: req.body.director,
      summary: req.body.summary,
      cast: req.body.cast,
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
      publishDate: moment().toJSON(),
      posterURL: req.body.posterURL,
      moviePics: req.body.moviePics || [], // Update moviePics with the new array
      liked: req.body.liked
    },
    { new: true }
  );

  if (!movie) return res.status(404).send('No movie with the given ID');
  res.send(movie);
});

router.delete('/:id', [auth, admin], async (req, res) => {
  const deletedMovie = await Movie.findOneAndDelete({ _id: req.params.id });

  if (!deletedMovie) return res.status(404).send('No movie with the given ID');

  const movies = await Movie.find();
  res.send(movies);
});

router.get('/:id', validateObjectId, async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).send('No movie with the given ID');
  res.send(movie);
});

module.exports = router;
