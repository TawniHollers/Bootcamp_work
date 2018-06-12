package com.tawnihollers;

import java.util.ArrayList;
import java.util.HashMap;

public class Cashier implements Payable{

    public double getTotalAmountToBePaid(ArrayList items, HashMap menu) {
        String name = "";
        double prices = 0;


        for(int i = 0; i < items.size(); i++){
            name = (String)items.get(i);
            double price = (double)menu.get(name);
            prices += price;
        }
        return prices;
    }


    public double payBill(double totalAmount, double amount) {
        double amountLeftOver = 0;
        amountLeftOver = amount - totalAmount;
        return amountLeftOver;
    }

}
