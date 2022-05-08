package com.example;

import java.net.URL;
import java.util.ResourceBundle;

import com.example.DAO.AdminDAO;
import com.example.DAO.UserDAO;
import com.example.Models.User;

import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
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

    ObservableList<User> users;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {
        users = AdminDAO.getUsers();
        clients.setItems(users);

        username.setCellValueFactory(new PropertyValueFactory<User, String>("userName"));
        RIB.setCellValueFactory(new PropertyValueFactory<User, String>("RIB"));
        amount.setCellValueFactory(new PropertyValueFactory<User, Double>("balance"));

    }

}
