// Promises...

// JavaScript is async.

// console.log("1");
// setTimeout(()=>{
// 	console.log("2");
// },0);
// console.log("3");
// for(let i = 0; i < 1000; i++){
// 	//looping...
// }
// console.log("Loop done");

// Initial request to get list of movies
// With that list of movies, comes all thier ids. Take the ids and get specific info
// With EACH movie data, we want to get the cast list



// $.getJSON(movieURL, (movieData)=>{
// 	$.getJSON(specificMovieUrl, (thisMovie)=>{
// 		$.getJSON(specificMovieCastUrl, (castData)=>{
// 			// finally, we can do something with:
// 			// 1. movieData
// 			// 2. thisMovie
// 			// 3. castData
// 		})
// 	})
// })
// $.prototype.getJSON = function(url, callback){
// 	doing stuff...
// 	callback(dataIGot);
// }

// JS libraries to fake Promises
// -bluebird
// -q

// What is a promise:
// -All a promise is, is a JS constructor (class) that gives you a few methods.
// -Hopefully these methods make your code easier to read
// Methods:
// -then
// -all
// -race
// --resolve
// --reject

let myFirstPromise = new Promise(resolve, reject); //resolve and reject are both callbacks (can be named anything)
console.log(myFirstPromise);

//make a function that returns a promise
// then do const x = (function with promise)
