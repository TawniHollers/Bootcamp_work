package com.tawnihollers;

public class Card {

    private String type;
    private String value;

    public Card(String type, String value) {
        this.type = type;
        this.value = value;
    }

    public void getCard(){
        System.out.print(type + " " + value);
    }

    public String getValue(){
        return value;
    }
}
