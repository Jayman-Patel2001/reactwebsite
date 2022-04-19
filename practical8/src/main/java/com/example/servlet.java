package com.example;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

public class servlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/gec", "root", "Jayman@2001");
            PreparedStatement pst = con.prepareCall("insert into employee values(?,?,?,?)");

            pst.setInt(1, Integer.parseInt(request.getParameter("id")));
            pst.setString(2, request.getParameter("name"));
            pst.setString(3, request.getParameter("email"));

            pst.setInt(4,
                    Integer.parseInt(request.getParameter("age")));
            pst.executeUpdate();

            out.println("Data Inserted Sucessfully...");

        } catch (Exception e) {
            out.println(e.getMessage());
        }

    }
}