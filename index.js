const express = require("express");
const { readFile } = require("fs").promises;
//const mysql = require("mysql");

const app = express();

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "user",
//     password: "password",
//     database: "chemical_db"
// });

// conn.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("MySQL Connected...");
// });

app.get("/", async (request,response) => {

    response.send( await readFile("./HomePage.html", "utf8") );
    
    // let sql = "CREATE TABLE IF NOT EXISTS test_table (record_id INT AUTO_INCREMENT, data VARCHAR(255), PRIMARY KEY (record_id));"

    // let query = conn.query(sql, (err, results) => {
    //     if(err) throw err;
    //     console.log(results);
    // })

})

app.listen(3000, () => { console.log("Service listening on Port 3000..."); });