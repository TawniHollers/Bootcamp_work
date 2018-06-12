function freqencyWord(str){
	let str2 = str.split(" ");
	str2.sort();
	var obj = {}
	let singleWords = [];
	let number = [];
	for(let i = 0; i < str2.length; i++){
		if(singleWords.length == 0){
			str3 = str.split(str2[i])
			number.push(str3.length - 1)
			singleWords.push(str2[i]);
		}
		else{
			if(str2[i] != str2[i - 1]){
				singleWords.push(str2[i])
				str3 = str.split(str2[i])
				number.push(str3.length - 1)
			}
			
		}
	}

	for(let j = 0; j < singleWords.length; j++){
		obj[singleWords[j]] = number[j];
	}
	return(
		obj
	)
}

let sentence = "the day is sunny the the the sunny is is"

let t = freqencyWord(sentence)
console.log(t)