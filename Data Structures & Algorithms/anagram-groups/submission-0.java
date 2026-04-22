class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map=new HashMap<>();

        for(String st:strs){
            char ch[]=st.toCharArray();
            Arrays.sort(ch);

            String key=new String(ch);
            map.putIfAbsent(key,new ArrayList<>());
            map.get(key).add(st);
        }

        List<List<String>> list=new ArrayList<>();

        for(List<String> group: map.values()){
            list.add(group);
        }

        return list;
    }
}
