const mysql = require('mysql12');

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password:'admin',
    database:'clientsbd'
});

module.exports = {
    conection
};