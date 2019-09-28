const express = require('express');
const Database = require('./db');
const port = 9556;
let app = express();
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
    
    app.listen(port, ()=>{
        console.log("The App is listening on port: " + port);
    });
})
