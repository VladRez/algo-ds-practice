=begin
Write a method word_check(word) that takes in a word and returns a string. 
The method should return the string "long" if the word is longer than 6 
characters, "short" if it is less than 6 characters, and "medium" if it 
is exactly 6 characters long.
=end

def word_check(word)
    return word.length == 6 ? "medium" : word.length < 6 ? "short" : "long"
    end
    
    puts word_check("contraption") # => "long"
    puts word_check("fruit")       # => "short"
    puts word_check("puzzle")      # => "medium"