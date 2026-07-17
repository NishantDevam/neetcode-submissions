class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result=0;
        let n= prices.length;

        let prefixMin= new Array(n);
        prefixMin[0]=prices[0];

        for(let i=1;i<n;i++){
            prefixMin[i]=Math.min(prefixMin[i-1],prices[i]);
        }

        for(let j=0;j<n;j++){
            result=Math.max(result, prices[j]-prefixMin[j]);
        }

        return result;
    }
}
