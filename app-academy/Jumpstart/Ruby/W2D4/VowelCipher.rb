=begin
Write a method vowel_cipher that takes in a string and returns a new string 
where every vowel becomes the next vowel in the alphabet.
=end

def vowel_cipher(string)
    vowels = "aeiou"
      new_str = ""
      string.each_char.with_index do |char, i|
              if vowels.include?(char)
            new_str += vowels[(vowels.index(char) + 1 ) % vowels.length]
              # p (vowels.index(char) + 1) % vowels.length 
            else
              new_str += char
            end
        end
      return new_str
    end
    
    puts vowel_cipher("bootcamp") #=> buutcemp
    puts vowel_cipher("paper cup") #=> pepir cap