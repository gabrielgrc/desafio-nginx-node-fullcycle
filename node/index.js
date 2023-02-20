const express = require("express");
const app = express();
const db_funcs = require("./db_functions");
const db_con = db_funcs.createSqlConnection();
db_funcs.createTable(db_con);

app.get("/", (req, res) => {
	res.send('<h1>Full Cycle !</h1>')

    db_funcs.insertPerson(db_con);
});

app.listen(3000, () => {
    console.log(`Server is up and running on 3000 ...`);
    });