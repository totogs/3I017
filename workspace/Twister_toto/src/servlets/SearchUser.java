package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import services.FriendServices;
import services.UserServices;

public class SearchUser extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String query = request.getParameter("query");

		
		System.out.println("Demande de liste d'amis de "+key);
		

		JSONObject rep = UserServices.searchUser(key, query);
		
		
		String repstring="";
		if(rep.has("users")){
			try {
				repstring = rep.get("users").toString();
			} catch (JSONException e) {
				
				e.printStackTrace();
			}
		}
		else {
			repstring = rep.toString();
		}
		
		
		
		response.setContentType("text/plain");
		response.getWriter().println(repstring);
		
	}
}
