function caseConverter(str, conversionType){
	let fun = [];
	let convertedstr;
	if(conversionType == "camelcase"){
		//console.log(str);
		const seperatedStr = str.split("_");
		//console.log(seperatedStr);
		for(let i = 0; i < seperatedStr.length; i++){
			// Use this if using regular sentences instead of snakecase
			// if(i == 0){
			// 	let firstWord = seperatedStr.shift().toLowerCase();
			// 	fun.push(firstWord);
			// 	console.log(fun);
			// }
			if(i == 0){
				fun.push(seperatedStr[i]);
			}
			else{
				let word = seperatedStr[i];
				let letter = word.split('');
				//console.log(letter);
				let upper = letter.shift().toUpperCase();
				letter.unshift(upper);
				//console.log(upper);
				let finishedWord = letter.join('');
				fun.push(finishedWord);
			}
		}
		convertedstr = fun.join('');
	}
	else{
		let seperatedStr = str.split(/(?=[A-Z])/);
		//console.log(seperatedStr);
		for(let i = 0; i < seperatedStr.length; i++){
			let word = seperatedStr[i].toLowerCase();
			//console.log(word);
			fun.push(word);
		}
		convertedstr = fun.join('_');
	}
	return convertedstr;
}

let str = "this_is_a_string";
let conversionType = "camelcase";

let finishedString = caseConverter(str, conversionType);
console.log(finishedString);

let str2 = "thisIsAString";
let conversionType2 = "snakecase";

let finishedString2 = caseConverter(str2, conversionType2);
console.log(finishedString2);