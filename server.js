'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/index', function (request, response){
  response.sendFile('index.html', {root: './public'});
})

app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}!`);
})
