const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/";
var now = require('performance-now');



async function calcTime(f){
    var start = now();
    await f();
    var end = now();
    console.log('Time calculated for', f.name, (end - start).toFixed(5));

}

 function fetchPerson(url){
  try{
    return fetch(url).then(res => res.json())
} catch (err){
    console.log('ErrorErrorError');
 }
}

async function printNamesSequential() {
  console.log("Before");
  const person1 = await fetchPerson(URL+'1');
  const person2 = await fetchPerson(URL+'2');
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}

async function printNamesParallel() {
    console.log("Before");
    const person1 = fetchPerson(URL+'1');
    const person2 = fetchPerson(URL+'2');
    const result = await Promise.all([person1, person2]);
    console.log(result[0].name);
    console.log(result[1].name);
    console.log("After all"); 
  }

  //printNamesSequential();
  //printNamesParallel();
  calcTime(printNamesSequential); // calculated approx. 2260 ms
  calcTime(printNamesParallel); // calculated approx. 1106 ms
