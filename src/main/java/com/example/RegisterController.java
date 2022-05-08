package com.example;

import java.io.IOException;

import com.example.DAO.UserDAO;
import com.example.Models.User;
import com.example.utils.AuthProvider;
import com.example.utils.Notifier;

import javafx.fxml.FXML;
import javafx.scene.control.TextField;

public class RegisterController {
    @FXML
    public TextField CIN;
    @FXML
    public TextField fullName;
    @FXML
    public TextField pwd;
    @FXML
    public TextField confirmPwd;

    @FXML
    private void handleRegister() throws IOException {
        // todo add account creation
        String CIN = this.CIN.getText();
        String fullName = this.fullName.getText();
        String pwd = this.pwd.getText();
        String confirmPwd = this.confirmPwd.getText();
        // input validation
        if (CIN.isEmpty() || fullName.isEmpty() || pwd.isEmpty() || pwd.compareTo(confirmPwd) != 0) {
            System.out.println("Please fill all the fields");
            Notifier.showErrorMsg("fields required", "Please fill all the fields");

            return;
        }
        // generate a random RIB
        String RIB = "RIB" + (int) (Math.random() * 1000000);
        User user = new User(fullName, pwd, CIN, RIB, "client");
        if (UserDAO.register(user)) {
            AuthProvider.setCurrentUser(user);
            AuthProvider.setLogged(true);
            App.setRoot("Home");
        } else {
            System.out.println("Register failed");
            Notifier.showErrorMsg("Register failed", "somthing went wrong please try again");

        }
    }

    @FXML
    private void handleLogin() throws IOException {
        App.setRoot("login");
    }
}
