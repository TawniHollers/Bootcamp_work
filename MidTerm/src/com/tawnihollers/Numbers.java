package com.tawnihollers;

import java.util.ArrayList;

    public class Numbers {

        public void forLoop(ArrayList<Integer> a){
            System.out.print("{");
            for(int i = 0; i < a.size(); i++){
                System.out.print(a.get(i));
                if(i < a.size() - 1){
                    System.out.print(", ");
                }
            }
            System.out.println("}");
        }

        public ArrayList<Integer> oddNumbers(int[] a){
            ArrayList<Integer> nums = new ArrayList<Integer>();

            for(int i = 0; i < a.length; i++){
                if(!(a[i] % 2 == 0)){
                    nums.add(a[i]);
                }
            }
            return nums;
        }

        public ArrayList<Integer> cubeNumbers(int[] a){
            ArrayList<Integer> nums = new ArrayList<Integer>();

            for(int i = 0; i < a.length; i++){
                int num = a[i] * a[i] * a[i];
                nums.add(num);
            }
            return nums;
        }

    public void fizzBuzz(){

        for(int i = 1; i <= 60; i++){
            if(i % 3 == 0){
                if(i % 5 == 0){
                    System.out.println("FizzBuzz");
                }
                else{
                    System.out.println("Fizz");
                }
            }
            else if(i % 5 == 0){
                System.out.println("Buzz");
            }
            else{
                System.out.println(i);
            }
        }
    }

}
