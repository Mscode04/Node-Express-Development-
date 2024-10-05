var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const value=['apple','oprenge','berry','def']
  const person={name:'Ms Shaheen',Comments:{Comment:'hello Love',data:28}}
  const user={name:'Ms Shaheen',admin:true}
  res.render('index', {person,value,user});
});

module.exports = router;
