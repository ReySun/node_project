//引入mongoose
var mongoose = require('mongoose');
var settings = require("../settings");
//用户模型
var UserModel;
//文章模型
var PostModel;
//连接数据库
mongoose.connect('mongodb://' + settings.host + '/' + settings.db, function (err) {
    if (err) {
        console.err(err);
        throw err;
    }
});
//定义users-用户文档
var users = new mongoose.Schema({
    name: String,
    password: String,
    email: String
});
//声明一个User模型，使用它和数据库交互
UserModel = mongoose.model('users', users);
//定义posts-文章模型
var posts = new mongoose.Schema({
    name: String,
    time: new mongoose.Schema({
        date: Date,
        year: Number,
        month: String,
        day: String,
        minute: String
    }),
    title: String,
    post: String
});
//声明一个Posts模型，使用它和数据库交互
PostModel = mongoose.model('posts', posts);
module.exports = {"Users": UserModel, "Posts": PostModel};