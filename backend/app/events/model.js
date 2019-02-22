'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  awayName: {
    type: String,
    required: 'awayName must be a string'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  group: {
    type: String,
    required: 'group must be a string'
  },
  homeName: {
    type: String,
    required: 'homeName must be a string'
  },
  name: {
    type: String,
    required: 'name must be a string'
  },
  id: {
    type: Number,
    required: 'id must be a number'
  },
  objectId: {
    type: String,
    required: 'objectId must be a string'
  },
  sport: {
    type: String,
    required: 'sport must be a string'
  },
  state: {
    type: String,
    required: 'state must be a string'
  },
  country: {
    type: String,
    required: 'country must be a string'
  },
  state: {
    type: String,
    enum: ['NOT_STARTED', 'STARTED', 'FINISHED'],
    default: ['NOT_STARTED']
  }
});

module.exports = mongoose.model('Event', EventSchema);