
package services;



import org.bson.types.ObjectId;
import org.json.JSONObject;

import services.ErrorJSON;
import tools.MessageTools;
import tools.UserTools;

public class MessageServices {

	
	public static JSONObject addMessage(String key, String text){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		if(!MessageTools.insertMessage(id_user, text)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		return ErrorJSON.serviceAccepted("Message posted !",key);
	}
	
	
	public static JSONObject addComment(String key, String text, ObjectId id_message){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		if(!MessageTools.insertComment(id_user, id_message, text)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("Comment added !", key);
	}
	
	
	public static JSONObject listMessageUser(String key){
		
		int id_user = UserTools.getId(key);
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		JSONObject messages = MessageTools.selectMessageUser(id_user);
		
		return messages;
	}
	
	
	public static JSONObject deleteMessage(String key, ObjectId id_message){
		
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		if(!MessageTools.deleteMessage(id_user, id_message)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("Post deleted !", key);
	}
	
	
	public static JSONObject listMessageFriend(String key){
		
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		JSONObject messages = MessageTools.selectMessageFriend(id_user);
		
		return messages;
	}
	

}