var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Halo guys', function (err) {
  if (err) throw err;
  console.log('Saved!');
});