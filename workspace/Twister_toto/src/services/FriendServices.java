
package services;



import org.json.JSONObject;
import services.ErrorJSON;
import tools.FriendTools;
import tools.UserTools;

public class FriendServices {

	public static JSONObject addFriend(String key, int idFriend){
		

		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		if(FriendTools.friendExists(id_user, idFriend)){
			return ErrorJSON.serviceRefused("User "+id_user+" and "+idFriend+" are already friends !",3);
		}
		
		if(!FriendTools.insertFriend(id_user, idFriend)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("Friend "+idFriend+" added !",key);
	}
	
	
	
	public static JSONObject removeFriend(String key, int idFriend){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		if(!FriendTools.removeFriend(id_user, idFriend)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("Friend "+idFriend+" removed !",key);
	}
	
	
	public static JSONObject searchFriend(String key, String query){

		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);
		
		JSONObject friends = FriendTools.searchFriend(id_user, query);
		
		return friends;
	}
	
	
	public static JSONObject showFriend(String key){
		
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		int id_user = UserTools.getId(key);

		JSONObject friends = FriendTools.showFriend(id_user);
		
		return friends;
	}
}