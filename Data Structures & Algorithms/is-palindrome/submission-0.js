class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let str="";

        for(let ch of s){
            if(/[a-z0-9]/i.test(ch))
            str+=ch.toLowerCase();
        }

        console.log(str);

        let i=0;
        let j=str.length-1;

        while(i<j){
            if(str[i]!==str[j]){
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}
