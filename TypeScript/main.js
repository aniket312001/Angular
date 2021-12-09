"use strict";
exports.__esModule = true;
var mod_1 = require("./mod");
function doSomething() {
    for (var i = 0; i < 6; i++) {
        console.log(i + " ");
    }
    console.log("Finally :" + i);
}
doSomething();
//------------------- different type in ts
var n = 5;
n = 'a'; // error for changing datatype but it will run in main.js 
console.log(n);
var a;
var b;
var c;
var d;
var e = [1, 23, 4, 5];
var f = ["sam", 5, "john"];
console.log(f);
// ---------------------------
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["black"] = 1] = "black";
    Color[Color["pink"] = 6] = "pink";
})(Color || (Color = {}));
console.log(Color.pink);
var s = "sam";
console.log(s.endsWith('m'));
var ss;
ss = "efjemwsiogj";
console.log(ss.endsWith('m')); // we dont get intellisence 
console.log(ss.endsWith('m')); //now we get intellisence 
console.log(ss.endsWith('m')); //now we get intellisence 
// ----------------------------------------------------------
// arrow function
var doLog = function (msg) { return console.log(msg); };
doLog("huehgokfkea[keoiksvkdjojo");
var drawPoint = function (point) {
    console.log(point);
};
drawPoint({
    x: 5,
    y: 8,
    drow: function () {
        console.log(this.x + this.y);
    }
});
// interface only for declaration but if you want to implement then use class
// Class
var Point2 = /** @class */ (function () {
    // private x: number
    // private y: number
    // constructor(x?:number,y?:number){  // ? is optional 
    //     this.x = x
    //     this.y = y
    // }
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    } //no need to declare x,y and asign value this.x 
    Point2.prototype.draw = function () {
        return this.x + this.y;
    };
    Point2.prototype.getDistance = function () {
        return (this.x + this.y) / 2;
    };
    Point2.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("should be greater then 0");
        }
        this.x = value;
    };
    Object.defineProperty(Point2.prototype, "Y", {
        set: function (value) {
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2.prototype, "X", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    return Point2;
}());
var p = new Point2(6, 7);
p.setX(10);
p.Y = 6;
console.log(p.X);
console.log(p.draw());
var p4 = new mod_1.Point3(7, 7);
(p4.draw());
