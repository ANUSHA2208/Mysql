const mysql = require("mysql");


const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:"180984",
        database:'nodejs'
    }
)


connection.connect(function(error)
{
    if(error) throw error

    var sql = "select * from emp where salary > 50000"

    connection.query(sql,function(error,results)
    {
        if(error) throw error
        console.log("displayed")
        console.log(results)
    })
})