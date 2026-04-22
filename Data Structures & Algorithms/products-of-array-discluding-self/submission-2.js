class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result=[];

        let prod=1;
        let noofzeros=0;

        for(let num of nums){
            if(num===0){
                noofzeros++;
            }
            else{
                prod*=num;
            }
        }

        if(noofzeros>1) return new Array(nums.length).fill(0);

        for(let i=0;i<nums.length;i++){
            if(noofzeros>0){
                result[i]=nums[i]===0?prod:0;
            }
            else{
                result[i]=prod/nums[i];
            }
        }

        return result;
    }
}