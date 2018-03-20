package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.FriendServices;
import services.UserServices;

public class SearchFriends extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String query = request.getParameter("query");

	
		JSONObject rep = null;
		
		if(query.equals("")) {
			rep = FriendServices.showFriend(key);
		}else {
			rep = FriendServices.searchFriend(key, query);
		}
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}
}
