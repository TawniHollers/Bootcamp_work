package com.tawnihollers;

import java.util.ArrayList;

public class PrimeNumbers {

    public static int sumNumbers(int[] a){
        int sum = 0;
        for(int i = 0; i < a.length; i++){
            sum += a[i];
        }
        return sum;
    }

    public static int product(int[] a){
        int product = 1;
        for(int i = 0; i < a.length; i++){
            product *= a[i];
        }
        return product;
    }

    public int factorial(int a){
        int b = 1;
        while(a > 0){
            b *= a;
            a--;
        }
        return b;
    }

    public ArrayList<Integer> numbersList(){
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        for(int i = 1; i <= 30; i++){
            numbers.add(i);
        }
        return numbers;
    }

    public ArrayList<Integer> filter(ArrayList<Integer> a){
        for(int i = 0; i < a.size(); i++){
            if(a.get(i) % 2 == 0){
                a.remove(i);
                i--;
            }
            else if(a.get(i) % 3 == 0){
                a.remove(i);
                i--;
            }
            else if(a.get(i) % 5 == 0){
                a.remove(i);
                i--;
            }
        }
        return a;
    }


    public void printSquare(int a){
        for(int i = 0; i < a; i++){
            for(int j = 0; j < a; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public void acronym(String[] a){
        String fun = "";
        for(int i = 0; i < a.length; i++){
            fun += a[i].substring(0,1);
        }
        System.out.println(fun.toUpperCase());
    }

    public void threeInARow(String[] a){
        if(a[0].equals("X")){
            if(a[1].equals("X")){
                if(a[2].equals("X")){
                    System.out.println("X");
                }
                else{
                    System.out.println("none");
                }
            }
            else{
                System.out.println("none");
            }
        }
        else if(a[0].equals("O")){
            if(a[1].equals("O")){
                if(a[2].equals("O")){
                    System.out.println("O");
                }
                else{
                    System.out.println("none");
                }
            }
            else{
                System.out.println("none");
            }
        }
        else{
            System.out.println("none");
        }
    }

    public void alphabetSoup(String a){
        String[] b = a.split("");
        for(int i =0; i < b.length; i++){
            for(int j = 1; j < b.length - i; j++){
                if((int)b[j].charAt(0) < (int)b[j-1].charAt(0)){
                    String c = b[j-1];
                    b[j-1] = b[j];
                    b[j] = c;
                }
            }
        }
        System.out.print("(");
        for(int i = 0; i < b.length; i++){
            System.out.print(b[i]);
            System.out.print(", ");
        }
        System.out.println(")");
    }

    public void ticTacToe(String[][] a){
        for(int i=0; i < a.length; i++){
            if((a[i][0].equals(a[i][1]) && a[i][0].equals(a[i][2]) || (a[0][i].equals(a[1][i]) && a[0][i].equals(a[2][i])))){
                System.out.println(a[i][i]);
            }
        }


    }

}
