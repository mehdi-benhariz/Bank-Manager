package com.example;

import java.io.IOException;

import com.example.DAO.UserDAO;
import com.example.Models.User;
import com.example.utils.AuthProvider;
import com.example.utils.Notifier;

import javafx.fxml.FXML;
import javafx.scene.control.TextField;

public class LoginController {
    @FXML
    public TextField CIN;
    public TextField pwd;

    @FXML
    private void handleLogin() throws IOException {

        String CIN = this.CIN.getText();
        String pwd = this.pwd.getText();
        // input validation
        if (CIN.isEmpty() || pwd.isEmpty()) {
            Notifier.showErrorMsg("fields required", "Please fill all the fields");
            return;
        }
        User user = UserDAO.login(CIN.toString(), pwd.toString());
        if (user != null) {
            AuthProvider.setCurrentUser(user);
            AuthProvider.setLogged(true);
            if (user.getRole().equals("admin"))
                App.setRoot("admin");
            else
                App.setRoot("home");

        } else {
            System.out.println("Login failed");
            Notifier.showErrorMsg("Login failed", "somthing went wrong please try again");

            // todo add error message
        }
    }

    @FXML
    private void handleRegister() throws IOException {
        App.setRoot("register");
    }
}
