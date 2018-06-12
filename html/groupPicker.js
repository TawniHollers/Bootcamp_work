//make students
let students = [
	`Newsha`,
	`Ross`,
	`Tawni`,
	`Joss`,
	`Victor`,
	`Mariano`
]

const classSize = students.length;
const groupSize = 2;

//shuffle the array
for(let i = 0; i < 100; i++){
	//Get 2 random numbers to swap
	const rand1 = Math.floor(Math.random() * students.length);
	const rand2 = Math.floor(Math.random() * students.length);
	// let temp = PUT IN HERE, THE VALUE OF STUDENT1
	let temp = students[rand1];
	students[rand1] = students[rand2];
	students[rand2] = temp;
	// TAKE THE VALUE OF STUDENT2 AND PUT IT IN STUDENT1
	// TAKE THE VALUE OF TEMP AND PUT IT IN STUDENT2
}
// console.log(students);

// Group the array into smaller groups of our groupSize
let finalGroups = [];
for(let i = 0; i < students.length; i +=groupSize){
	const thisGroup = students.slice(i, i+groupSize);
	finalGroups.push(thisGroup);
}

console.log(finalGroups);