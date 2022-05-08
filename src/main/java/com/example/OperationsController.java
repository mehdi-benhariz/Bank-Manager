package com.example;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import com.example.DAO.TransactionDAO;
import com.example.DAO.UserDAO;
import com.example.Models.Transaction;
import com.example.Models.User;
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
    @FXML
    TextField receiver;

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
            // update the user in the database
            UserDAO.updateUser(AuthProvider.getCurrentUser());
            // update the transaction in the database
            TransactionDAO.add(new Transaction("deposit", Double.toString(amount), AuthProvider.getCurrentUser()));
            this.amount.clear();
            this.pwd.clear();
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
            // update the transaction in the database
            TransactionDAO.add(new Transaction("withdraw", Double.toString(amount), AuthProvider.getCurrentUser()));
            Notifier.showInfoMsg("Withdraw Successful",
                    "Your balance is now " + AuthProvider.getCurrentUser().getBalance());
            this.amount.setText("");
            this.pwd.setText("");
        }
    }

    public void handleTransfer() {
        if (checkPwd() && checkAmount()) {
            if (Double.parseDouble(this.amount.getText()) > AuthProvider.getCurrentUser().getBalance()) {
                Notifier.showErrorMsg("Login failed", "You don't have enough money");
                return;
            }
            // check if destination user exists
            User receiver = UserDAO.getUserByCIN(this.receiver.getText());
            if (receiver == null) {
                Notifier.showErrorMsg("Login failed", "User doesn't exist");
                return;
            }
            double amount = Double.parseDouble(this.amount.getText());
            // update the user in memory
            AuthProvider.getCurrentUser().setBalance(AuthProvider.getCurrentUser().getBalance() - amount);
            receiver.setBalance(receiver.getBalance() + amount);
            // add request to database
            UserDAO.updateUser(AuthProvider.getCurrentUser());
            UserDAO.updateUser(receiver);
            // update the transaction in the database
            TransactionDAO
                    .add(new Transaction("transfer", Double.toString(amount), AuthProvider.getCurrentUser(),
                            receiver));
            Notifier.showInfoMsg("Transfer Successful",
                    "Your balance is now " + AuthProvider.getCurrentUser().getBalance());
            this.amount.clear();
            this.pwd.clear();
            this.receiver.clear();
        }

        // TODO implement
    }

    public void handleExit() throws IOException {
        App.setRoot("Home");
    }

}
