var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aputure video contest', page: "home"});
});

router.get('/prizes', function(req, res, next) {
  res.render('prizes', { title: 'Aputure video contest', page: "prizes"});
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Aputure video contest1', page: "faq"});
});

router.get('/judges', function(req, res, next) {
  res.render('judges', { title: 'Aputure video contest1', page: "judges"});
});

router.get('/sponsors', function(req, res, next) {
  res.render('sponsors', { title: 'Aputure video contest1', page: "sponsors"});
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Aputure video contest1', page: "contacts"});
});

router.get('/toc', function(req, res, next) {
  res.render('toc', { title: 'Aputure video contest1', page: "toc"});
});

module.exports = router;
