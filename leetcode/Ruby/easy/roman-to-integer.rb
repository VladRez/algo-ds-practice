def roman_to_int(s)
    rmn =  {"I"=>1,
                 "V"=>5,
                 "X"=>10,
                 "L"=>50,
                 "C"=>100,
                 "D"=>500,
                 "M"=>1000}
     ns = 0
     i = 0
     while i < s.length
          if s[i] == "I" && (s[i+1] == "V" || s[i+1] == "X")
            ns += rmn[s[i+1]] - rmn[s[i]]
              i += 2
          elsif s[i] == "X" && (s[i+1] == "L" || s[i+1] == "C")
             ns += rmn[s[i+1]] - rmn[s[i]]
              i += 2
          elsif s[i] == "C" && (s[i+1] == "D" || s[i+1] == "M")
                 ns += rmn[s[i+1]] - rmn[s[i]] 
             i += 2
          else
            ns += rmn[s[i]]
              i += 1
         end
         
     end   
       
 end