package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.UserServices;

public class LoginUser extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String login = request.getParameter("login");
		String psswd = request.getParameter("psswd");
		String root = request.getParameter("root");
		
		System.out.println("Demande de connexion de "+login);
		
		JSONObject rep = UserServices.login(login, psswd, root);
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}

}
