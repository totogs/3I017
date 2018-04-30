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

public class AddComment extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String text = request.getParameter("text");
		int id_message = Integer.parseInt(request.getParameter("idMessage"));

		System.out.println("Demande d'ajout de commentaire de "+key);
		
		JSONObject rep = MessageServices.addComment(key, text, id_message);
		
		System.out.println(rep);
		String repstring="";
		if(rep.has("comment")){
			try {
				repstring = rep.get("comment").toString();
			} catch (JSONException e) {
				
				e.printStackTrace();
			}
		}
		else {
			repstring = rep.toString();
		}
		
		response.setContentType("text/json");
		response.getWriter().println(repstring);
		
	}
}
