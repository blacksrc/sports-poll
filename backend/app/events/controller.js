const mongoose = require("mongoose");
const Event = mongoose.model("Event");

// fetch all events
exports.fetchEvents = (req, res) => {
  Event.find({}, (err, data) => {
    err ? res.send(err) : res.json(data);
  });
};

// create new event
exports.createEvent = (req, res) => {
  var newEvent = new Event(req.body);
  newEvent.save((err, data) => {
    err ? res.send(err) : res.json(data);
  });
};

// fetch event by id
exports.fetchEvent = (req, res) => {
  Event.find({ id: req.params.id }, (err, data) => {
    err ? res.send(err) : res.json(data);
  });
};

// delete event by id
exports.deleteEvent = (req, res) => {
  Event.deleteMany({ id: req.params.id }, (err, data) => {
    err ? res.send(err) : res.json(data);
  });
};
