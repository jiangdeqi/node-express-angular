var express = require('express');
var router = express.Router();
var db = require('../models/db');
var mongoose = require("mongoose");
require('../models/user');

var user = mongoose.model('users');
var books = mongoose.model('books');

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'index' });
});

/*login 页面*/
router.get('/login', function(req, res) {
 	 res.render('login', { title: 'login' });
});
/*logout 页面*/
router.get('/logout', function(req, res) {
 	 res.render('logout', { title: 'io聊天室' });
});

/*hompage*/
router.post('/index', function(req, res) {
    var query_doc = {userid: req.body.userid, password: req.body.password};
    (function(){
        user.count(query_doc, function(err, doc){
            if (doc == 1) {
                res.render('index', { title: 'index' });
            } else {
                res.render('homepage', { title: 'homepage2' });
            }
        });
    })(query_doc);
});


//books
router.post('/books', function(req, res) {
    books.find(function(err,result){
       if(err){
         res.send(err);
       }else{
          res.json(result);
       }
   });

});



/* 用户登录 */
router.post('/ucenter', function(req, res) {
    var query = {userid: req.body.userid, password: req.body.password};
    (function(){
            user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
            if(doc == 1){
                console.log(query.name + ": 登陆成功 " + new Date());
                res.render('index', { title:'ucenter' });
            }else{
                console.log(query.name + ": 登陆失败 " + new Date());
                res.redirect('login');
            }
        });
    })(query);
});



//新增用户
router.post('/addUser', function(req, res, callback) {
    var kitty = user(req.body);
    kitty.save(function (err ,doc) {
        if (err) {
            console.log(err + '错误');
        } else {
            console.log('success');
        }
    });
    callback(res);
    return '';
});

//查询用户
router.post('/findUser', function(req, res) {
    var students = user.find(function(err,result){
       if(err){
         res.send(err);
       }else{
          res.json(result);
       }
   });
});

//删除
router.post("/delete", function(req, res, callback){  
    user.find({'userid':req.body.userid},function(err,doc){  
        if(!doc){  
            return next(new NotFound("Doc not found"))  
        }else{  
            doc[0].remove();
        }
        callback(res);
    });  
});  

module.exports = router;

