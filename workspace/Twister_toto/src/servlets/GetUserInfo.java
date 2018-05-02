package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.UserServices;

public class GetUserInfo extends HttpServlet{

	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int id = Integer.parseInt(request.getParameter("id"));
 		String key = request.getParameter("key");
 
 		System.out.println("Demande d'information utilisateur de "+key);

		JSONObject rep = UserServices.getUserInfo(key, id);
		System.out.println(rep);
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}
}
