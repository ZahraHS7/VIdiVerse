const {Customer, validate} = require('../models/customer');
const auth = require("../middleware/auth");
const validation = require('../middleware/validate');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const customers = await Customer.find()
    .select("-__v")
    .sort('firstName');
  res.send(customers);
});

router.post('/',  [auth, validation(validate)], async (req, res) => {
  const existingCustomer = await Customer.findOne({ email: req.body.email });
  if (existingCustomer) {
    return res.status(400).send('Customer with this email already exists.');
  }

  const customer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    postcode: req.body.postcode,
    isGold: req.body.isGold || false,
  });

  try {
    const savedCustomer = await customer.save();
    res.send(savedCustomer);
  } catch (error) {
    console.error('Error saving customer:', error);
    res.status(500).send('Something went wrong.');
  }

});

router.put('/:id', [auth, validation(validate)], async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      postcode: req.body.postcode,
      isGold: req.body.isGold
    }, { new: true});

  if(!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

router.delete('/:id', [auth, validation(validate)], async (req, res) =>{
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if(!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

router.get("/:id", [auth, validation(validate)], async (req, res) => {
  const customer = await Customer.findById(req.params.id).select("-__v");

  if (!customer)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(customer);
});

module.exports = router;