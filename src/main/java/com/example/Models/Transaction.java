package com.example.Models;

import java.util.Objects;

public class Transaction {
    String id;
    String date;
    String type;
    String amount;
    User source;
    User destination;

    // used to create class before adding it to the database
    public Transaction(String type, String amount, User source) {
        this.type = type;
        this.amount = amount;
        this.source = source;
    }

    // used to create class after getting it from database
    public Transaction(String id, String date, String type, String amount, User source) {
        this(type, amount, source);
        this.id = id;
        this.date = date;
    }

    // used to create class before adding it to the database
    public Transaction(String type, String amount, User source, User destination) {
        this(type, amount, source);
        this.destination = destination;
    }

    // used to create class after getting it from database
    public Transaction(String id, String date, String type, String amount, User source, User destination) {
        this(id, date, type, amount, source);
        this.destination = destination;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAmount() {
        return this.amount;
    }

    public void setAmount(String amount) {
        if (amount.matches("^[0-9]*\\.?[0-9]*$"))
            this.amount = amount;
        else
            throw new IllegalArgumentException("Amount must be a number");
    }

    public User getSource() {
        return this.source;
    }

    public void setSource(User source) {
        this.source = source;
    }

    public User getDestination() {
        return this.destination;
    }

    public void setDestination(User destination) {
        this.destination = destination;
    }

    public Transaction id(String id) {
        setId(id);
        return this;
    }

    public Transaction date(String date) {
        setDate(date);
        return this;
    }

    public Transaction type(String type) {
        setType(type);
        return this;
    }

    public Transaction amount(String amount) {
        setAmount(amount);
        return this;
    }

    public Transaction source(User source) {
        setSource(source);
        return this;
    }

    public Transaction destination(User destination) {
        setDestination(destination);
        return this;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, type, amount, source, destination);
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", date='" + getDate() + "'" +
                ", type='" + getType() + "'" +
                ", amount='" + getAmount() + "'" +
                ", source='" + getSource() + "'" +
                ", destination='" + getDestination() + "'" +
                "}";
    }

}
