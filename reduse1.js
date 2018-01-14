'use strict'

var values = [
		{ amt: 100 },
		{ amt: 100 },
		{ amt: 100 },
		{ amt: 100 }
	];
	
var sum1 = values.reduce(function(sum, value){
	return sum + value.amt;
}, 0);

//Something went wrong here!!
var sum2 = values.reduce((sum, value) => sum + value.amt, 0);

console.log(sum1, sum2);