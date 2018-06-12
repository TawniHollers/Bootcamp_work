package com.tawnihollers;


public class Split {

    public void splittingWords(String words) {
        String str7 = " ";
        String[] letter = words.split("");

        for (int i = 0; i < letter.length; i++) {
            str7 += letter[i];
            System.out.println(str7);
       }
    }
}
