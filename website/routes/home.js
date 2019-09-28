const express = require('express');
const router = express.Router();
const moment = require('moment');
const axios = require('axios');
let app = require('../index');

router.path = 'home';

router.get('/', (req, res)=>{
    app.database.getData({db: 'shusphere', table: 'info', field: 'id'}).then((data)=>{
        data = data[0];
        let currentTime = moment().unix();
        const difference = 5 * 60;
        if((currentTime - data.lastUpdated) > difference){
            axios.get('https://script.google.com/macros/s/AKfycbxUqkLQLY3jfCm2GlTv3XGOW5SOTpvfO0H_hYhRr4hQtTNd56A/exec').then((status)=>{
                app.database.updateData({db: 'shusphere', table: 'info', id: 'general', updates: {status: status.data.status, working: status.data.working, lastUpdated: currentTime}});
                res.render('home', {title: 'Home', status: status.data.status, lastUpdated: moment.unix(currentTime).format('MMMM Do, YYYY @ h:mm:ss A'), working: status.data.working});            
            });
        }
        else{
            res.render('home', {title: 'Home', status: data.status, lastUpdated: moment.unix(data.lastUpdated).format('MMMM Do, YYYY @ h:mm:ss A'), working: data.working});
        }
    });
});

module.exports = router;