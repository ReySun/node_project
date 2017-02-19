module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title: 'Express'});
    });
    /*
     说明：本接口用于获取博客列表的信息的。http://localhost:3000/get/post?name=zzz
     1.get/:说明是get请求
     2.如果传递了name参数，则说明是：请求某一个人的博文。如：http://localhost:3000/get/post?name=zzz
     3.如果没传递name参数，则说明是请求所有人的博文列表，显示在首页
     */
    app.get('/get/post', function(req, res) {
        res.send('本接口用于获取博客列表的信息的!');
    });

    /*
     说明：本接口用于获取用户信息的。http://localhost:3000/get/user?name=zzz
     1.get:说明是get请求
     2.如果传递了name参数，则说明是：请求某个用户的信息。如：http://localhost:3000/get/user?name=admin
     3.如果没传递name参数，则说明是请求所有用户的信息
     */
    app.get('/get/user', function(req, res) {
        res.send('本接口用于获取用户信息的!');
    });

    /*
     说明：本接口用于提交注册用户信息的。http://localhost:3000/post/reg
     1.post/:说明是post请求
     2.注册未成功，返回Json格式如下：{status:'failed',message:"xxxxxx!"}
     3.注册成功，返回Json格式如下：{status:'success',message:"注册成功!",user:user}
     */
    app.post('/post/reg', function(req, res) {
        res.send('本接口用于提交注册用户信息的!');
    });

    /*
     说明：本接口用于提交用户登录信息的。http://localhost:3000/post/login
     1.post/:说明是post请求
     2.登录未成功，返回Json格式如下：{status:'failed',message:"xxxxxx!"}
     3.登录成功，将用户对象保存到Session
     4.登录成功，返回Json格式如下：{status:'success',message:"登陆成功!",user:user}
     */
    app.post('/post/login', function(req, res) {
        res.send('本接口用于提交用户登录信息的!');
    });

    /*
     说明：本接口用于提交用户的编写的博文的。http://localhost:3000/post/post
     1.post/:说明是post请求
     2.提交未成功，返回Json格式如下：{status:'failed',message:"出错了，原因如下："+err}
     3.提交成功，返回Json格式如下：{status:'successed',message:"保存成功！"}
     */
    app.post('/post/post', function(req, res) {
        res.send('本接口用于提交用户的编写的博文的!');
    });

    /*
     说明：本接口用于用户注销。http://localhost:3000/get/logout
     1.get/:说明是get请求
     2.注销用户，即清除服务端的Session
     */
    app.get('/get/logout', function(req, res) {
        res.send('本接口用于用户注销的!');
    });
};
