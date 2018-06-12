package com.tawnihollers;

import java.util.ArrayList;

public class Numbers {

    public void forLoop(int[] a){
        System.out.print("{");

        for(int i = 0; i < a.length; i++){
            System.out.print(a[i]);
            if(i < a.length - 1){
                System.out.print(", ");
            }
        }
        System.out.println("}");
    }

    public int[] positiveNumbers(int[] a){
        ArrayList<Integer> posNums = new ArrayList<Integer>();
        for(int i = 0; i < a.length; i++){
            if(a[i] >= 0){
                posNums.add(a[i]);
            }
        }

        int[] arrNums = new int[posNums.size()];

        for(int j =0; j < posNums.size(); j++){
            arrNums[j] = posNums.get(j);
        }
        return arrNums;
    }

    public int[] evenNumbers(int[] a){
        ArrayList<Integer> evenNums = new ArrayList<Integer>();
        for(int i = 0; i < a.length; i++){
            if(a[i] % 2 == 0){
                evenNums.add(a[i]);
            }
        }

        int[] arrNums = new int[evenNums.size()];

        for(int j =0; j < evenNums.size(); j++){
            arrNums[j] = evenNums.get(j);
        }
        return arrNums;
    }

    public int[] squareNumbers(int[] a){
        for(int i = 0; i < a.length; i++){
            a[i] *= a[i];
        }
        return a;
    }

    public String strMultiply(String str, int multiply){
        String str2 = "";
        for(int i = 0; i < multiply; i++){
            str2 += str;
        }
        return str2;
    }

    public boolean palindrome(String str){
        String str2 = "";
        String[] fun = str.toLowerCase().split("");
        for(int i = 1; i <= fun.length; i++){
            int p = fun.length - i;
            if(!fun[p].equals(" ")){
                str2 += fun[p];
                //System.out.println(str2);
            }
        }
        //put original string into a String[] and remove spaces for sentences
        //Im just too lazy
        if(str.toLowerCase().equals(str2)){
            return true;
        }
        return false;
    }
}
