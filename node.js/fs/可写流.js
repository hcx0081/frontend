import {createWriteStream} from 'fs';

var ws = createWriteStream('hello.txt');

ws.once('close', () => {
    console.log('关闭可写流');
});
ws.once('open', () => {
    console.log('打开可写流');
});

ws.write('hello\n');
ws.write('hello');
ws.write('hello');
ws.write('hello');

ws.close();
