const express = require('express');
const port = 9187;
const Database = require('./utils/db');
let app = express();

require('dotenv').config();

app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.database = new Database(process.env.DB_HOST, process.env.DB_PORT);
app.database.connect().then(()=>{
    module.exports = app;
    require('./utils/routeLoader');
    
    app.get('/', (req, res)=>{
        res.redirect('/home');
    });
    
    app.listen(port, () =>{
        console.log("The App is Listening on Port: " + port);
    });    
});

