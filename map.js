var cars = [
        { name:"Ford", "model": "sedan" },
        { name:"BMW", "model": "hatch" },
        { name:"Fiat", "model": "hatch" }
		]
		
var carnames1 = cars.map(function(car){
	return car.name;
});

var carnames2 = cars.map(function(car){
	return car.name+ " is a " +car.model;
});

//Arrow functions with ES6
var carnames3 = cars.map((car) => car.name);