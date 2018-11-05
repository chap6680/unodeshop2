const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'udemynode',
port: 3333,
password: 'nodejs616'
});

module.exports = pool.promise();
