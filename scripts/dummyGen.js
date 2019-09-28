const Database = require('./index');
const authKey = require('./fireBaseAuth.json');
let names = require('./dummyData.json');

function formatNumber(number){
    let length = number.toString().length;
    if(length < 6){
        let difference = 6 - length;
        number = '0'.repeat(difference) + number.toString();
    }
    return number;
}

let dataB = new Database(authKey);
dataB.connect();
for(let name of names.names){
    let randomID = Math.floor(Math.random() * 999999);
    randomID = formatNumber(randomID).toString();
    let options = {
        collection: 'users',
        doc: randomID,
        data: {
            firstName: name.split(' ')[0],
            lastName: name.split(' ')[1],
            permission: 0,
            isAllowed: true
        }
    }
    dataB.setData(options);
}