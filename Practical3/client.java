import java.io.*;
import java.net.*;

public class client {
    public static void main(String args[]) {
        try {
            Socket s = new Socket("localhost", 777);
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            OutputStream os = s.getOutputStream();
            PrintWriter pw = new PrintWriter(os, true);
            InputStream is = s.getInputStream();
            BufferedReader br1 = new BufferedReader(new InputStreamReader(is));
            System.out.println("Starts Chatting...type and press Enter");
            String str, str1;
            while (true)

            {

                str1 = br.readLine();
                pw.println(str1);
                pw.flush();
                if ((str = br1.readLine()) != null)

                {
                    System.out.println(str);
                }
            }
        } catch (Exception e) {
        }

    }
}