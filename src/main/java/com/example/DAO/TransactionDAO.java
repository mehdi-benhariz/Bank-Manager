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
        ;
        String query = "select t.*, u.* from Transaction t, User u where t.source=u.CIN";
        try (Connection conn = MyConnection.conn; PreparedStatement pstmt = conn.prepareStatement(query)) {
            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                Transaction transaction = null;
                // creating the source user
                User source = new User(rs.getString("username"), rs.getString("password"), rs.getString("CIN"),
                        rs.getString("RIB"), rs.getString("role"));
                User destination = null;
                if (rs.getString("type").equals("transfert")) {
                    // destination = new User(rs.getString(columnLabel), password, CIN, RIB, role);
                }
                transaction = new Transaction(rs.getString("id"),
                        new SimpleDateFormat("yyyy-mm-dd hh:mm:ss").format(rs.getDate("date")),
                        rs.getString("type"),
                        rs.getString("amount"),
                        source, destination);
                transactions.add(transaction);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return transactions;

    }

    public static Boolean add(Transaction tr) {
        Boolean result = false;
        // todo add distination in case of transfert
        Boolean isTransfert = tr.getType().equals("transfert");
        String req = isTransfert
                ? "INSERT INTO Transaction (type,amount,source,destination) VALUES (?,?,?,?)"
                : "INSERT INTO Transaction (type,amount,source) VALUES (?,?,?)";

        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, tr.getType());
            pstmt.setDouble(2, Double.parseDouble(tr.getAmount()));
            pstmt.setString(3, tr.getSource().getCIN());
            if (isTransfert)
                pstmt.setString(4, tr.getDestination().getCIN());
            pstmt.executeUpdate();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;

    }

    public static ObservableList getTransByUser(String CIN) {
        ObservableList<Transaction> transactions = FXCollections.observableArrayList();
        ;
        String query = "SELECT * FROM transactions WHERE CIN = ?";
        try (Connection conn = MyConnection.conn; PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setString(1, CIN);
            java.sql.ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                // Transaction transaction = new Transaction(rs.getString("id"),
                // rs.getString("date"),
                // rs.getString("type"), rs.getInt("amount"),
                // rs.getInt(rs.getString("destination")));
                // transactions.add(transaction);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return transactions;
    }

}
