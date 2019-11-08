const express = require("express");
var app = express();
var routes = require('./routes/index');
var routess = require('./routes/users');

app.set('view engine', 'pug');

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
 /*  maxAge: '1d', */
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));
app.use('/',routes );
app.use('/',routess );

/* app.get('/layout', function (req, res) {
  res.render('layout', { 
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "89106977372"
     }); */
/* }); */

app.listen(3000);