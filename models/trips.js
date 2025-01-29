// backend/models/Trip.js
const mongoose = require('mongoose');

//schema de base trips.js
const tripSchema = new mongoose.Schema({
  departure: String,
  arrival: String, 
  date: Date,     
  price: Number
});


const Trip = mongoose.model('Trips', tripSchema);

module.exports = Trip; 