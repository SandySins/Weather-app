
const express = require('express')
const app=express();
const server = require('http').Server(app)
const path = require("path")
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home')
})

server.listen(3030,()=>{
  console.log("Running at port 3030")
});