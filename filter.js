var cars = [
        { name:"Ford", "model": "sedan" },
        { name:"BMW", "model": "hatch" },
        { name:"Fiat", "model": "hatch" }
		]
		
var hatch = cars.filter (function(cars){
	return cars.model === "hatch";
})