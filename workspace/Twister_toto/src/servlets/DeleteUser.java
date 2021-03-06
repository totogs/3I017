package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.UserServices;

public class DeleteUser extends HttpServlet{

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String login = request.getParameter("login");
		String psswd = request.getParameter("psswd");
		
		JSONObject rep = UserServices.deleteAccount(login, psswd);
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}
}
