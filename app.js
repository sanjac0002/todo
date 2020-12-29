var express=require("express");
var path=require("path");
var app=express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.get("/",function(req,res)
{
   // res.send("<h1>Hey!</h1>");
   res.render("header")
})



 app.listen(8080,function()                     /*3000 is the port and function is the callback_function */
 {
     console.log('Listening to port 8080');
 }) 


