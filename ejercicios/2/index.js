console.log("Segundo ejercicio");

const os = require('os');
const fs =require('fs')
    // VEO DATOS
const pcInfo = os.totalmem();
console.log(pcInfo)
    // GUARDO DATOS
const pcInfoText = pcInfo.toString()
fs.writeFileSync("2/output.txt", pcInfoText)