package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import services.MessageServices;
import services.UserServices;

public class AddMessage extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String text = request.getParameter("text");

		System.out.println("Demande d'ajout de message de "+key);
		
		JSONObject rep = MessageServices.addMessage(key, text);
		
		System.out.println(rep);
		String repstring="";
		if(rep.has("message")) {
			try {
				repstring = rep.get("message").toString();
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
