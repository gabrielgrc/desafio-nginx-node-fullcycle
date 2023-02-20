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

function insertRandomPerson(db_con){
    const names = ["Keanu Reeves", "Adrian Smith", "Chris Rock", "Michael Jackson", "Scottie Pippen",
                "Mike Tyson", "Steve Harris", "Joe Rogan", "Jimmy Fallon", "Michael Douglas"];
    const random = Math.floor(Math.random() * names.length);
    //console.log(random, names[random]);

    var sql = `INSERT INTO people (name) VALUES('${names[random]}');`;
    db_con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Value inserted");
        console.log(result)
    });

}
module.exports = {createSqlConnection, createTable, insertRandomPerson};
