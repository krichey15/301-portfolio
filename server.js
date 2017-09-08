'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}!`);
})
