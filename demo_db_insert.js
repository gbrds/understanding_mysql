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

    const sql = "insert into customers (name, address) values ('Company1 INC', 'Highway 37'), ('Company2 INC', 'Highway 36'), ('Company3 INC', 'Highway 35')";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });
    
});