const mongoose = require('mongoose');
const Joi = require('joi');
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movie', new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  genre: {
    type: genreSchema,
    required: true
  },
  ageRating: {
    type: String,
    require: true,
    min: 1,
    max: 6
  },
  duration: {
    type: String,
    require: true,
    min: 0
  },
  releaseDate: {
    type: Number,
    require: true,
    min: 1800
  },
  director: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  summary: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 255
  },
  cast: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  publishDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  posterURL: {
    type: String,
    required: true
  },
  moviePics: {
    type: [String], // An array of strings to store picture URLs
    default: [],
    required: true
  },
  liked: {
    type: Boolean,
    default: false,
    required: true
  }
}));

// what the client sends us, the input of api
function validationMovie (movie) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    genreId: Joi.objectId().required(),
    ageRating: Joi.string().min(1).max(6).required(),
    duration: Joi.string().min(0).required(),
    releaseDate: Joi.number().min(1800).required(),
    director: Joi.string().min(3).max(255).required(),
    summary: Joi.string().min(7).max(255).required(),
    cast: Joi.string().min(5).max(255).required(),
    numberInStock: Joi.number().min(0).max(255).required(),
    dailyRentalRate: Joi.number().min(0).max(255).required(),
    publishDate: Joi.date().iso().required(),
    posterURL: Joi.string().required(),
    moviePics: Joi.array().items(Joi.string()).min(1).required(), // Array of strings (picture URLs)
    liked: Joi.boolean()
  });
  return schema.validate(movie);
}

module.exports.Movie = Movie;
module.exports.validate = validationMovie;