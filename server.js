// server.js
// where your node app starts

// init project
var express = require('express'),
    model = require('./model.js'),
    pivoty = require('./pivoty.js');



var app = express();
app.use(express.static('public'));


// the endpoint to get at the facts for the pivots
app.get("/facts", function(request,response){
  //worldbank
  //pivotsample -- zip code data - too big for this test
  model.find("worldbank", function(data){
      response.send(pivoty.pivot(data));
  })
});



// render the homepage
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});