package com.tawnihollers;

public class Main {

    public static void main(String[] args) {

        System.out.println("Hello World");

        int a = 9;
        System.out.println(a);
        a += 5;
        System.out.println(a);

        if ( a > 5){
            System.out.println("It worked");
        }
        else if( a < 5){
            System.out.println("This one ran");
        }
        else{
            System.out.println("one more time");
        }


        int[] arrayOfInts = new int[] {1 ,5,3,4,8};

        for(int i = 0; i<arrayOfInts.length; i++){
            System.out.println("array of ints value for i: " + arrayOfInts[i]);
        }

        for(int j: arrayOfInts){
            System.out.println("arrayOfInts value: " + j);
        }

    }
}
