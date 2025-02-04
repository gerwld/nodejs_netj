const fs = require('fs');

// reads file by 'data' chunks
// and calls it while new part is accessbile

const readStream = fs.createReadStream('./data/ex1.txt');

readStream.on('data', (chunk) => {
   let data = chunk;
   console.log('new chunk:\t ' + data.toString().split(' ')[0] + '...');
});
