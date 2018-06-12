package com.tawnihollers;


public class ConnectingStrings {

    public void findTheName(String[] array, String x){
        boolean contains = false;
        int j = 0;
        for (int i = 0; i < array.length; i++){
            if(array[i].equals(x)){
                contains = true;
                j = i;
                break;
            }
        }
        if(contains){
            System.out.println("FOUND at index " + j);
        }
        else{
            System.out.println("NOT IN LIST");
        }
    }
}
