package com.tawnihollers;

public class Quiz13 {

    public int reverseNum(int num){
        int nums = 0;
        while(num > 0) {
            int number = num % 10;
            num = num / 10;
            nums = nums * 10 + number;
        }
        return nums;
    }
}
