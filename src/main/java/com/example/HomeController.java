package com.example;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import com.example.utils.AuthProvider;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.text.Text;

public class HomeController implements Initializable {
    @FXML
    Text amount;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {
        // TODO Auto-generated method stub
        amount.setText(String.valueOf(AuthProvider.getCurrentUser().getBalance()));
    }

    @FXML
    public void handleWithdraw() throws IOException {
        App.setRoot("withdraw");
    }

    @FXML
    public void handleTransfer() throws IOException {
        App.setRoot("transfer");
    }

    @FXML
    public void handleDeposit() throws IOException {
        App.setRoot("deposit");
    }

    @FXML
    public void handleLogOut() throws IOException {
        App.setRoot("login");
    }
}