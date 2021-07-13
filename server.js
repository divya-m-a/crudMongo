const dbconfig = require('./config/config.js');

var mongoose = require('mongoose');
var express = require('express');

var app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.Promise = global.Promise;

//connect database

mongoose.connect(dbconfig.url,{
    useNewUrlParser: true
}).then(()=>{
 console.log("database Connected Successfully");
}).catch(err =>{
    console.log("failed to connect" ,err);
    process.exit();
})


require('./app/routes/note.route.js')(app);

app.listen(2000);