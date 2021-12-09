"use strict";
exports.__esModule = true;
exports.Point3 = void 0;
var Point3 = /** @class */ (function () {
    // private x: number
    // private y: number
    // constructor(x?:number,y?:number){  // ? is optional 
    //     this.x = x
    //     this.y = y
    // }
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    } //no need to declare x,y and asign value this.x 
    Point3.prototype.draw = function () {
        return this.x + this.y;
    };
    Point3.prototype.getDistance = function () {
        return (this.x + this.y) / 2;
    };
    Point3.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("should be greater then 0");
        }
        this.x = value;
    };
    Object.defineProperty(Point3.prototype, "Y", {
        set: function (value) {
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point3.prototype, "X", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    return Point3;
}());
exports.Point3 = Point3;
