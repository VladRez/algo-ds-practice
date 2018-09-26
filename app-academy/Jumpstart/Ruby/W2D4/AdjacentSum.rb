=begin
Write a method adjacent_sum that takes in an array of numbers 
and returns a new array containing the sums of adjacent numbers 
in the original array
=end

def adjacent_sum(arr)
    result = []
  arr.each.with_index do |val, i|
  if i != arr.length - 1
    result << arr[i] + arr[i + 1]
  end
  end
return result
end

print adjacent_sum([3, 7, 2, 11]) #=> [10, 9, 13]
puts
print adjacent_sum([2, 5, 1, 9, 2, 4]) #=> [7, 6, 10, 11, 6]
puts