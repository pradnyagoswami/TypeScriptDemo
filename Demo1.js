// let message = "Hello TypeScript";
// console.log(message);
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function (value) {
        console.log(value.a + " " + value.b);
    };
    return Test;
}());
var IData = { a: 10, b: 20 };
var t = new Test();
t.print(IData);
