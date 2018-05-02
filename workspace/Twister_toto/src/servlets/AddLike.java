package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import services.MessageServices;

public class AddLike extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		int id_message = Integer.parseInt(request.getParameter("idMessage"));

		System.out.println("Demande d'ajout de like de "+key);
		
		JSONObject rep = MessageServices.addLike(key, id_message);
		
		System.out.println(rep);
		String repstring="";
		if(rep.has("like")){
			try {
				repstring = rep.get("like").toString();
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
