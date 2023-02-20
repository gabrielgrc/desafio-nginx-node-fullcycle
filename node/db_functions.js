const mysql = require("mysql");

function createSqlConnection(){
    const db_con = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    });
    return db_con;
}

function createTable(db_con){
    var sql = `CREATE TABLE if not exists people (id int not null auto_increment, name VARCHAR(255), primary key(id))`;
    db_con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table created");
        console.log(result)
    });
}

function insertPerson(db_con){
    var sql = `INSERT INTO people(name) values('Gabriel')`
    db_con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Name inserted");
        console.log(result)
    });
}

module.exports = {createSqlConnection, createTable, insertPerson};
