// 1d

const getSecureRandoms = require("./getSecureRandoms");

const numbers = [96, 80, 64, 48, 32, 16];

getSecureRandoms(numbers)
.then(data => console.log(data))
.catch(e => console.log(e.message()))
.finally(console.log("Promise settled"));


const getSecureRandomsAsync = async () => {
    const result = await getSecureRandoms(numbers);
    console.log('Async done', result);

}

getSecureRandomsAsync();