var express = require('express');
var app = express();
var router = express.Router();
var { lay } = require('./models/models');
var { jas } = require('./models/neon');

// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
/* router.get('/', function(req, res) {
  res.send(' <body style="background:blue;">'+' <p style="font-size: 32px; ">Вы зашли на пустую страницу</p>'+'  <p><a href="http://localhost:3000/layout" style="font-size: 32px; color:green;">Главная страница</a></p>'+'</body>');
}); */
// define the about route
router.get('/indexp', function(req, res) {
	
  res.render('index',jas);
});


router.get('/layout', function (req, res) {
  res.render('layout',lay);
 	 
	 
});

module.exports = router;
