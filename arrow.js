var cars = [
	{name: "bmw", country: "german", random: 1245},
	{name: "audi", country: "german", random: 4578},
	{name: "hyundai", country: "korean", random: 5475}
];

var finalVal = cars
	.filter(function(car) { 
		return car.country==="german";
	})
	.map(function(car) {
		return car.random;
	})
	.reduce(function(prev, value){
		return (prev || 0) + value;
	})

console.log(finalVal);