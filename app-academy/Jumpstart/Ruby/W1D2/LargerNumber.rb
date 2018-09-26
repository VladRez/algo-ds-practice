=begin
Write a method larger_number(num1, num2) that takes in two numbers and 
returns the larger of the two numbers.
=end

def larger_number(num1, num2)
    return num1 > num2 ? num1 : num2
    #Expected Solution
    # if num1 > num2
    # return num1
    # else
    # 	return num2
    # end
    # Alternative Solution
    # unless num1 > num2
    #   return num2
    #   end
    # 	return num1
  end
  
  puts larger_number(42, 28)   # => 42
  puts larger_number(99, 100)  # => 100