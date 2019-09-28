const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'contact';

router.get('/', (req, res)=>{
    res.render(`contact`, {title: `Contact`});
});

module.exports = router;