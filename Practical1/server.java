import java.io.*;
import java.net.*;
import java.util.Date;

public class server {
    public static void main(String[] args) throws IOException {
        System.out.println("Server started...");

        ServerSocket ss = new ServerSocket(1234);
        Socket cs = ss.accept();
        Date d = new Date();
        String str = "Current Date and Time from server is:" + d;

        PrintWriter toclient = new PrintWriter(cs.getOutputStream(), true);
        toclient.print(str);
        toclient.close();
        cs.close();
        ss.close();

    }
}