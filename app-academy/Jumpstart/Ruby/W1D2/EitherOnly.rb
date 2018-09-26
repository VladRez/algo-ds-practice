=begin
Write a method either_only(number) that takes in a number and returns a 
boolean indicating if the number is divisible by either 3 or 5, but not both.
=end

def is_div_by_5(number)
    return number % 5 == 0
    end
    
    puts is_div_by_5(10) # => true
    puts is_div_by_5(40) # => true
    puts is_div_by_5(42) # => false
    puts is_div_by_5(8)  # => false