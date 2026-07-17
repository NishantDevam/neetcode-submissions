class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s===""){
            return 0;
        }

        let map= new Map();
        let left=0;

        let n= s.length;
        let maxLength=0;

        for(let i=0;i<n;i++){
            if(map.has(s[i]) && map.get(s[i])>=left){
                left=map.get(s[i])+1;
            }
            map.set(s[i],i);
            maxLength=Math.max(maxLength, i-left+1);
        }

        return maxLength;
    }
}
