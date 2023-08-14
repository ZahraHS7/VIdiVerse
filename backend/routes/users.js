const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const { Movie } = require("../models/movie");
const express = require("express");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "email"]));
});

router.put("/me", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const userId = req.user._id;

    let user = await User.findById(userId);
    if (!user) return res.status(404).send("User not found.");

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    user.set(_.pick(req.body, ["name", "email", "password"]));

    await user.save();

    res.send(_.pick(user, ["_id", "name", "email"]));
  } catch (error) {
    res.status(500).send("Something went wrong.");
  }
});

router.put('/me/add-favorite-movie/:id', auth, async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).send('User not found.');

    const movieId = req.params.id;
    const movie = await Movie.findById(movieId); // Assuming you have a Movie model

    if (!movie) return res.status(404).send('Movie not found.');

    user.favoriteMovies.push(movie);
    await user.save();

    res.send(user.favoriteMovies);
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
});

router.delete('/me/delete-favorite-movie/:id', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const movieId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).send('User not found.');

    const movieIndex = user.favoriteMovies.findIndex(movie => movie._id.equals(movieId));
    if (movieIndex === -1) {
      return res.status(400).send('Movie not in favorites.');
    }

    user.favoriteMovies.splice(movieIndex, 1);
    await user.save();

    res.send(user.favoriteMovies);
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
});

module.exports = router;
