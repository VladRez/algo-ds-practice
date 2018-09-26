=begin
Write a method is_palindrome(word) that takes in a string word and returns 
the true if the word is a palindrome, false otherwise. A palindrome is a 
word that is spelled the same forwards and backwards.
=end

def is_palindrome(word)
    word.split('').each.with_index{|char, i| return false if word[i] != word[word.length - 1 - i]}
      return true
    end
    
    puts is_palindrome("racecar")  # => true
    puts is_palindrome("kayak")    # => true
    puts is_palindrome("bootcamp") # => false