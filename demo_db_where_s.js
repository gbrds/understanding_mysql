const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "qwerty",
    database: "mydb"
});

con.connect((err) => {
    if(err) throw err;

    con.query("select * from customers where address like 'S%'", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    
});