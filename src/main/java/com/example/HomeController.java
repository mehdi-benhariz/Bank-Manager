package com.example;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;
import com.example.utils.AuthProvider;
import java.awt.*;
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
    public void handleLogout() throws IOException {
        AuthProvider.logout();
        App.setRoot("login");
    }

    @FXML
    public void launchChat() throws IOException {
        String filePath = "/home/mehdi/Documents/study/sem2/tp java/bankmanager/src/main/resources/com/example/chat.jar";
        Desktop.getDesktop().open(new File(filePath));
    }

}