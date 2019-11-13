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

router.get('/indexp', function(req, res) {
	
  res.render('index',jas);
});


router.get('/layout', function (req, res) {
  res.render('layout',lay);
 	 
	 
});

module.exports = router;
