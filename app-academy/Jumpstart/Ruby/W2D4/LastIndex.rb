=begin
Write a method last_index that takes in a string and a character. 
The method should return the last index where the character can be 
found in the string.
=end

def last_index(str, char)
	i = str.length
  	while i >= 0
     return i if str[i] == char
        i -= 1
      end
    
end

puts last_index("abca", "a")       #=> 3
puts last_index("mississipi", "i") #=> 9