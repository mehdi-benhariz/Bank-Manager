package com.example;

import java.io.IOException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.example.DAO.MyConnection;
import com.example.DAO.TransactionDAO;
import com.example.DAO.UserDAO;
import com.example.Models.Transaction;
import com.example.Models.User;
import com.example.utils.AuthProvider;

import javafx.collections.ObservableList;
import javafx.fxml.FXML;

public class PrimaryController {

    @FXML
    private void switchToSecondary() throws IOException {

        ObservableList<Transaction> transactions = TransactionDAO.getAll();
        System.out.println(transactions);
        // if (currentUser != null) {
        // AuthProvider.setCurrentUser(currentUser);
        // AuthProvider.setLogged(true);
        // System.out.println(currentUser);

        // }

        // User currentUser = UserDAO.login("12345678", "test");
        // Transaction tr = new Transaction("1", new SimpleDateFormat("yyyy-mm-dd
        // hh:mm:ss").format(new Date()),
        // "deposit", "100", currentUser);
        try {
            new MyConnection();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        // TransactionDAO.add(tr);
        App.setRoot("secondary");
        // if (logged)
        // App.setRoot("secondary");

        // UserDAO.register(new User("mehdibenhariz", "test", "12345678", "12345678",
        // "admin"));
        // App.setRoot("secondary");
    }
}
