var express = require('express');
var app = express();

//Set the static directory
app.use(express.static('./public'));

var portNumber = process.env.PORT || 4000;

app.listen(portNumber, ()=>{
	console.log("Server started on Port "+portNumber);
});
