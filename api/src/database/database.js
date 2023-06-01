var mysql = require('mysql2');
import config from "./../config";

const connection = {
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port
};

const pool = mysql.createPool(connection);
  
module.exports = pool;