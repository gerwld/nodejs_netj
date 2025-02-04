const fs = require('fs');

// reads file by 'data' chunks
// and calls it while new part is accessbile

const readStream = fs.createReadStream('./data/ex1.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./data/ex1__writeStream.txt');

readStream.on('data', (chunk) => {
   let data = chunk;
   console.log('new chunk:\t ' + data.toString().split(' ')[0] + '...');
   writeStream.write('\n\n\nnew write chunk:\n\t');
   writeStream.write(data);
});


// piping – same as prev, but easier if no changes
// readStream.pipe(writeStream)


// duplex