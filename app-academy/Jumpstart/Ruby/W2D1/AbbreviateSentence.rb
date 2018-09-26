=begin
Write a method abbreviate_sentence that takes in a sentence string and 
returns a new sentence where every word longer than 4 characters has all 
of it's vowels removed.
=end

def abbreviate_sentence(sent)
    sent.split.map{|val| val.length > 4 ? val.gsub(/[AaEeIiOoUu]/,"") : val}.join(" ")
    end
    
    puts abbreviate_sentence("follow the yellow brick road") # => "fllw the yllw brck road"
    puts abbreviate_sentence("what a wonderful life")        # => "what a wndrfl life"
    