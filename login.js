const mysql = require("mysql");
const express = require("express");
const bodyParse=require("body-parser");
const encoder = bodyParse.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));  //add css

const connection = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"180984",
    database:"nodejs"
});


//connect to the database
connection.connect(function(error)
{
    if(error) {
    throw error
    }
    else 
    {
        console.log("connected")
    }
});


//connent to html
app.get("/",function(req,res)
{
   res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder,function(req,res)
{
    var username=req.body.username;
    var password=req.body.password;

    connection.query("select * from loginusers where user_name = ? and user_pass = ?",[username,password],function(error,results,fields)
    
    {
        if(results.length > 0)
        {
            res.redirect("/welcome");
        }
        else
        {
            res.redirect("/");
        }
        res.end();
    })
})


//login crt
app.get("/welcome",function(req,res)
{
    res.sendFile(__dirname + "/welcome.html")
})


//set app port
app.listen(4000);
