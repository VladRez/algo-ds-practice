=begin
Write a method same_char_collapse that takes in a string and returns a 
collapsed version of the string. To collapse the string, we repeatedly 
delete 2 adjacent characters that are the same until there are no such 
adjacent characters. If there are multiple pairs that can be collapsed, 
delete the leftmost pair. For example, we take the following steps to 
collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
=end

def same_char_collapse(str)

    pivot = true
    while pivot == true
       chars = str.split('')
          pivot = false
    chars.each.with_index do |char, i|
            if chars[i] == chars[i+1] && i < str.length
              chars[i] = ""
                chars[i + 1] = ""
            pivot = true
            break
          end
    end
       str = chars.join('')
  end
    
  return str
  end
  
  puts same_char_collapse("zzzxaaxy")   #=> "zy"
  puts same_char_collapse("uqrssrqvtt") #=> "uv"
  