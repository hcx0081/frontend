import {createReadStream} from 'fs';

var wr = createReadStream('hello.txt');
wr.setEncoding('utf8');
wr.on('data', (data) => {
    console.log('读取数据');
    console.log(data);
});
wr.once('readable', () => {
    console.log('有数据可读取');
});
wr.once('open', () => {
    console.log('打开可读流');
});
// 打开可读流
// 有数据可读取
// 读取数据
// hello
