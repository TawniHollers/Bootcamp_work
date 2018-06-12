package com.tawnihollers;

public class Calculator {

    double answer;

    public void add(double answer){
        this.answer += answer;
    }

    public void subtract(double answer){
        this.answer = this.answer - answer;
    }

    public void multiply(double answer){
        this.answer = this.answer * answer;
    }

    public void divide(double answer){
        this.answer = this.answer/answer;
    }

    public void clear(){
        this.answer = 0;
    }

    public double getAnswer(){
        return answer;
    }


}
