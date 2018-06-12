package com.tawnihollers;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        int [] scenario1 = {1, -8, 4, -3, 6, 9};
        int [] scenario2 = {3, 9, 6};

        Numbers num = new Numbers();
        ArrayList<Integer> nums = num.oddNumbers(scenario1);
        num.forLoop(nums);

        ArrayList<Integer> cubeNum = num.cubeNumbers(scenario2);
        num.forLoop(cubeNum);

        num.fizzBuzz();

        Letters letters = new Letters();
        String l = letters.reverse("Thursday");
        System.out.println(l);

        letters.letter_histogram("bananas");

        Caesar fun = new Caesar();
        fun.deCipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar");

    }
}
