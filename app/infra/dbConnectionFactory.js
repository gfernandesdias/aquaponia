var mysql = require('mysql');

function createDbConnection(){
    // const conexao = mysql.createConnection;
    // return conexao({
    //   host : '127.0.0.1',
    //   user : 'root',
    //   password: '',
    //   database: 'aquaponia'
    // }); 
    
    //var mysql = require('mysql');

    var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'aquaponia'
    });
    
    connection.connect();
    console.log(connection);
    
    // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    // if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    // });
    
    // connection.end();
}

module.exports = function(){
    return createDbConnection;
}
