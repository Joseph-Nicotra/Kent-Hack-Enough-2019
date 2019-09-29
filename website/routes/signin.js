const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'signin';

router.get('/', (req, res)=>{
    res.render('signin', {title: 'Sign In'});
});

module.exports = router;