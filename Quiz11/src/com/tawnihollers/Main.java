package com.tawnihollers;

import java.util.GregorianCalendar;

public class Main {

    public static void main(String[] args) {

//        Capital cap = new Capital();
//        String str = "today is friday";
//        String str2 = cap.capital(str);
//        System.out.println(str2);
//
//        Palindrome pal = new Palindrome();
//        String str3 = "Level";
//        Boolean fun = pal.isPalindrome(str3);
//        System.out.println(fun);

        //not part of quiz 11
        //numberOfBlueMoons(2000, 0, 1, 0, 0, 2999);

        //Names names = new Names();
        //names.nameArr();

//        Quiz12 quiz = new Quiz12();
//        String[] arr = {"12378923254", "53625484376", "71941648682"};
//        quiz.addNumbers(arr);

        Quiz13 quiz13 = new Quiz13();
        int numb = 123;
        System.out.println(quiz13.reverseNum(1923));
    }

    public static int numberOfBlueMoons(int startYear, int startMonth, int startDate, int startHour, int startMinute, int endYear){
        int blueMoonCount = 0;
        GregorianCalendar calendar = new GregorianCalendar();
//        We created a Gregorian object, now set a date.
//        For the date, use out function params
        calendar.set(startYear, startMonth, startDate, startHour, startMinute);
//        System.out.println(calendar);
//        Start a while loop, as long as the year of the current date we are on, is less than our endYear
        while(calendar.get(GregorianCalendar.YEAR) <= endYear){
            int prevMonth = calendar.get(GregorianCalendar.MONTH);
            calendar.add(GregorianCalendar.DAY_OF_MONTH, 29);
            calendar.add(GregorianCalendar.HOUR, 12);
            calendar.add(GregorianCalendar.MINUTE, 44);

//            So, our new calendar date is the date of the next full moon. Check to see if this new date has the same month as preMonth
            if(prevMonth == calendar.get(GregorianCalendar.MONTH)){
                blueMoonCount++;
            }
        }
        //System.out.println(blueMoonCount);
        return blueMoonCount;
    }

}
