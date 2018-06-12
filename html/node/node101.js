// At the top, put your required node modules.
// Require is kind of like the node version of <script>

// http is part of node core! We dont have to insall or ask for it. It comes with Node.
// Just require it. Node is like a mr potato-head man doll. Node is run lean!
// It doesnt come with bulk ware.
const http = require("http");
// console.log(http);

// fs = finle system. fs gives node acces to the computer its run on
// part of node. No need to install. It gives node access to the file system on THIS computer. The computer running the js file.
const fs = require("fs");

// createServer takes 2 args:
// 1. request
// 2. response
const server = http.createServer((req, res)=>{
	// console.log('Inside createServer');
	console.log(req.url);

	if(req.url === '/'){
		// writeHead takes a minimum of 2 args:
		// 1. status code
		// 2. mime-type of whatever is being sent back
		res.writeHead(200, {'content-type':'text/html'});
		res.write(`<h1>Server responding!</h1>`);
		res.end();
	}
	else{
		res.writeHead(404, {'content-type':'text/html'});
		res.write(`<h1>Requested page not found!!</h1>`);
		res.end();
	}
});

// Tell the server we created with the http object to listen for http traffic (duh) on port 8080
// When a request comes in on port 8080, via http, the callback/anon function in createServer will fire off with the req and res objects available
server.listen(8080);