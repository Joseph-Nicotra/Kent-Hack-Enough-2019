const axios = require('axios');
const moment = require('moment');
const Database = require('./index');
const authKey = require('./fireBaseAuth.json');

let dataB = new Database(authKey);
dataB.connect();

function checkStatus(conn){
    let options = {
        collection: 'info'
    }
    return conn.getTable(options);
}

function updateStatus(conn, data){
    let options = {
        collection: 'info',
        doc: 'general',
        data: {
            status: data.status,
            lastUpdated: data.currentTime,
            workingMembers: data.working
        }
    }
    return conn.setData(options);
}

function getStatus(){
    return axios.get('https://script.google.com/macros/s/AKfycbxUqkLQLY3jfCm2GlTv3XGOW5SOTpvfO0H_hYhRr4hQtTNd56A/exec');
}

checkStatus(dataB).then((snapshot)=>{
    snapshot.forEach((doc)=>{
        let data = doc.data();
        let currentTime = moment().unix();
        let updateInterval = 15 * 6 * 1000;
        if((currentTime - data.lastUpdated) > updateInterval){
            getStatus().then((res)=>{
                return res.data;
            }).then((info)=>{
                info.currentTime = currentTime
                updateStatus(dataB, info);
            });
        }
    });
});

/*
SETTER -- DO NOT DELETE
let options = {
    collection: 'info',
    doc: 'general',
    data: {
        status: 'Closed',
        lastUpdated: '0',
        workingMembers: 'None'
    }
}
dataB.setData(options);
*/