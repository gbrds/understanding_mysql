const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "qwerty",
    database: "mydb"
});

con.connect((err) => {
    if(err) throw err;
    console.log("connected");

    const sql = "create table customers (name varchar(255), address varchar(255))";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("table created");
    });
    
});