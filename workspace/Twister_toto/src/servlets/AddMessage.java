package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.MessageServices;
import services.UserServices;

public class AddMessage extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		String text = request.getParameter("text");

		
		JSONObject rep = MessageServices.addMessage(key, text);
		response.setContentType("text/plain");
		response.getWriter().println(rep.toString());
		
	}
}
