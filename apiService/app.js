const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./db');
const port = 9556;
let app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
require('dotenv').config();

app.db = new Database(process.env.DB_HOST, process.env.DB_PORT);
app.db.connect().then(() => {
    app.get('/users', (req, res)=>{
        app.db.getData({db: 'shusphere', table: 'users', field: 'id'}).then((data)=>{
            res.json(data);
        });
    });
    
    app.get('/visitors', (req, res)=>{
        app.db.getData({db: 'shusphere', table: 'visitors', field: 'id'}).then((data)=>{
            res.json(data);
        });
    });
    
    app.get('/devices', (req, res)=>{
        app.db.getData({db: 'shusphere', table: 'devices', field: 'id'}).then((data)=>{
            res.json(data);
        });
    });
    
    app.get('/contacts', (req, res)=>{
        app.db.getData({db: 'shusphere', table: 'contacts', field: 'id'}).then((data)=>{
            res.json(data);
        });
    });

    app.get('/requests', (req, res)=>{
        app.db.getData({db: 'shusphere', table: 'requests', field: id}).then((data) => {
            res.json(data);
        });
    });
    
    app.post('/visitors', (req, res)=>{
        let action = req.body.action;
        if(action.toLowerCase() === "create"){
            app.db.insertData({db: 'shusphere', table: 'visitors', data: {id: req.body.id, lastSignedIn: req.body.lastSignedIn}});
        }
        else if(action.toLowerCase() === "delete"){
            app.db.deleteData({db: 'shusphere', table: 'visitors', id: req.body.id});
        }
        else{
            res.send("Invalid Query");
        }
    });

    app.post('/devices', (req, res)=>{
        console.log(req.body.updates);
        app.db.updateData({db: 'shusphere', table: 'devices', id: req.body.id ,updates: JSON.parse(req.body.updates)});
    });
    app.listen(port, ()=>{
        console.log("The App is listening on port: " + port);
    });
})
