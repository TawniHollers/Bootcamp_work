// When the onclick happens to the button.... this function will run
function rollDice(){
	//console.log(`The user just clicked the roll button!`)
	//random number between 1-6
	let rand1 = Math.ceil(Math.random() * 6);
	let rand2 = Math.ceil(Math.random() * 6);

	// The dice images all follow this convention: dN.gif where n is a number between 1-6
	// Use JS to update the DOM. Update the dice images, so  that they use the image from our random numbers.
	let dice = document.getElementById('dice');
	dice.children[0].src = `./dragon-assets/d${rand1}.gif`
	dice.children[1].src = `./dragon-assets/d${rand2}.gif`
	console.dir(dice);

	if(rand1 + rand2 > 8){
		document.getElementById('dragon').children[0].src = "https://png.pngtree.com/element_origin_min_pic/17/07/23/473f204a1589862d0264b14f926b4b59.jpg";
		document.getElementById('dragon').children[0].style.width = "200px";
		//document.getElementById('dragon').children[0].style.height = "200px";
		document.getElementById('message').innerHTML="<h1>You have defeated the dragon!!";
	}
	else{
		//put in a different picture for when you lose
		document.getElementById('dragon').children[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS174spTW8H1o3q-skQgm5MqNmrVDhR6EmUbUaKmKIl9zgZAIdiw";
		//can disable the button after the game has been played if you want to
	}
}

//console.dir(document);
// When you are in the browser... EVERYTHING belongs to the window object.
// There is NO exception to this, so you dont even need to include it.
// alert(`Fun stuff`);

// let dragon = document.getElementById('dragon');
// console.dir(dragon);
// dragon.innerHTML = `<h1>JavaScript was here!</h1>`;
