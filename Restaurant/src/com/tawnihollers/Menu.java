package com.tawnihollers;

import java.util.HashMap;

public class Menu {

    static HashMap<String, Double> menu = new HashMap<>();
    static HashMap<String, Double> menu1 = new HashMap<>();

    static {
        menu.put("Soup", 0.59);
        menu.put("Bread", 1.69);
        menu.put("Water", 0.55);

        menu1.put("Soup", 0.15);
        menu1.put("Bread", 0.25);
        menu1.put("Water", 0.05);
    }


    public HashMap sitDownMenu() {
        String builder = "";
        for (String foodName : (this.menu).keySet()) {
            builder += foodName + " Price: $" + (this.menu).get(foodName) + "\n";

        }
        System.out.println("MENU");
        System.out.println(builder);
        return menu;
    }

    public HashMap fastFoodMenu() {
        String builder = "";
        for (String foodName : (this.menu1).keySet()) {
            builder += foodName + " Price: $" + (this.menu1).get(foodName) + "\n";

        }
        System.out.println("MENU");
        System.out.println(builder);
        return menu1;
    }

}
