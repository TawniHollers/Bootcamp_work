package com.tawnihollers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Letters {
    private Map<String, Integer> letters = new HashMap<String, Integer>();

    public String reverse(String str){
        String[] str2 = str.split("");
        String str3 = "";
        for(int i = 1; i <= str2.length; i++){
            str3 += str2[str2.length - i];
        }
        return str3;
    }

    public void letter_histogram(String word){
        String[] str = word.split("");
        ArrayList<String> str2 = new ArrayList<String>();
        int count = 1;
        for(int i = 0; i < str.length; i++){
            if(letters.containsKey(str[i])){
                count += 1;
                letters.put(str[i], count - 1);
            }
            else{
                letters.put(str[i], count);
                str2.add(str[i]);
            }
        }

        System.out.print("{");
        for(int j = 0; j < letters.size(); j++) {
            System.out.print(str2.get(j) + " = " + letters.get(str2.get(j)));
            if(j < letters.size() - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("}");
    }
}
