function reverse(x){
	console.log(x);
	let words = x.toLowerCase().split(" ");
	let sentence = "";
	for(let i = 0; i < words.length; i++){
		let letters = words[i].split("")
		for(let j = 0; j < letters.length; j++){
			if(j = letters.length - 1){
				let cap = letters[j].toUpperCase()
				let fWords = words[i].substring(0, words[i].length - 1) + cap;
				sentence += fWords + " ";
			}
		}
	}
	return sentence;
}

let x = "Make sure this works"

let fun = reverse(x);
console.log(fun);