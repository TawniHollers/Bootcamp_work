// JS, since ES1, up through ES5, used consructor functions to make object. There was NO  class keyword.
// All a constructor is, is a function that takes arguments and it has it's own context... "this"
// The function should be proper case, as a convention.
// function Player(name, heroClass, weapon){
// 	//inside the function, is where you declare your instance variables
// 	this.name = name;
// 	this.class = heroClass;
// 	this.weapon = weapon;
// 	// this.species = `Human`;
// 	// this.takeDamage = function(damagePoints){
// 	// 	console.log(`${this.name} has taken ${damagePoints} of damage!`);
// 	// }
// 	this.threatenTV = function(angerLevel){
// 		console.log(`${this.name} has exploded with rage`);
// 	}
// }

// Player.prototype.takeDamage = function(damagePoints){
// 	console.log(`${this.name} has taken ${damagePoints} of damage!`);
// }

// Player.prototype.species = `Human`;

// let player1 = new Player(`Dario`, `ultimateWarrior`, `sword`);
// console.log(player1);
// player1.numOfKills = 1000;
// console.log(player1);
// let player2 = new Player(`Hunter`, `Hunter`, `Bow`);
// console.log(player2);

// player1.takeDamage(15);
// player2.takeDamage(12);

// console.log(Player);

// a class is NOT a function
class Player{
	constructor(name, heroClass, weapon, speed){
		this.name = name;
		this.heroClass = heroClass;
		this.weapon = weapon;
		this.speed = speed;
	}
	takeDamage(damagePoints){
		console.log(`${this.name} has taken ${damagePoints} of damage.`);
	}
}

class Car{
	constructor(make, model, mpg, topSpeed){
		this.make = make;
		this.model = model;
		this.mpg = mpg;
		this.topSpeed = topSpeed;
	}
	start(){
		console.log("Vroom vroom");
	}
}

class ElectricCar extends Car{
	constructor(make, model, maxDistance, topSpeed){
		// BEFORE ANYTHING ELSE HAPPENS IN A SUBCLASS constructor.. we have to call the parent constructor super
		super(make, model, null, topSpeed);
		this.maxDistance = maxDistance;
	}
	start(){
		// this is an electricCar... they dont make noise
		console.log(`... ... ...`);
	}
}
const tobysCar = new ElectricCar(`Tesla`, `Model S`, `200 miles`, `180`);
console.log(tobysCar);
tobysCar.start();

const doMath = require(`./staticMethods`);
console.log(doMath.add(2,3));