var car = (function () {
    var start = 13;// 起步价
    var total = 0;
    return {
        price: function (m) {
            total = start + 3 * m;
            console.log(total);
        },
        congestion: function (flag) {
            console.log(flag ? total + 10 : total);
        }
    };
})();
car.price(2);
car.congestion(true);