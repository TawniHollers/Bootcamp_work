package com.tawnihollers;

import java.util.ArrayList;

public class Stuff {

    public void reverseWords(String str){
        String[] words = str.split(" ");
        //System.out.println(str);
        String str2 = "";
        for(int i = 0; i < words.length; i++){
            String[] letters = words[i].split("");
            for(int j = 0; j < letters.length; j++){
                str2 += String.join(",", letters[letters.length - j - 1]);
            }
            str2 += " ";
        }
        System.out.println(str2);
    }

    public void returnArray(ArrayList l){

    }

}
