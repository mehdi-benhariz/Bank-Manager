package com.example.Models;

import java.util.ArrayList;
import java.util.List;

public class User {
    String username;
    String password;
    String CIN;
    String RIB;
    List<String> roles;

    public User(String username, String password, String CIN, String RIB) {
        this.username = username;
        this.password = password;
        this.CIN = CIN;
        this.RIB = RIB;
        this.roles = new ArrayList<>() {
            {
                add("USER");
            }
        };
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

    public List<String> getRoles() {
        return this.roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public void addRole(String role) {
        this.roles.add(role);
    }

}