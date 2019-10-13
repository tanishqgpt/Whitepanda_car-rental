var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Setting the template engine
app.set('view engine','ejs');


//For the static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

//listen to the port
app.listen(3000);
console.log('You are listening to port 3000');
