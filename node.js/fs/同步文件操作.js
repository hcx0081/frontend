import * as fs from 'fs';

const fd = fs.openSync('hello.txt', 'a');
fs.writeSync(fd, 'hello');
