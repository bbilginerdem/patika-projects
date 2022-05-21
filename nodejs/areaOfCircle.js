// const arguments = process.argv.slice(2);

function circleArea(radius) {
	let area = Math.PI * radius * radius;
	console.log("Radius: " + radius + ", Area: " + area);
}

// circleArea(parseInt(arguments[0]));

function circleCircumference(radius) {
	let circumference = 2 * Math.PI * radius;
	console.log("Radius: " + radius + ", Circumference: " + circumference);
}

module.exports = {
	circleArea,
	circleCircumference,
};
