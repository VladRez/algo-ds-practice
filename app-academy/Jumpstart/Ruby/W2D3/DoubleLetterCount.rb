=begin
Write a method that takes in a string and returns 
the number of times that the same letter repeats twice in a row.
=end

def double_letter_count(string)
    counter = 0
        words = string.split
      words.each do |word|
          word.each_char.with_index do |char, i|
            counter += 1 if (word[i] == word[i + 1])  
        end
      end
      return counter
    end
    
    puts double_letter_count("the jeep rolled down the hill") #=> 3
    puts double_letter_count("bootcamp") #=> 1