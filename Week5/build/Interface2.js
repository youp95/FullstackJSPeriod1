"use strict";
// Interfaces 2
//2b
const useFunc = (a, b, c) => {
    return [a, b, c];
};
//2c
const useFuncUpper = (a, b, c) => {
    return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
};
//2d
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
//2eh
f2(useFunc);
f2(useFuncUpper);
const useFuncErr = (a, b) => {
    return [a, b];
};
f2(useFuncErr);
//# sourceMappingURL=Interface2.js.map