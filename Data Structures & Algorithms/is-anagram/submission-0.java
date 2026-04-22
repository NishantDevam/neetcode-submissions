class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> smap=new HashMap<>();

        for(char sch:s.toCharArray()){
            smap.put(sch,smap.getOrDefault(sch,0)+1);
        }

        for(char tch:t.toCharArray()){
            if(!smap.containsKey(tch)){
                return false;
            }
            else{
                smap.put(tch,smap.get(tch)-1);
                if(smap.get(tch)==0){
                    smap.remove(tch);
                }
            }
        }

        if(smap.size()==0){
            return true;
        }else{
            return false;
        }
    }
}
