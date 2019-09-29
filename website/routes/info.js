const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'info';

router.get('/', (req, res)=>{
    app.database.getData({db: 'shusphere', table: 'contacts', field: 'id'}).then((contacts)=>{
        res.render('info', {title: 'Info', contacts: contacts});
    });
});

module.exports = router;