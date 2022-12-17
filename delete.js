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

    var sql = "delete from loginusers where user_name = 'xyz'"

    connection.query(sql,function(error,results)
    {
        if(error) throw error
        console.log("removed")
        console.log(results)
    })
})