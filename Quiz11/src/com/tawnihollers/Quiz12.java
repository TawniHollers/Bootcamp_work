package com.tawnihollers;

public class Quiz12 {

    public int addNumbers(String[] arr){
        int numbers = 0;
        for(int i = 0; i < arr.length; i++){
            String[] separate = arr[i].split("");
            for(int j = 0; j < separate.length; j++){
                numbers += Integer.parseInt(separate[j]);
            }
        }
        return numbers;
    }
}
