const fs = require('fs');
const path = require('path');

require('dotenv').config();

const pathToFile = path.join(__dirname, '..', 'env.json');
const content = `{
  "hawkToken": "${process.env.HAWK_TOKEN}"
}`;

fs.writeFile(pathToFile, content, function (err) {
  if (err) throw err;

  console.log('Created env.json file!');
});
