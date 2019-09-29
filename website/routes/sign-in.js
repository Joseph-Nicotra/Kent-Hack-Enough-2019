const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'sign-in';

router.get('/', (req, res)=>{
    res.render('sign-in', {title: 'Sign-In', searchResult: null});
});

module.exports = router;