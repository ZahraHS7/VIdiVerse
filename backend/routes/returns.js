const auth = require('../middleware/auth');
const validation = require('../middleware/validate');
const {Rental , validate} = require('../models/rental');
const {Movie} = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', [auth, validation(validate)], async (req, res) => {
  const rental = await Rental.lookup(req.body.customerId, req.body.movieId);

  if (!rental) return res.status(404).send('Rental not found');

  if (rental.dateReturned) return res.status(400).send('Return is already processed.')

  rental.return();

  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      const result = await rental.save();
      const movie = await Movie.findByIdAndUpdate(req.body.movieId, {
        $inc: {numberInStock : 1}
      });
      await movie.save();
      res.send(result);
    });

    session.endSession();
  }
  catch (ex) {
    return res.status(500).send('Something failed.');
  }
});

module.exports = router;