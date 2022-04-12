package com.example.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.example.Models.Transaction;
import com.example.Models.User;
import com.example.utils.Security;

public class UserDAO {
    public static boolean login(String CIN, String password) {
        Boolean result = false;
        String req = "SELECT * FROM user WHERE CIN =?";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, CIN);
            java.sql.ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                String hashedPassword = rs.getString("password");
                if (Security.compareHash(password, hashedPassword))
                    result = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public static boolean register(User user) {
        Boolean result = false;
        String req = "INSERT INTO user (username, password,CIN ,RIB) VALUES (?,?,?,?)";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, user.getUserName());
            pstmt.setString(2, Security.hash(user.getPassword()));
            pstmt.setString(3, user.getCIN());
            pstmt.setString(4, user.getRIB());
            pstmt.executeUpdate();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;

    }

    public static Boolean makeTrans(Transaction tr) {
        Boolean result = false;
        // todo add distination in case of transfert
        String req = tr.getType().equals("transfert")
                ? "INSERT INTO transaction (CIN,RIB,amount,type,destination) VALUES (?,?,?,?,?)"
                : "INSERT INTO transaction (CIN,RIB,amount,type) VALUES (?,?,?,?)";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            // pstmt.setString(1, tr.getCIN());
            // pstmt.setString(2, tr.getRIB());
            // pstmt.setInt(3, tr.getAmount());
            pstmt.setString(4, tr.getType());
            pstmt.executeUpdate();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;

    }
}
