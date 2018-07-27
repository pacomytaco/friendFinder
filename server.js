//dependencies 
var express = require("express");
var bodyParser = require("body-parser");

//telling node that we are creating "express" server
var app = express();

//set initial port to use later in listener
var PORT = process.env.PORT || 8000;

//middleware to handle data parsing for incoming request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//routes 

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})

