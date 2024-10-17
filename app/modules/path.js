const path = require("path");

// console.log(path.basename(__dirname));
// console.log(path.dirname(__dirname));
// console.log(path.extname(__dirname));

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

console.log(path.parse(__filename));

// result
/*
{
  root: 'E:\\',
  dir: 'E:\\sammi.ac\\nodejslesson\\app\\modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
*/

console.log(path.join(__dirname, "templates", "index.html"));
