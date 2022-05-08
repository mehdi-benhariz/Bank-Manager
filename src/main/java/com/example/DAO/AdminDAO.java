package com.example.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.example.Models.Transaction;
import com.example.Models.User;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class AdminDAO {

    public static ObservableList<User> getUsers() {
        ObservableList<User> result = FXCollections.observableArrayList();
        String query = "SELECT * FROM User where role = 'client'";
        try {
            Connection conn = MyConnection.conn;
            PreparedStatement pstmt = conn.prepareStatement(query);
            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                User user = new User(rs.getString("username"), rs.getString("password"), rs.getString("CIN"),
                        rs.getString("RIB"), rs.getString("role"), rs.getDouble("balance"));
                result.add(user);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

    public static ObservableList<User> searchUsersByQuery(String query) {
        ObservableList<User> users = FXCollections.observableArrayList();
        String req = "SELECT * FROM User WHERE username LIKE '%" + query + "%' AND role='client' ";
        try {
            Connection conn = MyConnection.conn;
            PreparedStatement pstmt = conn.prepareStatement(req);

            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                User user = new User(rs.getString("username"), rs.getString("password"), rs.getString("CIN"),
                        rs.getString("RIB"), rs.getString("role"), rs.getDouble("balance"));
                users.add(user);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return users;

    }
}
