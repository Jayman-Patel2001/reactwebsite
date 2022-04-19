import java.sql.*;

public class App {
    public static void main(String args[]) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/gec", "root", "Jayman@2001");
            PreparedStatement pst = conn.prepareStatement("INSERT INTO student VALUES(?,?,?)");
            pst.setInt(1, 01);
            pst.setString(2, "Aakash");
            pst.setString(3, "Mechanical");
            pst.executeUpdate();
            System.out.println("First Record Inserted...");
            pst.setInt(1, 02);
            pst.setString(2, "Dhaval");
            pst.setString(3, "Electrical");

            pst.executeUpdate();
            System.out.println("Second Record Inserted...");
            pst.setInt(1, 03);
            pst.setString(2, "Akhilesh");
            pst.setString(3, "Computer");
            pst.executeUpdate();
            System.out.println("Third Record Inserted...");
            pst.close();
            conn.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}