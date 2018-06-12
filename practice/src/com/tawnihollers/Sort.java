package com.tawnihollers;

import java.util.Arrays;

public class Sort {
    public static void main(String[] args) {
        int[] a = {4, 5, 2, 3, 6, 1};

        for (int i = 0; i < a.length; i++) {
            for(int j = 1; j < a.length - i; j++)
            if (a[j-1] > a[j]) {
                int num = a[j - 1];
                a[j - 1] = a[j];
                a[j] = num;
                System.out.println(Arrays.toString(a));
            }
        }
    }
}
