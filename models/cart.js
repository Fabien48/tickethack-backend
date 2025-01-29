const mongoose = require('mongoose');


//schema de base pour cart.js

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, 
  },
  trips: [{
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, 
    },
  }],
});



const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

