package com.tawnihollers;

public class People {
    String name;
    String email;
    String phone;

    public People(String name, String email, String phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public void printGreeting(People people){
        System.out.println("Hello " + people.getName() + ", Im " + name);
    }

    public String getName(){
        return name;
    }

    public String getPhoneNumber(){
        return phone;
    }

    public String getEmail(){
        return email;
    }

    public void setPhoneNumber(String phone){
        this.phone = phone;
    }
}
