const express = require('express');
const router = express.Router();
const moment = require('moment');
const axios = require('axios');
let app = require('../index');

router.path = 'home';

router.get('/', (req, res)=>{
    app.database.getData({db: 'shusphere', table: 'info', field: 'id'}).then((data)=>{
        data = data[0];
        res.render('home', {title: 'Home', status: data.status, lastUpdated: moment.unix(data.lastUpdated).format('MMMM Do, YYYY @ h:mm:ss A'), working: data.working, visitorCount: data.visitorCount});
    });
});

module.exports = router;