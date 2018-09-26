=begin
Write a method is_valid_name that takes in a string and 
returns a boolean indicating whether or not it is a valid name.
=end

# A name is valid is if satisfies all of the following:
# - contains at least a first name and last name, separated by spaces
# - each part of the name should be capitalized
#
# Hint: use str.upcase or str.downcase
# "a".upcase # => "A"

def is_valid_name(str)
    return false if str.split.length < 2
      str.split.each{|name| return false unless name[0] == name[0].upcase && name[1..-1] == name[1..-1].downcase}
    return true
    end
    
    puts is_valid_name("Kush Patel")       # => true
    puts is_valid_name("Daniel")           # => false
    puts is_valid_name("Robert Downey Jr") # => true
    puts is_valid_name("ROBERT DOWNEY JR") # => false
    