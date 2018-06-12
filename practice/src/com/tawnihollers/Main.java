package com.tawnihollers;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        //option 1
        MoreExamples prime = new MoreExamples();
        int primeNum = prime.findNthPrime(6);
        System.out.println(primeNum);

        prime.sumHundred();


	// carls examples #1
        int[] a = {1, 4, 8};
        int[] b = {3, 4, 5};
        String[] c = {"very", "important", "person"};

        String [] scenario1 = new String[]{"X","X","X"};
        String [] scenario2 = new String[]{"O","O","O"};
        String [] scenario3 = new String[]{"X","O","X"};
        String [] scenario4 = new String[]{"X"," ","X"};
        String [] scenario5 = new String[]{" "," ","X"};

        String d = "hello";

        PrimeNumbers num = new PrimeNumbers();
        int sum = num.sumNumbers(a);
        System.out.println(sum);

        int product = num.product(b);
        System.out.println(product);

        int factorial = num.factorial(10);
        System.out.println(factorial);

        ArrayList<Integer> filter = num.filter(num.numbersList());
        System.out.print("(");
        for(int i = 0; i < filter.size(); i++){
            System.out.print(filter.get(i));
            System.out.print(", ");
        }
        System.out.println(")");

        num.printSquare(5);

        num.acronym(c);

        num.threeInARow(scenario1); // should return "X"
        num.threeInARow(scenario2); // should return "O"
        num.threeInARow(scenario3); // should return "none"
        num.threeInARow(scenario4); // should return "none"
        num.threeInARow(scenario5); // should return "none"

        num.alphabetSoup(d);


    }
}
