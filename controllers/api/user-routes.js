const router = require('express').Router();
const { User, Build } = require('../../models');

router.get('/', (req, res) => {
    res.render('homepage')
})