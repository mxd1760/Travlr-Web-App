const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async (requestAnimationFrame, res) => {
  const q = await Model
    .find({})
    .exec();

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

const tripsFindByCode = async (req, res) => {
  const q = await Model.find({ 'code': req.params.tripCode }).exec()

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q)
  }
}

const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    img: req.body.img,
    desc: req.body.desc,
  });
  const q = await newTrip.save();
  if (!q) {
    return res.status(400).json(err);
  } else {
    return res.status(201).json(q);
  }
}

const tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging
  console.log(req.params);
  console.log(req.body);
  const q = await Model
    .findOneAndUpdate(
      { 'code': req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        img: req.body.img,
        desc: req.body.desc
      }
    )
    .exec();
  if (!q) { // Database returned no data
    return res
      .status(400)
      .json(err);
  } else { // Return resulting updated trip
    return res
      .status(201)
      .json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
};