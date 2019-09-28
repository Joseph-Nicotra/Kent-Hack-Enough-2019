const express = require('express');
const port = 9176;
let app = express();

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