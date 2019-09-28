const Database = require('./db');
//const Data = require('./data.json');
//const Devices = require('./systems.json');
require('dotenv').config();

/*
function formatNumber(number){
    let length = number.toString().length;
    if(length < 6){
        let difference = 6 - length;
        number = '0'.repeat(difference) + number.toString();
    }
    return number;
}
*/

let db = new Database(process.env.DB_HOST, process.env.DB_PORT);
db.connect().then(()=>{

    //db.createTable({db: 'shusphere', table: 'requests'});
    /*
    //Create shusphere Database
    db.createDatabase({db: 'shusphere'}).then(()=>{
        //Create tables
        db.createTable({db: 'shusphere', table: 'visitors'});
        db.createTable({db: 'shusphere', table: 'users'});
        db.createTable({db: 'shusphere', table: 'devices'});
        db.createTable({db: 'shusphere', table: 'contacts'});
        db.createTable({db: 'shusphere', table: 'polls'});
        db.createTable({db: 'shusphere', table: 'complaints'});
    });
    */

    /*
    for(let name of Data.names){
        let randomID = Math.floor(Math.random() * 999999);
        randomID = formatNumber(randomID).toString();
        db.insertData({db: 'shusphere', table: 'users', data: {firstName: name.split(' ')[0], lastName: name.split(' ')[1], isAllowed: true, permissions: 0, id: randomID}});
    }
    */

    /*
    db.insertData({db: 'shusphere', table: 'users', data: {firstName: 'Dale', lastName: 'Detrick', isAllowed: true, permissions: 1, id: '297571'}});
    db.insertData({db: 'shusphere', table: 'users', data: {firstName: 'Joseph', lastName: 'Nicotra', isAllowed: true, permissions: 2, id: '312336'}});
   db.insertData({db: 'shusphere', table: 'users', data: {firstName: 'Vinayak', lastName: 'Prataap', isAllowed: true, permissions: 1, id: '315323'}});
   */

   /*
    Devices.accessories.forEach((system)=>{
        db.insertData({db: 'shusphere', table: 'devices', data: {name: system, millis: 0, ids: [], type: 'accessories'}});
    });
    */

    /*
   db.insertData({db: 'shusphere', table: 'contacts', data: {firstName: 'John', lastName: 'Smith', email: "j.smith@example.com", position: "Staff Supervisor", phone: "+1-555-555-1234"}});
   db.insertData({db: 'shusphere', table: 'contacts', data: {firstName: 'Jane', lastName: 'Doe', email: "j.doe@example.com", position: "Assistant Supervisor", phone: "+1-444-444-1234"}});
   db.insertData({db: 'shusphere', table: 'contacts', data: {firstName: 'Michael', lastName: 'Jones', email: "m.jones@example.com", position: "Assistant Supervisor", phone: "+1-333-333-1234"}});
   */
});

