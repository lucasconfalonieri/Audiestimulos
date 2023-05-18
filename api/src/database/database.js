var mysql = require('mysql');
import config from "./../config";

const connection = {
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.db_port
};

const pool = mysql.createPool(connection);
  
module.exports = pool;