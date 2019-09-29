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

    /*
    db.getFilteredData({db: 'shusphere', table: 'users', filter: (user)=>{return user('firstName').contains('a')}}).then((res)=>{
        console.log(res);
    });
    */
   
    //db.insertData({db: 'shusphere', table: 'weekly', data: {id: '7days', data: [[]]}});

    /*
    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let obj = {};
    for(let x = 0; x < 7; x++){
        obj[days[x]] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }
    db.insertData({db: 'shusphere', table: 'weekly', data: {id: '7days', data: obj}});
    */


    //db.deleteData({db: 'shusphere', table: 'weekly', id: 'd9040b4b-9cc2-4a76-bde1-4588be012731'});

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
    Devices.systems.forEach((system)=>{
        db.insertData({db: 'shusphere', table: 'devices', data: {name: system, millis: 0, type: 'systems'}});
    });

    Devices.controllers.forEach((system)=>{
        db.insertData({db: 'shusphere', table: 'devices', data: {name: system, millis: 0, type: 'controllers'}});
    });

    Devices.accessories.forEach((system)=>{
        db.insertData({db: 'shusphere', table: 'devices', data: {name: system, millis: 0, type: 'accessories'}});
    });
    */

    /*
   db.insertData({db: 'shusphere', table: 'contacts', data: {firstName: 'John', lastName: 'Smith', email: "j.smith@example.com", position: "Staff Supervisor", phone: "+1-555-555-1234"}});
   db.insertData({db: 'shusphere', table: 'contacts', data: {firstName: 'Jane', lastName: 'Doe', email: "j.doe@example.com", position: "Assistant Supervisor", phone: "+1-444-444-1234"}});
   db.insertData({db: 'shusphere', table: 'contacts', data: {firstName: 'Michael', lastName: 'Jones', email: "m.jones@example.com", position: "Assistant Supervisor", phone: "+1-333-333-1234"}});
   */

   /*
   db.getData({db: 'shusphere', table: 'devices', field: 'id'}).then((devices)=>{
        devices.forEach((device)=>{
            db.updateData({db: 'shusphere', table: 'devices', id: device.id, updates: {millis: Math.floor(Math.random() * 50)}});
        });
   });
   */
});

