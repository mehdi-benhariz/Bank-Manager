package com.example;

import java.io.IOException;

import com.example.DAO.UserDAO;
import com.example.Models.User;
import com.example.utils.AuthProvider;

import javafx.fxml.FXML;
import javafx.scene.control.TextField;

public class LoginController {
    @FXML
    TextField CIN;
    TextField pwd;

    @FXML
    private void handleLogin() throws IOException {

        String CIN = this.CIN.getText();
        String pwd = this.pwd.getText();
        // input validation
        if (CIN.isEmpty() || pwd.isEmpty()) {
            System.out.println("Please fill all the fields");
            return;
        }

        User user = UserDAO.login(CIN, pwd);

        if (user != null) {
            AuthProvider.setCurrentUser(user);
            AuthProvider.setLogged(true);
            App.setRoot("Home");
        } else {
            System.out.println("Login failed");

            // todo add error message
        }
    }

    @FXML
    private void handleRegister() throws IOException {
        App.setRoot("Register");
    }
}
