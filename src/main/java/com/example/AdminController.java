package com.example;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import com.example.DAO.AdminDAO;
import com.example.DAO.TransactionDAO;
import com.example.DAO.UserDAO;
import com.example.Models.Transaction;
import com.example.Models.User;
import com.example.utils.AuthProvider;

import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;

public class AdminController implements Initializable {
    @FXML
    private TableView<User> clients;

    @FXML
    private TableColumn<User, String> username;
    @FXML
    private TableColumn<User, String> RIB;
    @FXML
    private TableColumn<User, Double> amount;

    @FXML
    private TableView<Transaction> transfers;
    @FXML
    private TableColumn<Transaction, User> sender;
    @FXML
    private TableColumn<Transaction, User> receiver;
    @FXML
    private TableColumn<Transaction, Double> amountT;

    @FXML
    private TextField searchText;
    ObservableList<User> users;
    ObservableList<Transaction> transactions;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {
        // check if there's a tableview
        if (clients != null) {
            users = AdminDAO.getUsers();

            username.setCellValueFactory(new PropertyValueFactory<User, String>("userName"));
            RIB.setCellValueFactory(new PropertyValueFactory<User, String>("RIB"));
            amount.setCellValueFactory(new PropertyValueFactory<User, Double>("balance"));

            clients.setItems(users);
        }
        if (transfers != null) {
            transactions = TransactionDAO.getAll();
            System.out.println(transactions);
            sender.setCellValueFactory(new PropertyValueFactory<Transaction, User>("source"));

            receiver.setCellValueFactory(new PropertyValueFactory<Transaction, User>("destination"));
            amountT.setCellValueFactory(new PropertyValueFactory<Transaction, Double>("amount"));

            transfers.setItems(transactions);
        }
    }

    public void navigateTransfer() throws IOException {
        App.setRoot("admin_transferHistory");

    }

    public void navigateAccount() throws IOException {
        App.setRoot("admin_accounts");
    }

    public void handleLogout() throws IOException {
        AuthProvider.logout();
        App.setRoot("login");
    }

    public void handleExit() throws IOException {
        searchText.clear();
        App.setRoot("admin_Inter");
    }

    public void searchAcc() {
        // todo fix this
        String query = searchText.getText();
        System.out.println(query);
        users = AdminDAO.searchUsersByQuery(query);
        clients.setItems(users);
        clients.refresh();

    }

    public void searchTr() {
        String query = searchText.getText();
        System.out.println(query);
        transactions = TransactionDAO.getTransactionsByQuery(query);
        transfers.setItems(transactions);
        transfers.refresh();

    }
}
