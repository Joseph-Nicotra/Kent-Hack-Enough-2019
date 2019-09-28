const r = require('rethinkdb');

class Database {
    constructor(host, port, db){
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

    deleteData(options){
        return r.db(options.db).table(options.table).get(options.id).delete().run(this.connection, (err)=>{
            if (err) throw err;
            console.log("Data Deleted!");
        })
    }

    createDatabase(options){
        return r.dbCreate(options.db).run(this.connection, (err) =>{
            if (err) throw err;
            console.log("Database Created!");
        });
    }

    getData(options){
        return r.db(options.db).table(options.table).orderBy(options.field).run(this.connection, (err, result)=>{
            if (err) throw err;
            console.log("Received Data!");
        })
    }

    insertData(options){
        r.db(options.db).table(options.table).insert(options.data).run(this.connection, (err, result)=>{
            if (err) throw err;
            console.log("Data Inserted!");
        });
    }

    updateData(options, fields){
        r.db(options.db).table(options.table).get(options.id).update({})
    }
}

module.exports = Database;