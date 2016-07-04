var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/mes', function (req,res, next) {
  // body...
  var mes = [
      'happy 4th!',
      'amazing fireworks',
       'happy BBQ day yay!',
       'happy 4th! Beer!!!!!'
  ];
  return res.send(mes);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
