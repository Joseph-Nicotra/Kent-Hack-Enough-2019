const express = require('express');
const router = express.Router();
let app = require('../index');

router.path = 'home';

router.get('/', (req, res)=>{
    app.db.getDoc({collection: 'info', doc: 'general'}).then((status) => {
        app.db.getTable({collection: 'visitors'}).then((visitors) =>{
            let data = status.data();
            let size = visitors.size;
            return res.render('home', {title: 'Home', status: data.status, working: data.workingMembers, size: size})
        });
    });
});

module.exports = router;