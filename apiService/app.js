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
        let action = request.body.action;
        if(action.toLowerCase() === "create"){
            let options = {
                id: request.body.id,
                lastSignedIn: request.body.lastSignedIn
            }
            app.db.insertData({db: 'shusphere', table: 'visitors', data: {options}});
        }
        else if(action.toLowerCase() === "delete"){
            app.db.deleteData({db: 'shusphere', table: 'visitors', id: request.body.id});
        }
        else{
            res.send("Invalid Query");
        }
    });
    app.listen(port, ()=>{
        console.log("The App is listening on port: " + port);
    });
})
