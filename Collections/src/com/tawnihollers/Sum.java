package com.tawnihollers;


public class Sum {

    int[] myArray = {12, 23, 34, 45, 56, 67, 78, 89};
    int sum;

    public void sumTheNumbers(){
        for(int i = 0; i < myArray.length; i++){
            sum += myArray[i];
        }

        System.out.println("The sum of my numbers is: " + sum);
    }
}
