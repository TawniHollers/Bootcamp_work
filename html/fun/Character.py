# the class takes as a param the parent class
class Character(object):
	def __init__(self, name, health, power):
		self.name = name;
		self.health = health;
		self.power = power;
	def take_damage(self, amountOfDamage):
		self.health -= amountOfDamage;
	def is_alive(self):
		return self.health > 0;