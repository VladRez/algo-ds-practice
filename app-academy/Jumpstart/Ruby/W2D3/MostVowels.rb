=begin
Write a method most_vowels that takes in a sentence string 
and returns the word of the sentence that contains the most vowels.
=end

def most_vowels(sentence)
    hSent = Hash.new(0)
    sentence.split.each {|word| hSent[word] += 1}
    return hSent.max[0]
    
  end
  
  def count_vowels(word)
  vowels = "aeiouAEIOU"
    count = 0
    word.each_char {|char| count += 1 if vowels.include?(char)}
    return count
  end
  
  
  
  print most_vowels("what a wonderful life") #=> "wonderful"