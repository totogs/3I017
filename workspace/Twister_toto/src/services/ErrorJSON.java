package services;

import org.json.JSONException;
import org.json.JSONObject;



public class ErrorJSON {
	/*Définit les envois au client JSON serviceAccepted() et serviceRefused()
	 */
	public static JSONObject serviceAccepted(String message, String key){
		JSONObject json = null;
		
		try{
			json = new JSONObject();
			if(!key.equals("")){
				json.put("key", key);
			}

			json.put("message", message);
		
		}catch(JSONException e){
			e.printStackTrace();
		}
		
		return json;
	}
	
	
	public static JSONObject serviceRefused(String message, int errorCode){
		JSONObject rep=null;
		
		try {
			rep = new JSONObject();
			rep.put("message", message);
			rep.put("code", errorCode);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		
		return rep;
	}
}
