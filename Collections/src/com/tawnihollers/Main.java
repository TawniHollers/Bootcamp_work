package com.tawnihollers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        BufferedReader console = new BufferedReader(new InputStreamReader((System.in)));

        Sum add = new Sum();
        add.sumTheNumbers();
        System.out.println(" ");


        try {
            for(int i = 0; i <= 6; i++) {
                System.out.println("Input a positive or negative number:");
                String input = console.readLine();
                int count = Integer.parseInt(input);
                numbers.add(count);
            }

            LargestNumber number = new LargestNumber();
            number.findLargestNumber(numbers);

            LargestNumber number2 = new LargestNumber();
            number2.findPositiveNumber(numbers);
            System.out.println(" ");


        } catch (Exception e) {
            System.out.println(e);
        } finally {
            try {
                console.close();
            } catch (Exception e) {

            }
        }

        PhoneBook book = new PhoneBook();
        book.phoneNumbers();
        book.getPhoneNumber("Elizabeth");
        book.addPhoneNumber("Kareem", "938-489-1234");
        book.deleteNumber("Alice");
        book.changeNumber("Bob", "968-345-2345");
        book.printPhoneBook();

    }
}
