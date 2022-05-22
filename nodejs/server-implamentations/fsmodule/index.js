const fs = require("fs");

const json = JSON.stringify({ name: "Employee 1 Name", salary: 2000 });

// Write a file

// fs.writeFile("employees.json", json, "utf8", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

// Read a file

// fs.readFile("employees.json", "utf8", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

// Delete

fs.unlink("employees.json", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
