const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'statistics';

router.get('/', (req, res)=>{
    app.database.getFilteredData({db: 'shusphere', table: 'devices', filter: {type: 'systems'}}).then((stats)=>{
        stats.toArray((err, results)=>{
            let labels = [];
            let millis = [];
            results.forEach((result) => {
                labels.push(result.name);
                millis.push(result.millis);
            });
            res.render('statistics', {title: 'Statistics', labels: labels, millis: millis});
        })
    });   
});

module.exports = router;