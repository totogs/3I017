package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.FriendServices;
import services.UserServices;

public class AddFriend extends HttpServlet{

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		int idFriend = Integer.parseInt(request.getParameter("idFriend"));

		
		JSONObject rep = FriendServices.addFriend(key, idFriend);
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}
}
