import java.io.*;
import java.net.*;

public class client {
    public static void main(String[] args) throws UnknownHostException, IOException {
        Socket cs = new Socket("LocalHost", 1234);

        BufferedReader fromserver = new BufferedReader(new InputStreamReader(cs.getInputStream()));
        System.out.println(fromserver.readLine());

        fromserver.close();
        cs.close();
    }
}