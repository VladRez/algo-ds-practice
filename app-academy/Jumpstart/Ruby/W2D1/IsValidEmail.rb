=begin
Write a method is_valid_email that takes in a string and returns a 
boolean indicating whether or not it is a valid email address.
=end

# For simplicity, we'll consider an email valid when it satisfies all of the following:
# - contains exactly one @ symbol
# - contains only lowercase alphabetic letters before the @
# - contains exactly one . after the @

def is_valid_email(str)
    return false if str.split("@").length != 2 || str.split("@")[1].split(".").length !=2
      username = str.split("@")[0]
      domain = str.split("@")[1].split(".")[0]
      dns = str.split("@")[1].split(".")[1]
      username.each_char{|char| return false if char.ord < "a".ord}
      domain.each_char{|char| return false if char.ord < "a".ord}
      dns.each_char{|char| return false if char.ord < "a".ord}
      
      return true
    end
    
    puts is_valid_email("abc@xy.z")         # => true
    puts is_valid_email("jdoe@gmail.com")   # => true
    puts is_valid_email("jdoe@g@mail.com")  # => false
    puts is_valid_email("jdoe42@gmail.com") # => false
    puts is_valid_email("jdoegmail.com")    # => false
    puts is_valid_email("az@email")         # => false
    