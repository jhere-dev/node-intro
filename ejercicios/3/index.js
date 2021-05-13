console.log("Tercer ejercicio");

const cowsay = require("cowsay");
const fs = require("fs")


const cow = cowsay.say({
	text : "Code house academy",
	e : "oO",
	T : "U "
});

    
const cowText = cow.toString()
fs.writeFileSync("3/output.txt", cowText)


