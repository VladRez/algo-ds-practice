=begin
Write a method frequent_letters that takes in a string and returns an 
array containing the characters that appeared more than twice in the string.
=end

def frequent_letters(string)
    hCount = Hash.new(0)
    aResult = Array.new(0)
      string.each_char {|char| hCount[char] += 1}
      hCount.each {|k,v| aResult << k if v > 2}
      return aResult
    end
    
    print frequent_letters('mississippi') #=> ["i", "s"]
    puts
    print frequent_letters('bootcamp') #=> []
    puts
    