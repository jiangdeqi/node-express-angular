var mongoose = require("mongoose");	//	顶会议用户组件
var Schema = mongoose.Schema;	//	创建模型


var userScheMa = new Schema({
    userid: String,
    password: String
});	//	定义了一个新的模型，但是此模式还未和users集合有关联

var bookSchema = new mongoose.Schema({
    title: String,
    type: String,
    visitedCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    createdOn: {
        type: Date,
        default: Date.now
    },
    author: String
});

var msgBoard = new mongoose.Schema({
    title: String,
    user: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('users', userScheMa); //	与users集合关联
mongoose.model('books', bookSchema); //	与books集合关联
mongoose.model('msgBoard', msgBoard);