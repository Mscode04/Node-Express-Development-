var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/up',function (req,res) {
  console.log(req.body);
  
  MongoClient.connect('mongodb://localhost:27017',function (err,client){
    const db = client.db('lex');
    if(err)
      console.log('errr');
      
    else
    console.log('done');
    
      db.collection('user').insertOne(req.body)
  })
  res.send("Form submited")
  
})
module.exports = router;
