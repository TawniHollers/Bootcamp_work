// Moon problem

// First full moon of 2000 was Jan 21, 00:40:24
// 29 Days, 12 hours, 44 minutes

const firstFullMoonOf2000 = new Date("Friday, 21 January 2000, 00:40:24");
console.log(firstFullMoonOf2000);

const firstFullMoonOf2000InSeconds = firstFullMoonOf2000.getTime()/ 1000;
console.log(firstFullMoonOf2000InSeconds);

// A lunar month -> 29 days, 12 hours, 44 minutes
// 60 seconds a minute, 60 minutes an hour, 24 hours a day, 29 days
const daysAsSeconds = 60 * 60 * 24 * 29;
const hoursAsSeconds = 60 * 60 * 12;
const minutesAsSeconds = 60 * 44;
const secondsInALunarMonth = daysAsSeconds + hoursAsSeconds + minutesAsSeconds;
console.log(secondsInALunarMonth);

// Everything is in seconds when divided by 1000
const tsOfEnd = new Date("Dec 31 2999, 23:59:59").getTime() / 1000;
console.log(tsOfEnd);

let currentMoonTs = firstFullMoonOf2000InSeconds;
let fullMoonArray = [];
while(currentMoonTs < tsOfEnd){
	fullMoonArray.push(new Date(currentMoonTs * 1000).getMonth());
	currentMoonTs += secondsInALunarMonth;
}

console.log(fullMoonArray);
//Now go through the array and see how many times the same month is next to each other (0-11)