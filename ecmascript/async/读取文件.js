import {readFile} from 'fs';

function readHello() {
    return new Promise((resolve, reject) => {
        readFile('hello.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function readWorld() {
    return new Promise((resolve, reject) => {
        readFile('world.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    var hello = await readHello();
    var world = await readWorld();
    console.log(hello.toString());
    console.log(world.toString());
}

main();
