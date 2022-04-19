<%@page import="java.sql.*" %>
<%
Class.forName("com.mysql.jdbc.Driver");
try
{
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/gec","root","Jayan@2001");
Statement stmt=con.createStatement();
ResultSet rs=stmt.executeQuery("select * from student where semester= 6");
while(rs.next()) {
out.println("<p>"+rs.getInt(1));
out.println(rs.getString(2));
out.println(rs.getString(3));
out.println(rs.getString(4));
out.println(rs.getString(5));
out.println(rs.getInt(6)+"</p>");
}
con.close(); }catch(Exception e){}
%>