const daysOfWeek = [0, 1, 2, 3, 4, 5, 6];

for(var i = 0; i < daysOfWeek.length; i++){
	if(daysOfWeek[i] == 0 || daysOfWeek[i] == 6){
		console.log("Sleep In");
	}
	else{
		console.log("Go to work");
	}
}

var year = 2004;
var month = 3;


var billAmount = 5.00;
var finalBillAmount = 0;
var service = "good";
if(service == "bad"){
	finalBillAmount = billAmount + (billAmount * .10);
}
else if(service == "fair"){
	finalBillAmount = billAmount + (billAmount * .15);
}
else{
	finalBillAmount = billAmount + (billAmount * .25);
}
console.log("Final Bill Amount is ", finalBillAmount);