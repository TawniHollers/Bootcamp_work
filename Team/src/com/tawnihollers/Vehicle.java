package com.tawnihollers;

public class Vehicle {
    String owner;
    String year;
    String model;

    public Vehicle(String owner, String year, String model){
        this.owner = owner;
        this.year = year;
        this.model = model;
    }

    public String getOwner(){
        return owner;
    }

    public String getModel(){
        return model;
    }

    public String getYear(){
        return year;
    }

    public String toString(){
        return "The Owner of the car is " + getOwner() + " the year of the car is " + getYear()
                + " and the model of the car is " + getModel();
    }
}
