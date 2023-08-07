const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
  type: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  }
});

const Genre = mongoose.model('Genre', genreSchema);

function validationGenre (genre) {
    const schema = Joi.object({
      type: Joi.string().min(3).max(30).required()
    });
    return schema.validate(genre);
}

module.exports.genreSchema = genreSchema;
module.exports.Genre = Genre;
module.exports.validate = validationGenre;