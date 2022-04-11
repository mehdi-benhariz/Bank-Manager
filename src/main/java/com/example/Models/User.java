package com.example.Models;

import java.util.ArrayList;
import java.util.List;

public class User {
    String fullName;
    String password;
    String CIN;
    String RIB;
    List<String> roles;

    public User(String fullName, String password, String CIN, String RIB) {
        this.fullName = fullName;
        this.password = password;
        this.CIN = CIN;
        this.RIB = RIB;
        this.roles = new ArrayList<>() {
            {
                add("USER");
            }
        };
    }

    public String getFullName() {
        return this.fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
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