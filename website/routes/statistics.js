const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'statistics';

router.get('/', (req, res)=>{
    res.render('statistics', {title: 'Statistics'});
});

module.exports = router;