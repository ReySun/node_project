/*const crypto = require('crypto');
const hash = crypto.createHash('sha512');
// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
console.log(hash.digest('hex'));*/
// 7e1977739c748beac0c0fd14fd26a544

/*
* update()方法默认字符串编码为UTF-8，也可以传入Buffer。
* 如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果
* 还可以使用更安全的sha256和sha512。
* */
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello, world!');
//hmac.update('Hello, nodejs!');
console.log(hmac.digest('hex')); // 80f7e22570...