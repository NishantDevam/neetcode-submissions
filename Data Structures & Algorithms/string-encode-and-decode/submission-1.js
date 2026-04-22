class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s="";

        for(let str of strs){
            s+=str.length +"#" + str;
        }

        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let s=[];

        let i=0;
        let c=0;

        while(i<str.length){
            let j=i;
            while(str[j]!=="#"){
                j++;
            }

            let stringLength=parseInt(str.substring(i,j));
            let word=str.substring(j+1,j+1+stringLength);
            s.push(word);
            i=j+1+stringLength;
        }

        return s;
    }
}
