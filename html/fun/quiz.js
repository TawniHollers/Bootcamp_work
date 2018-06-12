function findColors(colors){
	let colorArr = [];
	for(let i = 0; i < colors.length; i++){
		if(colors[i].b > 100 && colors[i].g > 100){
			colorArr.push(colors[i]);
		}
	}
	return colorArr;
}

let colors = [
                {
                    colorName : "red",
                    r: 255,
                    b: 0,
                    g: 0
                },
                {  
                    colorName : "pink",
                    r: 255,
                    b: 182,
                    g: 192
                },
                {
                    colorName : "brown",
                    r: 210,
                    b: 105,
                    g: 30
                },
                {  
                    colorName : "cyan",
                    r: 0,
                    b: 255,
                    g: 255
                }
            ]

let fun = findColors(colors);
console.log(fun);

//Answer is [{ colorName: 'pink', r:255, b:182, g:192}, {colorName: 'cyan', r:0, b:255; g:255}]