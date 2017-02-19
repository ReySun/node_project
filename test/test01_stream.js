'use strict';
var fs = require('fs');
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);
/*
* 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。
* 一个Readable流和一个Writable流串起来后，所有的数据自动从Readable
 流进入Writable流，这种操作叫pipe。

 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。

 默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
 如果我们不希望自动关闭Writable流，需要传入参数：
 readable.pipe(writable, { end: false });
* */
