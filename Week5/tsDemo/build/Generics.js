"use strict";
//Generics
//a
function reverseArr(arg) {
    return arg.reverse();
}
//console.log(reverseArr<string>(["a", "b", "c"]));
//console.log(reverseArr<number>([1, 2, 3]));
//console.log(reverseArr<boolean>([true, true, false]));
//console.log(reverseArr<number>(["a", "b", "c"]));
//b
class DataHolder {
    constructor(_value) {
        this._value = _value;
    }
    //c
    set value(val) { this._value = val; }
    get value() { return this._value; }
    ;
}
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//# sourceMappingURL=Generics.js.map