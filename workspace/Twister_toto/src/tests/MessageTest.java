package tests;

import org.json.JSONException;
import org.json.JSONObject;

import services.FriendServices;
import services.MessageServices;
import services.UserServices;
import tools.UserTools;

public class MessageTest {

	public static void main(String[] args) {
		
		String [] logins = {"scarface1", "sosa92", "elyzeeEnY"};
		String [] passwords = {"izi92", "izi93", "manulemalin"};
		
		JSONObject user1 = UserServices.signIn(logins[0], passwords[0], "montana", "antonio");
		JSONObject user2 = UserServices.signIn(logins[1], passwords[1], "colombia", "sosa");
		JSONObject user3 = UserServices.signIn(logins[2], passwords[2], "macron", "emmanuel");
		
		JSONObject log1 = UserServices.login(logins[0], passwords[0], "on");
		JSONObject log2 = UserServices.login(logins[1], passwords[1], "on");
		JSONObject log3 = UserServices.login(logins[2], passwords[2], "undefinded");
		
		System.out.println(log1.toString());
		System.out.println(log2.toString());
		System.out.println(log3.toString());
		
		//*************************************
		System.out.println("\n\nAdd friends !");
		//*************************************
		
		
		
		String key1=null;
		String key2=null;
		String key3=null;
		
		try {
			 key1= log1.getString("key");
			 key2= log2.getString("key");
			 key3= log3.getString("key");
		} catch (JSONException e) {
			
			e.printStackTrace();
		}
		
		int idF1, idF2;
		
		idF1 = UserTools.getId(key2);
		idF2 = UserTools.getId(key3);
		
		
		JSONObject add1 = FriendServices.addFriend(key1, idF1);
		JSONObject add2 = FriendServices.addFriend(key1, idF2);
		
		System.out.println(add1.toString());
		System.out.println(add2.toString());
		
		JSONObject mes11 = MessageServices.addMessage(key1, "Qui a fait les maths ??");
		JSONObject mes12 = MessageServices.addMessage(key1, "Qui a fait les servlets ??");
		JSONObject mes13 = MessageServices.addMessage(key1, "Qui a fait l'IA ??");
		
		JSONObject mes21 = MessageServices.addMessage(key2, "Je suis trop fort en info !");
		JSONObject mes22 = MessageServices.addMessage(key2, "Venez dans mon bendo !");
		JSONObject mes23 = MessageServices.addMessage(key2, "Qui paye sa grosse soiree ??");
		
		JSONObject mes31 = MessageServices.addMessage(key3, "Qui est chaud pour partir ра bogota ?");
		JSONObject mes32 = MessageServices.addMessage(key3, "On va bicrave des tulipes les gars ;)");
		JSONObject mes33 = MessageServices.addMessage(key3, "Je paye ma grosse beluga pour ce soir !");
		
		
		
		//*************************************
		System.out.println("\n\nShow friends message!");
		//*************************************
		
		JSONObject showmes1 = MessageServices.listMessageFriend(key1,"",-1,-1,-1,-1);
		System.out.println(showmes1.toString());
		
		//*************************************
		System.out.println("\n\nShow user message!");
		//*************************************
		
		JSONObject showmesfriend = MessageServices.listMessageUser(key1);
		System.out.println(showmesfriend.toString());
		
		
		
		
		
		

	}

}
