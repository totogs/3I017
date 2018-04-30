package servlets;

import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UploadPicture extends HttpServlet{
	
	private final String UPLOAD_DIRECTORY="/3i017/Fileserveur";

	protected void doPost(HttpServletRequest request, HttpServletResponse response){
		/*
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		String key="";
		response.setContentType("application/json");
		PrintWriter out = response.get

		if(isMultipart){

			FileItemFactory factory = new DiskFileItemFactory();

			factory.setRepository(new File(filepath));
			ServletFileUpload upload = new ServletFileUpload(factory);

			try{
				List fileitem=upload.parseRequest(request);

				Iterator i = fileItems.iterator();
				String filename=" ";

				while(i.hasBext()){
					Fileitem fi=(Fileitem)(i.next());
					String fname=fi.getFieldName();

					if(!fi.idFormField()){

					}
				}
			}
		}*/
	}
}