package com.tawnihollers;

public interface PayableWithTip extends Payable {

    public double addTipToTotal(double tipAmount, double amount);

}
