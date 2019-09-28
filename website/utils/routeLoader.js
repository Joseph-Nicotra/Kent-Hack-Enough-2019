const path = require('path');
const fs = require('fs');
let app = require('../index');

let routeDir = path.join(__dirname, '../routes');
let routeFiles = fs.readdirSync(routeDir).filter(file => file.endsWith('.js'));
for(const routeFile of routeFiles){
    let route = require(path.join(routeDir, routeFile));
    if(route.path) app.use(`/${route.path}`, route);
    else console.log(`Route path not specified for: ${routeFile}. Skipping File.`);
}