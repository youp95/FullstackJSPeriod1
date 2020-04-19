//Generics


//a
function reverseArr<T>(arg: T[]) {
    return arg.reverse();
}

//console.log(reverseArr<string>(["a", "b", "c"]));
//console.log(reverseArr<number>([1, 2, 3]));
//console.log(reverseArr<boolean>([true, true, false]));
//console.log(reverseArr<number>(["a", "b", "c"]));

//b
 class DataHolder<T> {
    constructor(private _value: T){ }

//c

set value(val : T) {this._value = val;}
get value(){return this._value};

    }


let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);



