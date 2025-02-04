const fs = require('fs');



// reading files
fs.readFile('./test.md', (err, data) => {
   if (err) console.log(err);
   console.log(data.toString());
});
console.log('\t - this log will fire first, as fs is async');


// directories
if (!fs.existsSync('./dist')) fs.mkdir('./dist/', (err) => console.log(err));


// write files
fs.writeFile('./dist/2.txt', '2 file content', () => {
   console.log('2.txt content written');
});


// delete files
if (fs.existsSync('./dist/2.txt'))
   fs.unlink('./dist/2.txt', (err) =>
      err ? console.log(err) : console.log('Removed dir')
   );

   
// rm directory with files
setTimeout(() => {
   fs.rmSync('./dist', { recursive: true, force: true });
}, 2000);
