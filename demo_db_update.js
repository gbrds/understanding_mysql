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

    const sql = "update customers set address = 'Blue Lagoon 1' where address = 'Highway 35'";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows+ " record(s) updated");
    });
    
});