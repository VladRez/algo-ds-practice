class Solution {
    public int numJewelsInStones(String J, String S) {
        Integer count = 0;
        Set<Character> set = new HashSet<>();
        
        for(int j = 0; j < J.length(); j++){
            set.add(J.charAt(j));
        }
        
        for (int i = 0; i < S.length(); i++){
            if (set.contains(S.charAt(i))){count += 1;}
        }
        
        return count;
        
            
    }
}