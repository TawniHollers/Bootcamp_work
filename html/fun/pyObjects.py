# A class to make Player objects
class Player():
	# EVERY class needs a __init__
	# its like the constructor method
	# it runs ONCE and only ONCE, on instantiation
	# in Python, a function/method = definition
	# in __init__, we MUST pass self FIRST (self = this)
	def __init__(self, name, position, team, age, powerMove = "Reverse Dunk"):
		self.name = name;
		self.position = position;
		self.team = team;
		self.age = age;
		self.brithYear = 2018 - age;
		self.bucketsScored = 0;

	# Like init, class methods ALWAYS take self first
	def trade(self, newTeam):
		self.team = newTeam;
		# THERE IS NO PUBLIC OR PRIVATE IN PYTHON

	def score(self):
		self.bucketsScored += 1;

# No "new" keyword
player1 = Player("Shahar", "C", "Celtics", 25);
print player1.name;
player1.score();
print player1.bucketsScored
