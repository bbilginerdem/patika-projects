const arguments = process.argv.slice(2);

function areaOfCircle(radius) {
	let area = Math.PI * radius * radius;
	console.log("Radius: " + radius + ", Area: " + area);
}

areaOfCircle(parseInt(arguments[0]));
