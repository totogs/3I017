package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.UserServices;
import tools.UserTools;

public class CreateUser extends HttpServlet {
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String login = request.getParameter("login");
		String psswd = request.getParameter("psswd");
		String nom = request.getParameter("nom");
		String prenom = request.getParameter("prenom");
		
		System.out.println("Demande de création utilisateur");
		JSONObject rep = UserServices.signIn(login, psswd,nom,prenom);
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}

}
