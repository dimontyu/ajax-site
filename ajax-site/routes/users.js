var express = require('express');
var router = express.Router();
var { lay } = require('./models/models');
/* GET users listing. */

router.get('/', function(req, res,next) {
  res.send(' <body style="background:blue;">'+' <p style="font-size: 32px; ">Вы зашли на пустую страницу</p>'+'  <p><a href="http://localhost:3000/layout" style="font-size: 32px; color:green;">Главная страница</a></p>'+'</body>');
});

module.exports = router;
