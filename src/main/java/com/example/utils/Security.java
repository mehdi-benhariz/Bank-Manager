package com.example.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Security {
    public static String hash(String passwordToHash) {
        String hashedPassword = null;
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(passwordToHash.getBytes());
            byte[] bytes = md.digest();
            StringBuilder sb = new StringBuilder();
            // conerting decimal format to hex
            for (byte b : bytes)
                sb.append(Integer.toString((b & 0xff) + 0x100, 16).substring(1));
            // get the final string
            hashedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return hashedPassword;
    }

    public static Boolean compareHash(String plainText, String hash) {
        System.out.println(hash(plainText));
        System.out.println(hash);
        return hash(plainText).equals(hash);
    }
}
