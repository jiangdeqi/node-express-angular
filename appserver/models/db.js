var mongoose = require("mongoose");	//	顶会议用户组件
var db = mongoose.connect('mongodb://localhost/test',{},function (err, res) {
    if(err){
        console.log(err +'失败');
    }else{
        console.log(res +'数据库启动成功');
    }
});//连接数据库

require('./books.js');