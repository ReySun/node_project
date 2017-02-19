var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 展示用户列表 */
router.get('/userlist', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function (e, docs) {
    res.render('userlist', {
      "userlist": docs
    });
  });
});

/* GET New User page */
router.get('/newuser', function(req, res){
  res.render('newuser', {title: 'Add New User'});
});

/*POST to Add User Service */
router.post('/adduser', function(req, res){

  //设置数据库参数
  var db = req.db;

  //从表单中获得数据
  var username = req.body.username;
  var userEmail = req.body.useremail;

  //设置collection
  var collection = db.get('usercollection');

  //Submit to the DB
  collection.insert({
    "username": username,
    "email": userEmail
  },function(err, doc){
    if(err){
      res.send("There was a problem adding the information to the database.");
    }else{
      res.redirect("userlist");
    }
  });
});
module.exports = router;
