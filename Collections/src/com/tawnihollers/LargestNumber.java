package com.tawnihollers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class LargestNumber {

    public void findLargestNumber(ArrayList<Integer> nums) {

        System.out.println("Your numbers are: " + nums);
        int num = Collections.max(nums);
        System.out.println("The largest number is: " + num);
    }

    public void findPositiveNumber(ArrayList<Integer> nums){

            Iterator itr = nums.iterator();
            while(itr.hasNext()){
                int x = (Integer)itr.next();
                if(x < 0){
                    itr.remove();
                }
            }

          System.out.println("Just Positive numbers: " + nums);

    }

}
