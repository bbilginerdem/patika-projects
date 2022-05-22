const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
	const url = req.url;
	console.log("Request was made: " + url);

	if (url === "/") {
		res.writeHead(200, { "Context-Type": "text/html" });
		res.write("<h2>Welcome to the homepage!</h2>");
	} else if (url === "/about") {
		res.writeHead(200, { "Context-Type": "text/html" });
		res.write("<h2>Welcome to the about page!</h2>");
	} else {
		res.writeHead(404, { "Context-Type": "text/html" });
		res.write("<h2>404 not found</h2>");
	}

	res.end();
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
