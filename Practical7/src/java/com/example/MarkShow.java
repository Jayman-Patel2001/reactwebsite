package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author LENOVO
 */
public class MarkShow  extends  HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out=resp.getWriter();
        int number=Integer.parseInt(req.getParameter("number"));
        boolean check=true;
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mark","root","");
            String result="select * from marks where er_no=?;";
            PreparedStatement ps=con.prepareStatement(result);
            ps.setInt(1, number);
            ResultSet mark=ps.executeQuery();
            System.out.println(mark);
          
            while(mark.next()){
                check=false;
               out.println(" <!DOCTYPE html>"+
                                "<html >"+
                                  "<head>"+
                                "<title>Mark Sheet</title>"+
                                    "</head>"+
                                    "<body>"+
                        "<h1 id='show' style='text-align: center;'> Mark Sheet </h1>"+
                           "<h3 style='text-align: center;'>Ernollment number</h3>"+

                        "<table style='border:2px solid; height: 25vw;text-align: center;margin-left: 30vw; width: 40vw;  ' >"+
                        "<tr>"+
            "<th>sr no  </th>"+
            "<th colspan='4' >Subject name  </th>"+
                        "<th>marks</th>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>1</td>"+
                        "<td colspan='4'>Math</td>"+
                        "<td>"+mark.getString("math")+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>2</td>"+
                        "<td colspan='4'>Physics</td>"+
                        "<td>"+mark.getString("physics")+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>3</td>"+
                        "<td colspan='4'>Chemistry</td>"+
                        "<td>"+mark.getString("chemistry")+"</td>"+
                         "</tr>"+
                            "<tr>"+
                                "<td>4</td>"+
                                "<td colspan='4'>Computer</td>"+
                                "<td>"+mark.getString("computer")+"</td>"+
                            "<tr >"+
                                "<td colspan='6'>Total number </td>"+
                                "<td >"+(mark.getInt("math")+mark.getInt("physics")+mark.getInt("chemistry")+mark.getInt("computer"))+"</td>"+
                            "</tr>"+
                        "</table>"+
                    "</body>"+
                    "</html>");
                                }
              if(check){
                out.println("<h1>Invalid ernollment number</h1>");
            }
            
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(MarkShow.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(MarkShow.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/OverriddenMethodBody
    }
}
