package com.example.utils;

import com.example.Models.User;

public class AuthProvider {
    static User currentUser;
    static Boolean logged = false;

    public static User getCurrentUser() {
        return currentUser;
    }

    public static boolean isLogged() {
        return logged;
    }

    public static void setLogged(Boolean logged) {
        AuthProvider.logged = logged;
    }

    public static void setCurrentUser(User currentUser) {
        AuthProvider.currentUser = currentUser;
    }

    public static void logout() {
        AuthProvider.currentUser = null;
        AuthProvider.logged = false;
    }
}
