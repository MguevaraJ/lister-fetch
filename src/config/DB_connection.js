const mysql = require("mysql");
const colors = require("colors");
const { promisify } = require("util");

const pool = mysql.createPool({
    "connetionLimit": "15",
    "host": "localhost",
    "user": "Mguevara",
    "password": "Crz+$%S14",
    "database": "Lister"
    // "debug": "debug"
});

pool.getConnection((err, connect) => {
    if (err) console.log(" MYSQL ".black.bgRed + ": ERROR_CONNECTION".red);
    else console.log("  MYSQL ".black.bgGreen + ": SUCCESSFULLY_CONNECTION".green);
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;