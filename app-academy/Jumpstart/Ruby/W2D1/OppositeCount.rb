=begin
Write a method opposite_count that takes in an array of unique 
numbers and returns the number of pairs of elements that have 
opposite signs.
=end

def opposite_count(nums)
    counter = 0
      nums.each.with_index do |val1, i|
        nums.each.with_index do |val2, j|
              if (val1 + val2 == 0) && (j > i)
              counter += 1
            end
        end
      end
        return counter
    end
    
    puts opposite_count([ 2, 5, 11, -5, -2, 7 ]) # => 2
    puts opposite_count([ 21, -23, 24 -12, 23 ]) # => 1