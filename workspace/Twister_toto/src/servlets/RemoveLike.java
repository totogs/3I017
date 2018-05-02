package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import services.MessageServices;

public class RemoveLike extends HttpServlet{

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		int id_message = Integer.parseInt(request.getParameter("idMessage"));

		System.out.println("Demande de supression de like "+key);
		
		JSONObject rep = MessageServices.removeLike(key, id_message);
		
		System.out.println(rep);

		
		response.setContentType("text/json");
		response.getWriter().println(rep.toString());
		
	}
}
