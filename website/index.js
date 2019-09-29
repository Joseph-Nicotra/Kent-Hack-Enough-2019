const express = require('express');
const bodyParser = require('body-parser');
const port = 9999;
const Database = require('./utils/db');
const uuid = require('uuid/v4');
let app = express();

require('dotenv').config();

app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.database = new Database(process.env.DB_HOST, process.env.DB_PORT);
app.database.connect().then(()=>{
    module.exports = app;
    require('./utils/routeLoader');
    require('./utils/cronJobs');
    
    app.get('/', (req, res)=>{
        res.redirect('/home');
    });

    app.post('/requests', (req, res)=>{
        let title = req.body.title;
        let type = req.body.type;
        let details = req.body.details;

        app.database.insertData({db: 'shusphere', table: 'requests', data: {id: uuid(), title: title, type: type, details: details}}).then((response)=>{
            res.send("Your request was successfully noted :)");
        });
    });
    
    app.listen(port, () =>{
        console.log("The App is Listening on Port: " + port);
    });    
});

