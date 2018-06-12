package com.tawnihollers;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) {
        BufferedReader console = new BufferedReader(new InputStreamReader((System.in)));

        String str1 = "Java";
        String str2 = "Programming";
        String str3 = "ABcdeF";
        String [] students = {"Dina", "Shane", "NaDario", "Amber", "Caulder", "Noelle", "Donell"};
        String name = "Noelle";
        String name1 = "jake";
        String name2 = "NaDario";
        String name3 = "Dina";

        String builder = str1 + " " + str2;
        System.out.println(builder);
        System.out.println(builder.length());
        System.out.println(str3.toLowerCase());
        System.out.println(str3.toUpperCase());

        ConnectingStrings arrays = new ConnectingStrings();
        arrays.findTheName(students, name);
        arrays.findTheName(students, name1);
        arrays.findTheName(students, name2);
        arrays.findTheName(students, name3);

        try {
            System.out.println("Enter a word or sentence");
            String input = console.readLine();

            Split userInput = new Split();
            userInput.splittingWords(input);

        }catch(Exception e){
            System.out.println(e);
        }finally{
            try{
                console.close();
            }catch(Exception e){

            }
        }
    }
}
