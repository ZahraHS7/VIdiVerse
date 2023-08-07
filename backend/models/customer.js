const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    firstName: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true
    },
    lastName: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    phone: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    isGold: {
      type: Boolean,
      default: false
    },
}));

function validationCustomer (customer) {
    const schema = Joi.object({
      firstName: Joi.string().min(3).max(30).required(),
      lastName: Joi.string().min(3).max(30).required(),
      email: Joi.string().min(5).max(255).required().email(),
      phone: Joi.string().min(3).max(30).required(),
      postcode: Joi.string().required(),
      isGold: Joi.boolean()
    });
    return schema.validate(customer);
}

module.exports.Customer = Customer;
module.exports.validate = validationCustomer;