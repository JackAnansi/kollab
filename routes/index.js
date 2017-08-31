var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    // Pass in values
    title: 'Kollab',
    subtitle: 'The Teamwork Task App'
  });
});

module.exports = router;
