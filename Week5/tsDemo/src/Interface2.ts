// Interfaces 2

//2a

interface myFunc{
    (a: string,
    b: string,
    c: string):
    string[];
}

//2b
const useFunc : myFunc =(a: string, b: string, c:string): string[] => {
    return[a, b, c]
} 

//2c
const useFuncUpper : myFunc =(a: string, b: string, c:string): string[] => {
    
    return[a.toUpperCase(), b.toUpperCase(), c.toUpperCase()]
} 

//2d
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

//2eh
f2(useFunc);
f2(useFuncUpper);

const useFuncErr : myFunc =(a: string, b: string): string[] => {
    return[a, b]
} 

f2(useFuncErr);


