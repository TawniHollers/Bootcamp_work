package com.tawnihollers;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int [] scenario1 = {1, -3, 5, -3, 0};
        int [] scenario2 = {1, -8, 4, -3, 6, 9};
        int [] scenario3 = {1, 2, 3};

        Numbers numbers = new Numbers();
        int[] s1 = numbers.positiveNumbers(scenario1);
        numbers.forLoop(s1);

        int[] s2 = numbers.evenNumbers(scenario2);
        numbers.forLoop(s2);

        int[] s3 = numbers.squareNumbers(scenario3);
        numbers.forLoop(s3);

        String str = numbers.strMultiply("abc", 5);
        System.out.println(str);

        //Do not do sentences unless you stop being lazy
        System.out.println(numbers.palindrome("Pop"));

    }
}
