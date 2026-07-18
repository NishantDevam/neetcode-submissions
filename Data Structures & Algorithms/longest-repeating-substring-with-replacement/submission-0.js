class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map =new Map();

        let left=0;
        let maxCount=0;
        let maxLength=0;

        for(let right=0;right<s.length;right++){
            map.set(s[right], (map.get(s[right]) || 0)+1);

            maxCount= Math.max(maxCount, map.get(s[right]));

            if((right-left+1)-maxCount>k){
                map.set(s[left], map.get(s[left])-1);
                left++;
            }

            maxLength= Math.max(maxLength, right-left+1);
        }

        return maxLength;
    }
}
