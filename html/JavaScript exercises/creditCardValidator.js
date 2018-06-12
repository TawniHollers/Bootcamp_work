function creditCardValidator(card){
	const num = parseInt(card);
	let numbers = card.split('');
	let firstFour = card.slice(0,4);
	//console.log(num.toString().length);
	//console.log(numbers);
	console.log(firstFour);
	if(numbers[0] == 4){
		if(num.toString().length == 16){
			console.log("Valid, Visa");
		}
		else{
			console.log("Not a valid card");
		}
	}
	else if(firstFour == 6011){

	}
}

let cardNumber = '4123247657612834';

let cards = creditCardValidator(cardNumber);