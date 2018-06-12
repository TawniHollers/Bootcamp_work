package com.tawnihollers;

public class Main {

    public static void main(String[] args) {
        People sonny = new People("Sonny", "sonny@gmail.com", "483-485-4948");
        People jordan = new People("Jordan", "jordan@aol.com", "495-586-3456");


        System.out.println("Sonny's email is " + sonny.getEmail());
        System.out.println("Jordan's email is " + jordan.getEmail());

        sonny.setPhoneNumber("123-434-4323");
        System.out.println("Sonny's phone number is " + sonny.getPhoneNumber()
                + " and Jordan's phone number is " + jordan.getPhoneNumber());

        sonny.printGreeting(jordan);
        jordan.printGreeting(sonny);

        Vehicle car = new Vehicle("Autumn", "2010", "Ford");
        System.out.println(car.toString());
    }
}
