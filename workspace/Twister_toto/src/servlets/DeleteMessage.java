package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import services.MessageServices;

public class DeleteMessage extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		int id_message = Integer.parseInt(request.getParameter("idMessage"));

		System.out.println("Demande de suppression de message "+key);
		
		JSONObject rep = MessageServices.deleteMessage(key, id_message);
		response.setContentType("text/json");
		response.getWriter().println(rep.toString());
		
	}
}
