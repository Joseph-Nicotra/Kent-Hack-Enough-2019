const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'info';

router.get('/', (req, res)=>{
    res.render('info', {title: 'Info'});
});

module.exports = router;