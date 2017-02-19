var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function (req, res, next) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

/* POST到adduser. */
router.post('/adduser', function (req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

/* DELETE 到 deleteuser */
router.delete('/deleteuser/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({'id': userToDelete}, function (err) {
        res.send((err === null) ? {msg: ''} : {msg: 'error: ' + err});
    });
});

module.exports = router;
/*
 * 这段代码的意思是如果HTTP GET到/user/userlist，服务器就会返回一个包含所有用户的JSON数据。
 * 显然如果是大型工程的话，你可能想要一次获取有限的数据量，
 * 例如添加以分页的形式在前端展示出来，但是现在看来应该不需要。
 * */
