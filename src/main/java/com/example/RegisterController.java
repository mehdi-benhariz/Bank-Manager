package com.example;

import java.io.IOException;

import javafx.fxml.FXML;

public class RegisterController {

    @FXML
    private void handleRegister() throws IOException {
        // todo add account creation

        App.setRoot("Home");
    }

    @FXML
    private void handleLogin() throws IOException {
        App.setRoot("Login");
    }
}
