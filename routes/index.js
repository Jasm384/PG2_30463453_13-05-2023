var express = require('express');
var router = express.Router();
const db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = 'Julian Sojo'
  res.render('index', {
    title: 'CV Juan',
    name:name,
  });
});

router.post('/form', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let date = new Date();
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log(req.body)
  console.log({name, email, message, date, ip});


  db.insert(name, email, message, date, ip);

  

  
  res.redirect('/');
});


router.get('/contactos', function(req, res, next){
  db.select(function (rows){
    console.log(rows);
  });
  res.send('ok');
});

module.exports = router;
