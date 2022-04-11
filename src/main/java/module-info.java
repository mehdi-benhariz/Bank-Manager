module com.example {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.sql;

    opens com.example to javafx.fxml;
    opens com.example.Models to javafx.fxml;
    opens com.example.DAO to javafx.fxml;

    exports com.example;
}
