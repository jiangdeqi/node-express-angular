var mongoose = require("mongoose");	//	顶会议用户组件
var db = mongoose.connect('mongodb://localhost/test',{},function (err, res) {
    if(err){
        console.log(err +'失败');
    }else{
        console.log(res +'数据库启动成功');
    }
});//连接数据库

var Schema = mongoose.Schema;	//	创建模型
var userScheMa = new Schema({
    userid: String,
    password: String
});	//	定义了一个新的模型，但是此模式还未和users集合有关联


exports.user = db.model('users', userScheMa); //	与users集合关联
