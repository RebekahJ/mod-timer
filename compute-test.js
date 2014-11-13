var timeSt = new Date().getTime();
console.log("Time at start is: " + timeSt);

var module_to_test = require('./lib'),
	seedrandom = require('seedrandom'),
	prng = seedrandom('hello.');

// Create an array containing random numbers:
var randoms = new Array( 1000 );

for (var i = 0; i < randoms.length; i++) {
    randoms[i] = Math.round(prng() * 100);
}

function printEnd() {
	console.log("\nStart time was: " + timeSt );
	var timeEnd = new Date().getTime();
	console.log("End time is: " + timeEnd);
	console.log("Time taken: " + (timeEnd - timeSt) );
}

setTimeout(printEnd, 0);

module_to_test( randoms );
