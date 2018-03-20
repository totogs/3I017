package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.MessageServices;
import services.UserServices;

public class AddComment extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String text = request.getParameter("text");
		int id_message = Integer.parseInt(request.getParameter("idMessage"));

		
		JSONObject rep = MessageServices.addComment(key, text, id_message);
		response.setContentType("text/json");
		response.getWriter().println(rep.toString());
		
	}
}