const os = require('os');

class OS_info{
    constructor(platform, osType, freeMemory, totalMemory, EOL){
        this.platform = os.platform;
        this.osType = os.type;
        this.freeMemory = os.freemem;
        this.totalMemory = os.totalmem;
        this.EOL = os.EOL;

    }
        printInfo(obj){
            return JSON.stringify(obj);
        }

}

module.exports = OS_info;

