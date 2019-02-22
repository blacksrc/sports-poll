const mongoose = require("mongoose");
const Event = mongoose.model("Event");

exports.eventsList = (req, res) => {
  Event.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createEvent = (req, res) => {
  var newEvent = new Event(req.body);
  newEvent.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.event = (req, res) => {
  Event.find({ id: req.params.id }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.deleteEvent = (req, res) => {
  Event.deleteMany({ id: req.params.id }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};
