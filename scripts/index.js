const admin = require('firebase-admin');

class Database {
    constructor(authData){
        this.authData = authData;
    }

    connect() {
        admin.initializeApp({
            credential: admin.credential.cert(this.authData)
        });
        this.db = admin.firestore();
    }

    getData(options){
        return this.db.collection(options.collection).get();
    }

    setData(options){
        let ref =  this.db.collection(options.collection).doc(options.doc);
        let setRef = ref.set(options.data);
        return setRef;
    }

    deleteData(options){
        return this.db.collection(options.collection).doc(options.doc).delete();
    }

    deleteTable(options){
        return this.db.collection(options.collection).delete();
    }
}

module.exports = Database;

/*
let serviceAccount = require('./fireBaseAuth');
let dataBase = new Database(serviceAccount);
dataBase.connect();
*/