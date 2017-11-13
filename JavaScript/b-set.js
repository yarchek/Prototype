'use strict';
/*
class Rect {
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}

const p1 = { x: 10, y: 20, width: 50, height: 50 };
Object.setPrototypeOf(p1, Rect.prototype);
//p1.__proto__ = Rect.prototype;

console.log(p1.toString());
*/
function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
};

const r = new Rect(1, 2, 20, 20);
console.log(r);