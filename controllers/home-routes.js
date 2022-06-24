const router = require('express').Router();
const { User, Dog } = require('../models')

router.get('/', (req, res) => {
   res.render('homepage')
})

module.exports = router;


// TO DO

//const router = require('express').Router();


// // route for if user provides their steam ID
// router.get('/', (req, res) => {
//     if (req.session.loggedIn) {
//         console.log(req.session.loggedIn)
//         res.render( 'dashboard', {)
//     }