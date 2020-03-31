const crypto = require('crypto');


// 1a

const randObj = {
    title: "6 Secure Randoms",
    randoms: []
};


/*
crypto.randomBytes(48, (err, buffer) => {
    let secureHex = buffer.toString('hex');
    randObj.randoms.push({
        length: 48, random: secureHex
    });
  crypto.randomBytes(40, (err, buffer) => {
    let secureHex = buffer.toString('hex');
    randObj.randoms.push({
        length: 40, random: secureHex
    });
  crypto.randomBytes(32, (err, buffer) => {
    let secureHex = buffer.toString('hex');
    randObj.randoms.push({
        length: 32, random: secureHex
    });
  crypto.randomBytes(24, (err, buffer) => {
    let secureHex = buffer.toString('hex');
    randObj.randoms.push({
        length: 24, random: secureHex
    });
  crypto.randomBytes(16, (err, buffer) => {
    let secureHex = buffer.toString('hex');
    randObj.randoms.push({
        length: 16, random: secureHex
    });
  
  crypto.randomBytes(8, (err, buffer) => {
    let secureHex = buffer.toString('hex');
    randObj.randoms.push({
        length: 8, random: secureHex
    });
  
        console.log(JSON.stringify(randObj));
                        
                        });
                    });
                });
            });
        });
    });

    */

    // 1b

    const makeSecureRandom = (size) => new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buffer) => {
            if (err) { 
            return reject (err);
        }
        let secureHex = buffer.toString('hex');
            return resolve({
                length: size, random: secureHex
            });
        });
    });

    const numbers = [48, 40, 32, 24, 16, 8];
    const promises = numbers.map((number) => makeSecureRandom(number));
    Promise.all(promises).then(data => console.log(data));

    // 1c

    const getSecureRandoms = (number) => {
        const promises = numbers.map((number) => new Promise((resolve, reject) => {
        crypto.randomBytes(number, (err, buffer) => {
            if (err) { 
            return reject (err);
        }
        let secureHex = buffer.toString('hex');
            return resolve({
                length: size, random: secureHex
            });
        });
        return Promise.all(promises);
    }))
    };

module.exports.getSecureRandoms = getSecureRandoms;
        








    

