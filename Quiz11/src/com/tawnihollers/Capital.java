package com.tawnihollers;

public class Capital {

    public static String capital(String str){
        String[] str2 = str.toLowerCase().split(" ");
        String str3 = "";
        for(int i = 0; i < str2.length; i++){
            String[] letters = str2[i].split("");
            for(int j = 0; j < letters.length; j++){
                if(j == letters.length - 1){
                    letters[j] = letters[j].toUpperCase();
                    str3 += String.join(",", letters[j]);
                    str3 += " ";
                }
                else{
                    str3 += String.join(",", letters[j]);
                }
            }
        }
        return str3;
    }
}
