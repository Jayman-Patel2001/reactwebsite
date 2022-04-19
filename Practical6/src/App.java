import java.sql.*;

public class App {
    public static void main(String args[]) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/gec", "root", "Jayman@2001");
            CallableStatement cs = conn.prepareCall("{CALL insert_data(?,?,?,?,?)}");
            cs.setInt(1, 101);
            cs.setString(2, "Akhilesh");
            cs.setString(3, "Manager");
            cs.setString(4, "Humen Resource");
            cs.setInt(5, 70000);
            cs.execute();
            System.out.println("RECORD INSERTED...!!!");

            CallableStatement csu = conn.prepareCall("{CALL update_data(?,?)}");
            csu.setInt(1, 101);
            csu.setString(2, "JIgnesh");
            csu.execute();
            System.out.println("RECORD UPDATED...!!!");

            CallableStatement css = conn.prepareCall("{CALL select_data()}");
            css.execute();

            CallableStatement csd = conn.prepareCall("{CALL delete_data()}");
            csd.execute();
            System.out.println("RECORD DELETE...!!!");
            conn.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}