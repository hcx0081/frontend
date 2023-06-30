// 获取一个[min, max]的随机整数
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min);
}

for (var i = 0; i < 50; i++) {
    var random = getRandomArbitrary(1.2, 10.1);
    console.log(random);
}
