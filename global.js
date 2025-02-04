console.log(__dirname);
console.log(__filename);

const os = require('os');

console.log(os.platform(), os.homedir());

let b = 0;
let int = global.setInterval(() => {
   b++;
   console.log('Interval call');

   if (b === 3) clearInterval(int);
}, 1000);
