package com.tawnihollers;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Names {

    public void nameArr(){
        Scanner sc;
        ArrayList fun = new ArrayList();
        String l = "";
        int num = 0;

        {
            try {
                sc = new Scanner(new File("names.txt"));
                while (sc.hasNext()){
                    l = (sc.next());
                }
                String[] arr = l.split(",");
                Arrays.sort(arr);
                String[] n = arr[0].split("");
                for(int y = 0; y < n.length; y++){
                    fun.add(n[y]);
                }
                fun.remove(0);
                fun.remove(n.length-2);
                System.out.println(fun);
                String p = (String) fun.get(0);
                System.out.println(p);
                char s = p.toLowerCase().charAt(0);
                System.out.println(String.valueOf(s));

                //Prints out sorted Array
                for (int i = 0; i < arr.length; i++) {
                    //System.out.println(arr[i]);
                }


            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
    }
}
