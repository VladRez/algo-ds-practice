=begin
Write a method reverse_words that takes in a sentence string and returns 
the sentence with the order of the characters in each word reversed. 
Note that we need to reverse the order of characters in the words, 
do not reverse the order of words in the sentence.
=end

def reverse_words(sent)
    #sent.split.map{|word| word.reverse}.join(' ')
    sent.split.each.map { |word|
        word.split('').each.with_index.map{ |char, i|
              word[word.length - 1 - i]
          }.join('')
      }.join(' ')
    end
    
    puts reverse_words('keep coding') # => 'peek gnidoc'
    puts reverse_words('simplicity is prerequisite for reliability') # => 'yticilpmis si etisiuqererp rof ytilibailer'
    