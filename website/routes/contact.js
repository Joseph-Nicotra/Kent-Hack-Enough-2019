const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'contact';

router.get('/', (req, res)=>{
    app.database.getData({db: 'shusphere', table: 'contacts', field: 'id'}).then((contacts)=>{
        res.render('contact', {title: 'Contact', contacts: contacts});
    });
});

module.exports = router;