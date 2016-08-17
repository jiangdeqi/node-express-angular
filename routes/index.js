var express = require('express');
var router = express.Router();
var user = require('../models/user').user;

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'index' });
});

/*login*/
router.get('/login', function(req, res) {
 	 res.render('login', { title: 'login' });
});

/*logout*/
router.get('/logout', function(req, res) {
  	res.render('logout', { title: 'logout' });
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

//新增用户
router.post('/addUser', function(req, res, callback) {
    //var data = req.body;
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


module.exports = router;