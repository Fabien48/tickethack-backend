var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Cart = require('../models/cart');


// Recherche toutes les destinations possibles à partir d'une ville
router.get('/trips/:departure', (req, res) => {
  Trip.find({ departure: req.params.departure })
  .then(tripFound => {
    console.log(tripFound);
    
    if (tripFound.length > 0) {
      res.json( tripFound )
    } else {
      res.json({result:false, error :'trip not found'})
    }
  })
})

// Recherche avancée (départ, arrivée associé )
router.get('/trips/:departure/:arrival', (req, res) => {
  const {departure, arrival} = req.params;

  Trip.find({ departure, arrival })
  .then(trips => {
    console.log(trips);
    if (trips.length > 0) {
      const sortedTrips = trips.sort((a, b) => new Date(a.date) - new Date(b.date));
      res.json( sortedTrips);
    } else {
      res.json({ result: false, error :'trip not found'})
    }
  })
})

// suppression par id 
router.delete('/trips/:id', (req, res) => {
  const { id } = req.params;

  Trip.findByIdAndDelete(id)
    .then(() => res.json({ result: true, message: 'Trip deleted successfully' }))
    .catch(err => res.status(500).json({ result: false, error: err.message }));
});


module.exports = router;
