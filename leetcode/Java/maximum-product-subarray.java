class Solution {
    public int maxProduct(int[] nums) {
        int min;
        int max;
        int maxProd;
        
        min = max = maxProd = nums[0];
        
        for(int i = 1; i < nums.length; i ++){
            if(nums[i] < 0){
                int swap = max;
                max = min;
                min = swap;
            }
            
            max = Math.max(nums[i], nums[i] * max);
            min = Math.min(nums[i], nums[i] * min);
            
            maxProd = Math.max(max, maxProd);
        }
        
        return maxProd;
    }
}