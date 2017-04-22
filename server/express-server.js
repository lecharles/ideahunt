var express = require('express');
var app = express();

app.use('/', express.static('./public'));

var server = app.listen(4000, function() {
  console.log('Server is running...');
});
