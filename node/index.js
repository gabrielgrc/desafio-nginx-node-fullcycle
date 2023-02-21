const express = require("express");
const app = express();
const db_funcs = require("./db_functions");
const db_con = db_funcs.createSqlConnection();
db_funcs.createTable(db_con);

app.get("/", (req, res) => {
    db_funcs.insertRandomPerson(db_con);
    var sql = 'SELECT name from people'
    query_return = db_con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Values selected");
        console.log(result)
        let text = "<table border='1'>"
        for (let obj in result){
            text += "<tr><td>" + result[obj].name + "</td></tr>"
        }
        res.send('<h1>Full Cycle Rocks!</h1>' + `${text}`)
    }); 
});

app.listen(3000, () => {
    console.log(`Server is up and running on 3000 ...`);
    });