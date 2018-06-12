package com.tawnihollers;

import java.util.ArrayList;
import java.util.HashMap;

public interface Payable {

    public double getTotalAmountToBePaid(ArrayList items, HashMap menu);

    public double payBill(double totalAmount, double amount);

}
