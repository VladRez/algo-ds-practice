=begin
Write a method pyramid_sum that takes in an array of numbers representing 
the base of a pyramid. The function should return a 2D array representing 
a complete pyramid with the given base. To construct a level of the pyramid, 
we take the sum of adjacent elements of the level below.
=end

def pyramid_sum(base)
	pyramid = [base]
  	while pyramid.length < base.length
    	prev_layer = pyramid[0]
      next_layer = layer(prev_layer)
      pyramid.unshift(next_layer)
    end
  return pyramid
end

def layer(arr)
result = []
  arr.each_with_index do |val, i|
    if i != arr.length - 1
    	result << arr[i] + arr[i + 1]
    end
  end
  return result
end

print pyramid_sum([1, 4, 6]) #=> [[15], [5, 10], [1, 4, 6]]
puts

print pyramid_sum([3, 7, 2, 11]) #=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
puts
