const mysql = require("mysql");
const { promisify } = require("util");

const pool = mysql.createPool({
    "connetionLimit": "15",
    "host": "localhost",
    "user": "Mguevara",
    "password": "Crz+$%S14",
    "database": "Lister",
    "debug": "debug"
});

pool.getConnection((err, connect) => {
    if (err) console.log("MYSQL: ERROR_CONNECTION");
    else console.log("MYSQL: SUCCESSFULLY_CONNECTION");
         connect.query = promisify(connect.query);
    return;
});


module.exports = pool;