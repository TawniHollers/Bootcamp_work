package com.tawnihollers;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class PhoneBook {

    private Map<String, String> phoneBook;

    public void phoneNumbers(){
        phoneBook = new HashMap<>();
        phoneBook.put("Alice", "704-493-1834");
        phoneBook.put("Bob", "857-384-1234");
        phoneBook.put("Elizabeth", "484-584-2923");
    }

    public void addPhoneNumber(String key, String numbers){
        phoneBook.put(key,numbers);
        System.out.println("New key was added called: " + key);
    }

    public void getPhoneNumber(String key) {
        System.out.println(key + " " + phoneBook.get(key));
    }

    public void deleteNumber(String key){
        phoneBook.remove(key);
        System.out.println(key + " was deleted.");
    }

    public void changeNumber(String key, String number){
        phoneBook.replace(key, number);
        System.out.println("Number was changed");
    }

    public void printPhoneBook(){
        System.out.println(Collections.singletonList(phoneBook));
    }
}
