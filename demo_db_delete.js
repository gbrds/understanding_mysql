const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "qwerty",
    database: "mydb"
});

con.connect((err) => {
    if(err) throw err;

    con.query("delete from customers where address = 'Highway 37'", (err, result) => {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    
});