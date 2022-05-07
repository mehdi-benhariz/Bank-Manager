package com.example;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import com.example.DAO.UserDAO;
import com.example.utils.AuthProvider;
import com.example.utils.Notifier;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TextField;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseEvent;

public class OperationsController implements Initializable {
    @FXML
    ImageView exit;
    @FXML
    TextField amount;
    @FXML
    TextField pwd;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {
        exit.setOnMouseClicked((MouseEvent e) -> {
            try {
                this.handleExit();
            } catch (IOException e1) {
                e1.printStackTrace();
            }
        });
    }

    private boolean checkPwd() {
        if (this.pwd.getText().isEmpty()) {
            Notifier.showErrorMsg("fields required", "Please fill all the fields");
            return false;
        }
        if (this.pwd.getText().equals(AuthProvider.getCurrentUser().getPassword()))
            return true;
        else
            Notifier.showErrorMsg("Login failed", "somthing went wrong please try again");
        return false;
    }

    private boolean checkAmount() {
        String amount = this.amount.getText();

        if (amount.isEmpty()) {
            Notifier.showErrorMsg("fields required", "Please fill all the fields");
            return false;
        }
        // check if amount is a number
        try {
            Double.parseDouble(amount);
        } catch (NumberFormatException e) {
            Notifier.showErrorMsg("Invalid amount", "Please enter a valid amount");
            return false;
        }
        return true;
    }

    public void handleDeposit() {
        if (checkPwd() && checkAmount()) {
            double amount = Double.parseDouble(this.amount.getText());
            AuthProvider.getCurrentUser().setBalance(AuthProvider.getCurrentUser().getBalance() + amount);
            Notifier.showInfoMsg("Deposit Successful",
                    "Your balance is now " + AuthProvider.getCurrentUser().getBalance());
            UserDAO.updateUser(AuthProvider.getCurrentUser());
            this.amount.setText("");
            this.pwd.setText("");
        }
    }

    public void handleWithdraw() {

        if (checkPwd() && checkAmount()) {
            if (Double.parseDouble(this.amount.getText()) > AuthProvider.getCurrentUser().getBalance()) {
                Notifier.showErrorMsg("Login failed", "You don't have enough money");
                return;
            }
            double amount = Double.parseDouble(this.amount.getText());
            AuthProvider.getCurrentUser().setBalance(AuthProvider.getCurrentUser().getBalance() - amount);
            // add request to database
            UserDAO.updateUser(AuthProvider.getCurrentUser());
            Notifier.showInfoMsg("Withdraw Successful",
                    "Your balance is now " + AuthProvider.getCurrentUser().getBalance());
            this.amount.setText("");
            this.pwd.setText("");
        }
    }

    public void handleSend() {
        // TODO implement
    }

    public void handleExit() throws IOException {
        App.setRoot("Home");
    }

}
