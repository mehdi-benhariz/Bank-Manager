package com.example.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.example.Models.User;
import com.example.utils.Security;

public class UserDAO {
    public static User login(String CIN, String password) {
        User result = null;
        String req = "SELECT * FROM User WHERE CIN =?";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, CIN);
            java.sql.ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                String hashedPassword = rs.getString("password");
                User user = new User(rs.getString("username"), rs.getString("password"), rs.getString("CIN"),
                        rs.getString("RIB"), rs.getString("role"));
                if (Security.compareHash(password, hashedPassword))
                    result = user;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public static boolean register(User user) {
        Boolean result = false;
        String req = "INSERT INTO User (username, password,CIN ,RIB) VALUES (?,?,?,?)";
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

    public static User getUserByCIN(String CIN) {
        User user = null;
        String req = "SELECT * FROM User WHERE CIN =?";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, CIN);
            java.sql.ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                user = new User(rs.getString("username"), rs.getString("password"), rs.getString("CIN"),
                        rs.getString("RIB"), rs.getString("role"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user;
    }

    // delete user by CIN
    public static Boolean deleteUser(String CIN) {
        Boolean result = false;
        String req = "DELETE FROM User WHERE CIN =?";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, CIN);
            pstmt.executeUpdate();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    // update user by CIN
    public static Boolean updateUser(User user) {
        Boolean result = false;
        String req = "UPDATE User SET username=?,password=?,CIN=?,RIB=?,role=? WHERE CIN=?";
        try (Connection conn = MyConnection.conn;
                PreparedStatement pstmt = conn.prepareStatement(req)) {
            pstmt.setString(1, user.getUserName());
            pstmt.setString(2, Security.hash(user.getPassword()));
            pstmt.setString(3, user.getCIN());
            pstmt.setString(4, user.getRIB());
            pstmt.setString(5, user.getRole());
            pstmt.setString(6, user.getCIN());
            pstmt.executeUpdate();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
