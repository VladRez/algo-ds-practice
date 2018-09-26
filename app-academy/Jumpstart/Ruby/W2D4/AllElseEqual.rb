=begin
Write a method all_else_equal that takes in an array of numbers. 
The method should return a number of the array that is equal to the sum 
of all the other elements of the array. If there is no such number, 
the method should return false.
=end

def sumof(arr)
    sum = 0
      arr.each {|val| sum += val}
      return sum
    end
    def all_else_equal(arr)
        arr.each.with_index do |el, i|
            left = arr[0...i]
              right = arr[i+1..-1]
              return el if sumof(left) + sumof(right) == el
        end
      return false
    #alternative
    # 	sum = 0
    #   arr.each.with_index do |el1, i|	
    #     arr.each.with_index do |el2, j|
    #           if j != i
    #         	sum += el2  
                
    #           end
    #     end
            
    #       return sum if arr[i] == sum
    #     sum = 0
    #   end
    #     return false
    end
      
    
    puts all_else_equal([2, 4, 3, 10, 1]) #=> 10
    puts all_else_equal([6, 3, 5, -9, 1]) #=> 3
    puts all_else_equal([1, 2, 3, 4])     #=> false