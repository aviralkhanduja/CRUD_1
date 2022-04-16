const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('./assets'));
const router=require('./routes/index');
app.use('/',router);
app.listen(8000, function(err){
    if(err){
        return console.log('Error in starting the server ',err);
    }
    return console.log('Server up and Running on ',8000);
});