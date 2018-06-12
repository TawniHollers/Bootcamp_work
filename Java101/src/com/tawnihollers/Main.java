package com.tawnihollers;

public class Main {

    public static void main(String[] args) {

        System.out.println("#1");
        System.out.println("");
        String array[] = new String[] {"Linda", "John", "Maya", "Nerine", "Gary"};

        for(String i: array){
            System.out.println("Hello there " + i + "!");
        }


        System.out.println("____________________________");

        System.out.println("#2");
        System.out.println("");

        int x = 1;
        while(x < 10){
            System.out.println(x);
            x++;
        }


        System.out.println("____________________________");

        System.out.println("#3");
        System.out.println("");

        int num = 3;

        switch(num){
            case 0: {
                //sunday
                System.out.println("Sleep in");
                break;
            }
            case 1:{
                System.out.println("Go to work");
                break;
            }
            case 2:{
                System.out.println("Go to work");
                break;
            }
            case 3:{
                System.out.println("Go to work");
                break;
            }
            case 4:{
                System.out.println("Go to work");
                break;
            }
            case 5:{
                System.out.println("Go to work");
                break;
            }
            case 6:{
                System.out.println("Sleep in");
                break;
            }
            default:{
                System.out.println("Not a value for a day of the week. Choose number between 0(sunday) to 6(saturday");
                break;
            }
        }

        System.out.println("____________________________");

        System.out.println("#4");
        System.out.println("");

        int y = 4;

        if(y == 0){
            System.out.println("Sunday");
        }
        else if(y == 1){
            System.out.println("Monday");
        }
        else if(y == 2){
            System.out.println("Tuesday");
        }
        else if(y == 3){
            System.out.println("Wednesday");
        }
        else if(y == 4){
            System.out.println("Thursday");
        }
        else if(y == 5){
            System.out.println("Friday");
        }
        else if(y == 6){
            System.out.println("Saturday");
        }
        else{
            System.out.println("Must input a number between 0 and 6");
        }

        System.out.println("____________________________");

        System.out.println("#5");
        System.out.println("");

        double c = -5;

        double f = c * 1.8 + 32;
        System.out.println("Temperature in Celsius: " + c + " is equal to " + f + " in Fahrenheit");

        System.out.println("____________________________");

        System.out.println("#6");
        System.out.println("");

        //review from here down
        int start = 2;
        int end = 8;

        for(int l = start; l <= end; l++){
            System.out.println(l);
        }

        System.out.println("____________________________");

        System.out.println("#7");
        System.out.println("");

        int l = 1;
        while(l < 10){
            if(l % 2 != 0){
                System.out.println(l);
            }
            l++;
        }

        System.out.println("____________________________");

        System.out.println("#8");
        System.out.println("");

        int p = 1;
        int sum = 0;

        do{
            sum += p;
            p++;
        }
        while(p <= 100);{
            System.out.println("Sum = " + sum);
        }

        System.out.println("____________________________");

        System.out.println("#9");
        System.out.println("");

        for(int i = 1; i <= 100; i++){
            if(i % 3 == 0){
                if(i % 5 == 0){
                    System.out.println("FizzBuzz");
                }
                else {
                    System.out.println("Fizz");
                }
            }
            else if(i %  5 == 0){
                System.out.println("Buzz");
            }
            else{
                System.out.println(i);
            }
        }

        //better fizzbuzz program
        System.out.println("____________________________");

        System.out.println("#9 part 2");
        System.out.println("");

        for(int i = 1; i < 61; i++){
            String output = "";
            if(i % 3 == 0){
                output += "Fizz";
            }
            if(i % 5 == 0){
                output += "Buzz";
            }

            output = output == "" ? String.valueOf(i) : output;

            System.out.println(output);
        }

    }
}
