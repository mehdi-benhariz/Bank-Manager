package com.example.utils;

import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;

public class Notifier {
    // Show a Information Alert without Header Text
    public static void showErrorMsg(String title, String msg) {
        Alert alert = new Alert(AlertType.INFORMATION);
        alert.setTitle(title);

        // Header Text: null
        alert.setHeaderText(null);
        alert.setContentText(msg);

        alert.showAndWait();
    }
}
