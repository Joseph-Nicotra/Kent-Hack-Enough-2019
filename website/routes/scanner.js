const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'scanner';

router.get('/', (req, res)=>{
    res.render('scanner', {title: 'Scanner'});
});

module.exports = router;