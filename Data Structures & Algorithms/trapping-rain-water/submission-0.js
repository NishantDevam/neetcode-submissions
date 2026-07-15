class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {


        let n=height.length;
        let prefixSum=new Array(n).fill(0);
        let suffixSum=new Array(n).fill(0);
        let result = new Array(n);

        prefixSum[0]=height[0];

        for(let i=1;i<n;i++){
            prefixSum[i]=Math.max(prefixSum[i-1],height[i]);
        }

        suffixSum[n-1]=height[n-1];

        for(let j=n-2;j>=0;j--){
            suffixSum[j]=Math.max(suffixSum[j+1],height[j]);
        }

        let sum=0;

        for(let k=0;k<n;k++){
            result[k]=Math.min(prefixSum[k],suffixSum[k])-height[k];
            sum+=result[k];
        }

        return sum;


    }
}
