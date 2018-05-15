class Dog
  attr_accessor :name

  def initialize(name)
    self.name = name
    puts "A new dog was created"
  end

  def speak
    puts "*#{self.name} says* woof!"
  end

end


x = Dog.new("Barry")
x.speak

y = Dog.new("Larry")
y.speak
