const http = require('http');

const apikey = '5f6f34df4de35dad4d84672d2436f921';
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

// This file, node is the requester, not the responder
// the http.get method takes 2 args:
// 1. Where (endpoint)
// 2. Code to run when back, with the data as a param
const request = http.get(weatherUrl, (theResponse)=>{
	// console.log(theResponse);
	// .on takes 2 args
	// 1. What event to do X on
	// 2. callback to run, when even happens
	let weatherData = '';
	// data is a built in event for response data
	theResponse.on('data',(chunkOfData)=>{
		console.log(chunkOfData);
		console.log(`\n`);
		weatherData += chunkOfData;
	});
	// end is a built in event for response data
	theResponse.on('end',()=>{
		console.log(typeof(weatherData));
		console.log(typeof(JSON.parse(weatherData)));
		console.log(JSON.parse(weatherData)); //Object from a string
	})
})