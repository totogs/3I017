public class UploadPicture extends HTTPServlet{
	
	private final String UPLOAD_DIRECTORY="/3i017/Fileserveur";

	protected void doPost(HTTPServeltResquest request, HTTPServletresponse response){

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
		}
	}
}

<form id="form_upload_picture">
	<input type="file"/>

</form>