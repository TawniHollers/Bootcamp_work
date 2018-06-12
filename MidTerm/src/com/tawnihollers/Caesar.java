package com.tawnihollers;

import java.util.ArrayList;

public class Caesar {

    public void deCipher(String str){
        char[] fun = str.toLowerCase().toCharArray();
        ArrayList<Character> fun2 = new ArrayList<Character>();
        String fun3 = "";

        for(int i = 0; i < fun.length; i++){
            //get the Ascii value for the letter and subtract or add 13
            //put new Ascii letters into a string
            //return that new string
            char letter = fun[i];
            Character l = letter;
            char letter2 = l.charValue();
            if(letter2 > 109) {
                int letter3 = (int) letter2 - 13;
                Character l3 = (char) letter3;
                fun2.add(l3);
            }
            else{
                int letter3 = (int) letter2 + 13;
                Character l3 = (char) letter3;
                fun2.add(l3);
            }
        }
        //Do a for loop to make the first letter Upper case again
        //Do a for loop to make the - into spaces
        //Find a way to take out the commas
        fun3 = fun2.toString();

        System.out.println(fun3);
    }
}
