const mongoose = require('mongoose');

module.exports = mongoose.model('users', new mongoose.Schema({
  id: String,
  medicine: String,
  time: String,

}, { collection : 'health-robot' }));