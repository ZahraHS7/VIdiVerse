const auth = require('../middleware/auth');
const validation = require('../middleware/validate');
const {Rental , validate} = require('../models/rental');
const { Movie } = require('../models/movie');
const { Customer } = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const rentals = await Rental.find().sort('-dateOut');
  res.send(rentals);
});

router.post('/', [auth, validation(validate)], async (req, res) => {
  const customer = await Customer.findById(req.body.customerId);
  if(!customer) return res.status(400).send('Invalid customer.');

  const movie = await Movie.findById(req.body.movieId);
  if(!movie) return res.status(400).send('Invalid movie.');

  if (movie.numberInStock == 0) return res.status(400).send('Movie not in stock.');

  let rental = new Rental({
    customer: {
      _id: customer._id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      postcode: customer.postcode
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
    }
  });

  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      const result = await rental.save();
      movie.numberInStock--;
      movie.save();
      res.send(result);
    });

    session.endSession();
  }
  catch (ex) {
    console.error(ex);
    return res.status(500).send('Something failed.');
  }
});

router.get('/:id', async (req, res) => {
  const rental = await Rental.findById(req.params.id);

  if(!rental) return res.status(404).send('No rental with the given ID');

  res.send(rental);
});

module.exports = router;