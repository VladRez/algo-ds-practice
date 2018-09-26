=begin
Write a method ae_count that takes in a string and returns a hash containing 
the number of a's and e's in the string. Assume the string contains only 
lowercase characters.
=end

def ae_count(str)
	return {'a'=>str.count('e'),"e"=>str.count('a')}
end

puts ae_count("everyone can program") #=> {"a"=>2, "e"=>3}
puts ae_count("keyboard") #=> {"a"=>1, "e"=>1}