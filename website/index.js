const express = require('express');
const port = 9176;
const Database = require('./utils/db');
const authKey = require('./fireBaseAuth.json');
let app = express();
let dataB = new Database(authKey);

dataB.connect();

app.db = dataB;
app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use(express.static('public'));

module.exports = app;
require('./utils/routeLoader');

app.get('/', (req, res) =>{
    res.redirect('/home');
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
})