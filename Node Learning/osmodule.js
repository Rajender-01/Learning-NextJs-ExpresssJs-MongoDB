// * The OS module provides operating system related utility methods and properite

import * as os from 'os';
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Hostname:', os.hostname());
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());