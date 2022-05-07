package com.example.Models;

public class User {
    String username;
    String password;
    String CIN;
    String RIB;
    String role;
    Double balance;

    public User(String username, String password, String CIN, String RIB, String role) {
        this.username = username;
        this.password = password;
        this.CIN = CIN;
        this.RIB = RIB;
        this.role = role;
        this.balance = 0.0;
    }

    public User(String username, String password, String CIN, String RIB, String role, Double balance) {
        this(username, password, CIN, RIB, role);
        this.balance = balance;
    }

    public String getUserName() {
        return this.username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCIN() {
        return this.CIN;
    }

    public void setCIN(String CIN) {
        this.CIN = CIN;
    }

    public String getRIB() {
        return this.RIB;
    }

    public void setRIB(String RIB) {
        this.RIB = RIB;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        // check if the balance is negative
        if (balance < 0)
            System.out.println("Balance can't be negative");
        else
            this.balance = balance;
    }

    @Override
    public String toString() {
        return "{" +
                " username='" + getUserName() + "'" +
                ", password='" + getPassword() + "'" +
                ", CIN='" + getCIN() + "'" +
                ", RIB='" + getRIB() + "'" +
                ", role='" + getRole() + "'" +
                "}";
    }

}