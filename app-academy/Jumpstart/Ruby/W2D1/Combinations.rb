=begin
Write a method combinations that takes in an array of unique elements, 
the method should return a 2D array representing all possible 
combinations of 2 elements of the array.
=end

def combinations(arr)
	result = Array.new()
  arr.each.with_index do |val1, i|
  	arr.each.with_index do |val2 ,j|
    	if j > i
        	result << [val1, val2]
        end
    end
  end
	return result
  end

print combinations(["a", "b", "c"]); # => [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]
puts

print combinations([0, 1, 2, 3]); # => [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
puts
