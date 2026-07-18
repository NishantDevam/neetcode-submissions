class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let need= new Map();
        let window= new Map();
        let left=0;
        let gotit;

        for(let i=0;i<s1.length;i++){
            need.set(s1[i],(need.get(s1[i]) || 0) +1);
        }

        for(let right = 0; right<s2.length;right++)
        {
            window.set(s2[right], (window.get(s2[right]) || 0)+1);

            //shrink window if its size increase from s1
            if((right-left+1) > s1.length){
                if(window.get(s2[left])===0){
                    window.delete(s2[left]);
                }
                window.set(s2[left], window.get(s2[left]) - 1);
                left++;
            }

            if((right-left+1) === s1.length){
                gotit=true;

                for(let [ch, count] of need){
                    if(window.get(ch) !== count){
                        gotit=false;
                        break;
                    }
                }
            }

            if(gotit===true) return true;
        }

        return false;
        
    }
}
