var express = require('express');
var router = express.Router();
var fs = require('fs');
var datajson = require('./data.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});
router.post('/list',function(req,res,next){
  
  var username = req.body.username;
  var username1 = datajson['users'][0].username;
  var pwd = req.body.pwd;
  var pwd1 = datajson['users'][0].password;
  
  if(username == username1 && pwd == pwd1){
    res.render('list',{list: datajson['chapterList']});
  }else{
    res.send('登录失败');
  }
})
module.exports = router;
