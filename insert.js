const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:"180984",
        database:"nodejs"
    }
)

connection.connect(function(error)
{
    if(error) throw error;
    var sql = "INSERT into loginusers(user_name,user_pass) values ('xyz','xyz')"
    connection.query(sql,function(error,results)
    {
        if(error) throw error;
        console.log("added")
    })
})



