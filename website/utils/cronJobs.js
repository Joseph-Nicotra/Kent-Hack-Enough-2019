let cron = require('node-cron');
let app = require('../index');
let moment = require('moment');
const axios = require('axios');

cron.schedule('*/10 * * * *', () => {
    let currentTime = moment().unix();
    axios.get('https://script.google.com/macros/s/AKfycbxUqkLQLY3jfCm2GlTv3XGOW5SOTpvfO0H_hYhRr4hQtTNd56A/exec').then((res)=>{
        return res.data;
    }).then((status)=>{
        app.database.updateData({db: 'shusphere', table: 'info', id: 'general', updates: {status: status.status, working: status.working, lastUpdated: currentTime}});
    });
});

cron.schedule('* * * * *', () => {
    app.database.getCount({db: 'shusphere', table: 'visitors'}).then((count)=>{
        app.database.updateData({db: 'shusphere', table: 'info', id: 'general', updates: {visitorCount: count}});
    });
});