console.log("Primer ejercicio");

const fs = require('fs')
            // LEER FICHERO
const newText = fs.readFileSync('1/input.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data); 
  }
});
        // TRANSFORMAR FICHERO
const transformText = newText.toUpperCase()
        // GUARDAR FICHERO
fs.writeFileSync("./1/output.txt", transformText)

