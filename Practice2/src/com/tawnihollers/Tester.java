package com.tawnihollers;

import java.util.ArrayList;

public class Tester {
    public static void main(String[] args){
        Calculator calc = new Calculator();

        calc.add(750);
        calc.subtract(420);
        calc.multiply(13);
        calc.divide(30);
        System.out.println(calc.getAnswer());
        calc.clear();
        calc.add(1000);
        System.out.println(calc.getAnswer());

        ArrayList<Card> cards = new ArrayList<Card>();
        ArrayList<Card> modDeck = new ArrayList<Card>();
        String[] type = {"Club", "Spade", "Diamond", "Heart"};
        String[] value= {"Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

        for(int i = 0; i < type.length; i++){
            for(int j = 0; j < value.length; j++){
                Card card = new Card(type[i], value[j]);
                cards.add(card);
            }

        }
        System.out.print("(");
        for(int x = 0; x < cards.size(); x++){
            cards.get(x).getCard();
            System.out.print(", ");
        }
        System.out.println(")");

        Deck decks = new Deck(cards);
        modDeck = decks.pickCards("7");
        decks.getModCards(modDeck);
    }

}
