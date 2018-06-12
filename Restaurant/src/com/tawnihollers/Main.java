package com.tawnihollers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        BufferedReader console = new BufferedReader(new InputStreamReader((System.in)));
        ArrayList<String> items = new ArrayList<>();

        String sit = "Sit-Down";
        Boolean yes = true;

        try {
            System.out.println("What food would you like? Sit-Down or Fast Food?");
            String input = console.readLine();

            if(input.equals(sit)){
                Menu stuff = new Menu();
                HashMap menu = stuff.sitDownMenu();
                while(yes) {
                    System.out.println("Pick one item off the menu");
                    String input2 = console.readLine();
                    items.add(input2);
                    System.out.println("If you would like to continue ordering type true. If you would like to stop type false.");
                    yes = Boolean.valueOf(console.readLine());
                }
                Waiter money = new Waiter();
                double totalAmount = money.getTotalAmountToBePaid(items, menu);
                System.out.printf("Your total amount to pay without tip is $%.2f\n", totalAmount);
                System.out.println("What would you like to tip your waiter?");
                double tipAmount = Double.parseDouble(console.readLine());
                double amountToPayAfterTip = money.addTipToTotal(tipAmount, totalAmount);
                System.out.printf("Your adjusted amount to pay with tip is $%.2f\n", amountToPayAfterTip);
                System.out.println("Please type in your payment: ");
                double amount = Double.parseDouble(console.readLine());
                double amountReturnedToCustomer = money.payBill(amountToPayAfterTip, amount);
                System.out.printf("Your change is $%.2f\n", amountReturnedToCustomer);
            }
            else {
                Menu stuff = new Menu();
                HashMap menu = stuff.fastFoodMenu();
                while(yes){
                    System.out.println("Pick one item off the menu");
                    String input2 = console.readLine();
                    items.add(input2);
                    System.out.println("If you would like to continue ordering type true. If you would like to stop type false.");
                    yes = Boolean.valueOf(console.readLine());
                }

                Cashier money = new Cashier();
                double totalAmount = money.getTotalAmountToBePaid(items, menu);
                System.out.printf("Your total amount to pay is $%.2f\n", totalAmount);
                System.out.println("Please type in your payment: ");
                double amount = Double.parseDouble(console.readLine());
                double amountReturnedToCustomer = money.payBill(totalAmount, amount);
                System.out.printf("Your change is $%.2f\n", amountReturnedToCustomer);
            }


        } catch (Exception e) {
            System.out.println(e);
        } finally {
            try {
                console.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}
