import * as fs from 'fs';
/* 打开文件 */
fs.open('hello.txt', 'a', (err, fd) => {
    // 如果打开没有异常才进行操作
    if (!err) {
        /* 写入文件 */
        fs.write(fd, 'hello', (err) => {
            // 如果写入没有异常才进行操作
            if (!err) {
                console.log('写入成功');
            }
            /* 关闭文件 */
            fs.close(fd, (err) => {
                // 如果关闭没有异常才进行操作
                if (!err) {
                    console.log('关闭成功');
                }
            });
        });
    }
});
console.log('程序正在执行');
/* 注意是异步的 */
// 程序正在执行
// 写入成功
// 关闭成功
