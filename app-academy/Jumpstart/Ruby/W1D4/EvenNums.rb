=begin
 Write a method even_nums(max) that takes in a number max and returns an 
 array containing all even numbers from 0 to max
=end

def even_nums(max)
    (0..max).to_a.select{|val| val if val % 2 == 0}
end
    
    print even_nums(10) # => [0, 2, 4, 6, 8, 10]
    puts
    print even_nums(5)  # => [0, 2, 4]