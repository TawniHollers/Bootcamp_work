package com.tawnihollers;

import java.util.ArrayList;

public class Deck {

    private ArrayList<Card> allCards = new ArrayList<Card>();
    private ArrayList<Card> modCards = new ArrayList<Card>();

    public Deck(ArrayList<Card> cards){
        this.allCards = cards;
    }

    public ArrayList<Card> pickCards(String value){
        for(int i = 0; i< allCards.size(); i++){
            if(allCards.get(i).getValue().equals(value)){
                modCards.add(allCards.get(i));
            }
        }
        return modCards;
    }

    public void getModCards(ArrayList<Card> modDeck){
        System.out.print("(");
        for(int x = 0; x < modDeck.size(); x++){
            modDeck.get(x).getCard();
            System.out.print(", ");
        }
        System.out.println(")");
    }

}
