# Printing stuff...
# By the way, ; are optional
# Python is an indented langauage. That means... indentation is very important

# print "test"
# print("Test"); # Python3

# print """
# 	Triple quatoes will allow you to type on multiple lines.
# 	It looks ugly, but its useful.
# """

# In Python, all variables are dynamically typed. Meaning...
# there is no int, String, [], etc. Duck/dynamically typed
# To declare a variable in Python, just start using it.
# name = None; This is pointing at nothing
# name = "Robert Bunch"

# print "Hello, world, my name is %s" % name
# print "Hello, world, my name is %s. Again, my name is %s" % (name, name)

# age = 30;
# print "Hello, world, my name is %s, I am %d" % (name, age)

# Python Data Types
# Strings - same old.
# Numbers - same old, float, integer
# print type(3.3)
# Booleans
# True, False
# print type(True)
# lists = array
# dictionaries = JS Object, key value pair
# my_dictionary = {
# 	"name": "Rob",
# 	"occupation": "Teacher"
# }
# print my_dictionary["name"];
# print my_dictionary["occupation"];

# Object

# concatonate with the +
# meaning_of_life = 42;
# you cannot concatonate disperate data types. you have to explicityly cast
# print "The meaning of life " + str(meaning_of_life)

# Like in Jave, Strings are objects and therefore have methods
# print "The meaning of life is {}".format(meaning_of_life)

# In Python, there is no auto-incrament, no c++
# counter = 1;
# counter++;
# counter += 1;

# Conditionals
# print 16 == "16"
# As an indented langauage, you start ifs and fors with a :
# Everthing inside that block, is indented
# if(16 == 16):
	# print "16s are equal!"

# Python has pip, easy_install which are its package managers
# import random
# guess the number game...
# keep_playing = True;
# correct_number = random.randint(1,10);
# while keep_playing:
# 	guess = int(raw_input("Guess a number between 1 and 10"))
# 	if(guess == correct_number):
# 		print "Hooray! You win!"
# 		keep_playing = False;
# 	else:
# 		print "Try again"

# A list functions just like an array
students = [
	"Brandon",
	"Shahar",
	"Tawni",
	"Noelle",
	"Mariano",
	"Jos"
];

print students[0]
# in python, a negative index, starts from the end and works backwards
print students[-1]

# push = append
students.append("Andrew");
print students[-1]
students.pop();
print students[-1]

# range will create an array with each number
# print range(0, 5);
# range is inclusive of the first number, EXCLUSIVE of the second
for i in range(0, len(students)):
	print students[i]

# lists have a sort method... sort MUTATES the list
students.sort()
print students;
students.reverse();
print students

# sorted is a method that we hand an array but returns the
# sorted array, and DOES NOT MUTATES
print sorted(students)
print students

nameSplit = students[0].split('a')
print nameSplit