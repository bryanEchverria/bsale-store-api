import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createPool({
    connectionLimit : 10,
    host:config.host,
    database:config.database,
    user:config.user,
    password:config.password
});

export const getConnection = ()=>{
    return connection;
}

