package com.example.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.text.SimpleDateFormat;

import com.example.Models.Transaction;
import com.example.Models.User;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class TransactionDAO {
    public static ObservableList<Transaction> getAll() {
        ObservableList<Transaction> transactions = FXCollections.observableArrayList();

        String query = "select t.*, u.* from Transaction t, User u where t.source=u.CIN";
        try {
            Connection conn = MyConnection.conn;
            PreparedStatement pstmt = conn.prepareStatement(query);
            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                Transaction transaction = null;
                // creating the source user
                if (rs.getString("type").equals("transfer")) {
                    // destination = new User(rs.getString(columnLabel), password, CIN, RIB, role);
                }
                transaction = new Transaction(rs.getString("id"),
                        new SimpleDateFormat("yyyy-mm-dd hh:mm:ss").format(rs.getDate("date")),
                        rs.getString("type"),
                        rs.getString("amount"),
                        rs.getString("source"), rs.getString("destination"));
                transactions.add(transaction);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return transactions;

    }

    public static Boolean add(Transaction tr) {
        Boolean result = false;
        // todo add distination in case of transfer
        Boolean isTransfer = tr.getType().equals("transfer");
        String req = isTransfer
                ? "INSERT INTO Transaction (type,amount,source,destination) VALUES (?,?,?,?)"
                : "INSERT INTO Transaction (type,amount,source) VALUES (?,?,?)";

        try {
            Connection conn = MyConnection.conn;
            PreparedStatement pstmt = conn.prepareStatement(req);
            pstmt.setString(1, tr.getType());
            pstmt.setDouble(2, Double.parseDouble(tr.getAmount()));
            pstmt.setString(3, tr.getSource());
            if (isTransfer)
                pstmt.setString(4, tr.getDestination());
            pstmt.executeUpdate();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;

    }

    public static ObservableList getTransByUser(String CIN) {
        ObservableList<Transaction> transactions = FXCollections.observableArrayList();
        User source = UserDAO.getUserByCIN(CIN);
        String query = "SELECT * FROM transactions WHERE source = ?";
        try {
            Connection conn = MyConnection.conn;
            PreparedStatement pstmt = conn.prepareStatement(query);
            pstmt.setString(1, CIN);
            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                Transaction transaction = new Transaction(rs.getString("id"),
                        rs.getString("date"),
                        rs.getString("type"), Double.toString(rs.getDouble("amount")),
                        rs.getString("source"), rs.getString("destination"));
                transactions.add(transaction);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return transactions;
    }

    public static ObservableList<Transaction> getTransactionsByQuery(String query) {
        ObservableList<Transaction> transactions = FXCollections.observableArrayList();
        String req = "SELECT * FROM Transactions WHERE source LIKE '%" + query + "%' ";
        try {
            Connection conn = MyConnection.conn;
            PreparedStatement pstmt = conn.prepareStatement(req);

            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                Transaction transaction = new Transaction(rs.getString("id"),
                        rs.getString("date"),
                        rs.getString("type"), Double.toString(rs.getDouble("amount")),
                        rs.getString("source"), rs.getString("destination"));
                transactions.add(transaction);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return transactions;

    }

}
