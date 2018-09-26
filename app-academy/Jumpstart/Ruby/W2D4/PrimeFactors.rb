=begin
Write a method prime_factors that takes in a number and returns an array 
containing all of the prime factors of the given number.
=end

def prime_factors(num)
  
    result = []
(1..num).each do |val|
  result << val if ((num % val == 0) && isprime?(val))
end

return result
end

def isprime?(num)
  return false if num < 2 
(2...num).each {|val| return false if num % val == 0}
    return true

end
print prime_factors(24) #=> [2, 3]
puts
print prime_factors(60) #=> [2, 3, 5]
puts
