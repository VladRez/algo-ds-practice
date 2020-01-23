class Solution {
    public boolean isValid(String s) {
        if (s.length() == 0) return true;
        Stack<Character> parens = new Stack<Character>();


      for(char ch : s.toCharArray()){
            if (ch == '('){
                parens.add(')');
            } else if (ch == '{'){
                parens.add('}');
            } else if (ch == '['){
                parens.add(']');
            } else {
               
                if (parens.isEmpty()){
                    return false;
                } else {
                    if (parens.pop() != ch) return false;
                }
              
                
            }
      }
        
        return parens.isEmpty();
    }
}