"use strict";
class Mobile {
    constructor(Model, color, Performance) {
        this.Model = Model;
        this.color = color;
        this.Performance = Performance;
    }
}
const Samsung = new Mobile("S9", "Black", "Good");
const Iphone = new Mobile("Iphone 14 pro", "Purple", "Good");
const BlackBerry = new Mobile("BBM1", "Black", "Bad");
console.log(Samsung);
console.log(Iphone);
console.log(BlackBerry);
