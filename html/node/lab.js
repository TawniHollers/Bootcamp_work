const http = require('http');
const fs = require('fs');

function ticTacToe(){
	const theHTMLtoGet = fs.readFileSync('./ticTacToe.html');
	return theHTMLtoGet;
}

const server = http.createServer((req, res)=>{
	console.log(req.url);
	if(req.url === '/'){
		res.writeHead(200, {'content-type':'text/html'});
		res.end(ticTacToe());
	}
	else if(req.url === '/ticTacToe.css'){
		res.writeHead(200, {'content-type':'text/css'});
		const css = fs.readFileSync('./ticTacToe.css');
		res.end(css);
	}
	else if(req.url === '/ticTacToe.js'){
		res.writeHead(200, {'content-type':'application/javascript'});
		const js = fs.readFileSync('./ticTacToe.js');
		res.end(js);
	}
	else{
		res.writeHead(404, {'content-type':'text/html'});
		res.write(`<h1>404 Error!! You piece of trash.</h1>`);
		res.end();
	}
})

server.listen(8080);
console.log("Running on port 8080");