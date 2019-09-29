const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'info';

router.get('/', (req, res)=>{
    app.database.getData({db: 'shusphere', table: 'visitors', field: 'lastSignedIn'}).then((visitors)=>{
        console.log(visitors);
        res.render('info', {title: 'Info'});
    });
});

module.exports = router;