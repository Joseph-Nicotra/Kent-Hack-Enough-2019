const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'home';

router.get('/', (req, res)=>{
    res.render('home', {title: 'Home'});
});

module.exports = router;