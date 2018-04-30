package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import services.MessageServices;

public class ShowMessageFriends extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String query = request.getParameter("query");
		int from = Integer.parseInt(request.getParameter("from"));
		int id_max = Integer.parseInt(request.getParameter("id_max"));
		int id_min = Integer.parseInt(request.getParameter("id_min"));
		int nb_message = Integer.parseInt(request.getParameter("nb"));
		
		System.out.println("Demande de liste de messages de "+key);
		
		JSONObject rep=MessageServices.listMessageFriend(key, query, from, id_min, id_max, nb_message);

		System.out.println(rep);
		String repstring="";
		
		if(rep.has("messages")) {
			try {
				repstring = rep.get("messages").toString();
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
