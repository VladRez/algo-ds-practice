=begin
Write a method count_e(word) that takes in a string word 
and returns the number of e's in the word
=end

def count_e(word)
    # hash = Hash.new(0)
    #   word.split("").each{|key, val| hash[key] += 1}
    #   return hash['e']
      return word.count("e")
    end
    
    puts count_e("movie") # => 1
    puts count_e("excellent") # => 3