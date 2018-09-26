=begin
Write a method doubler(numbers) that takes an array of numbers and 
returns a new array where every element of the original array is multiplied by 2.
=end

def doubler(numbers)
    numbers.map{|val| val * 2}
end
    
    print doubler([1, 2, 3, 4]) # => [2, 4, 6, 8]
    puts
    print doubler([7, 1, 8])    # => [14, 2, 16]