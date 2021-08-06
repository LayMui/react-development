const express = require('express');
const bodyParser = require('body-parser');
const data = require('../Data/data.json');
const path = require('path');
const port = 8000;
const DIR_DIST = path.join(__dirname, '../dist');
const HTML_STATIC = path.join(DIR_DIST, 'index.html');
//
const app = express();
//
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.static(DIR_DIST));
//
app.get('/', function(request, response){
  response.sendFile('HTML_STATIC');
})
//
app.get('/getweights', function(request, response){
  response.send(data);
})
//
app.post('/addnewdoc', function(request, response){
    let empName = request.body.empName;
    let empWeight = request.body.empWeight;
    console.log(`POST success, you sent ${empName} and ${empWeight}, thanks!`);
    response.end(`POST success, you sent ${empName} and ${empWeight}, thanks!`);
});
//
app.listen(port, function(){
	console.log("Listening " + port);
});
