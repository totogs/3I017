package services;



import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import com.mongodb.BasicDBObject;

import tools.FriendTools;



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
	
	public static JSONObject login(String key, int id, String login) {
		
		JSONObject json = null;
		
		try{
			
			json = new JSONObject();
			
			json.put("key", key);

			json.put("id", id);
			
			json.put("login", login);
			
			List<Integer> follows = new ArrayList<Integer>();
			
			for(BasicDBObject obj:FriendTools.listFriend(id)) {
				follows.add(obj.getInt("id_user"));
			}
			
			json.put("follows",follows);
			
		}catch(JSONException e){
			e.printStackTrace();
		}
		
		return json;
	}
	
	
	public static JSONObject serviceRefused(String message, int errorCode){
		JSONObject rep=null;
		
		try {
			rep = new JSONObject();
			rep.put("error", message);
			rep.put("code", errorCode);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		
		return rep;
	}
}
