class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    static compare(p1,p2){
        if(p1[1]===p2[1]){
            return p2[0]-p1[0];
        }

        return p2[1]-p1[1];
    }
    
    topKFrequent(nums, k) {
        let map=new Map();

        for(let item of nums){
            map.set(item, (map.get(item) || 0) +1 );
        }

        let freq=[...map.entries()];

        freq.sort(Solution.compare);

        let res=[];

        for(let i=0;i<k;i++){
            res[i]=freq[i][0];
        }

        return res;
        
    }
}
