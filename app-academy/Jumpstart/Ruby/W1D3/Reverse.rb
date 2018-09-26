=begin
Write a method reverse(word) that takes in a string word and returns the 
word with its letters in reverse order.
=end

def reverse(word)
    word.split('').each.with_index.map{|char, i| word[word.length - 1 - i]}.join('')
    end
    
    puts reverse("cat")          # => "tac"
    puts reverse("programming")  # => "gnimmargorp"
    puts reverse("bootcamp")     # => "pmactoob"