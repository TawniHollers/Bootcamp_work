package com.tawnihollers;

import java.util.ArrayList;

public class Palindrome {

    public static boolean isPalindrome(String str){
        Boolean answer = false;
        String[] str2 = str.toLowerCase().split("");
        ArrayList backwards = new ArrayList();
        for(int i = 0; i < str2.length; i++){
            backwards.add(str2[str2.length - i - 1]);
        }
        if(str.toLowerCase().equals((backwards.toString().join("", backwards)))) {
            answer = true;
        }
        return answer;
    }
}
