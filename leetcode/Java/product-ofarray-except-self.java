class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] output = new int[nums.length];
        int[] leftSide = new int[nums.length];
        int[] rightSide = new int[nums.length];
        
        leftSide[0] = 1;
        for(int i = 1; i < nums.length; i++){
              leftSide[i] = nums[i - 1] * leftSide[i - 1];
        }
        
        
        rightSide[nums.length - 1] = 1;
        for(int i = nums.length - 2; i >= 0; i--){
            rightSide[i] = nums[i + 1] * rightSide[i + 1];
            
           
        }
        
        
        for(int i = 0; i < nums.length; i++){
             output[i] = leftSide[i] * rightSide[i];
        }
        return output;
    }
}