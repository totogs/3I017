
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
		String login = UserTools.getLogin(id_user);
		
		JSONObject message = MessageTools.insertMessage(id_user, login,  text);
		if(message==null) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return message;
	}
	
	
	public static JSONObject addComment(String key, String text, int id_message){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		String login = UserTools.getLogin(id_user);
		
		JSONObject comment = MessageTools.insertComment(id_user, login, id_message, text);
		if(comment==null) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return comment;
	}
	
	public static JSONObject addLike(String key, int id_message){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		String login = UserTools.getLogin(id_user);
		
		JSONObject like = MessageTools.insertLike(id_user, login, id_message);
		if(like==null) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return like;
	}
	
	public static JSONObject removeLike(String key, int id_message){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);

		if(!MessageTools.deleteLike(id_user, id_message)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("dislike !", key);
	}
	
	
	public static JSONObject listMessageUser(String key){
		
		int id_user = UserTools.getId(key);
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		JSONObject messages = MessageTools.selectMessageUser(id_user);
		
		return messages;
	}
	
	
	public static JSONObject deleteMessage(String key, int id_message){
		
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		if(!MessageTools.deleteMessage(id_user, id_message)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("Message "+id_message+" deleted !", key);
	}
	
	
	public static JSONObject listMessageFriend(String key, String query, int from, int min_id, int max_id, int nb_messages){
		
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		JSONObject messages = MessageTools.selectMessageFriend(id_user, from, min_id, max_id, nb_messages);
		
		if(messages==null) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return messages;
	}
	

}