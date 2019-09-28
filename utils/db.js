const r = require('rethinkdb');

class Database {
    constructor(host, port){
        this.host = host;
        this.port = port;
        this.connection = null;
    }

    connect(){
        return r.connect({host: this.host, port: this.port}, (err, conn) => {
            if (err) throw err;
            this.connection = conn;
            console.log("Connected To Database!");
        });
    }

    createTable(options){
        return r.db(options.db).tableCreate(options.table).run(this.connection, (err, result) =>{
            if (err) throw err;
            console.log("Table Created! Table: " + options.table);
        });
    }

    createDatabase(options){
        return r.dbCreate(options.db).run(this.connection, (err) =>{
            if (err) throw err;
            console.log("Database Created!");
        });
    }

    insertData(options){
        r.db(options.db).table(options.table).insert(options.data).run(this.connection, (err, result)=>{
            if (err) throw err;
            console.log("Data Inserted!");
        });
    }
}

module.exports = Database;