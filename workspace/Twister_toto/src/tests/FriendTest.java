package tests;

import org.json.JSONException;
import org.json.JSONObject;

import services.FriendServices;
import services.UserServices;
import tools.UserTools;

public class FriendTest {

	public static void main(String[] args) {
		
		
		String [] logins = {"scarface1", "sosa92", "elyzeeEnY"};
		String [] passwords = {"izi92", "izi93", "manulemalin"};
		
		JSONObject user1 = UserServices.signIn(logins[0], passwords[0], "montana", "antonio");
		JSONObject user2 = UserServices.signIn(logins[1], passwords[1], "colombia", "sosa");
		JSONObject user3 = UserServices.signIn(logins[2], passwords[2], "macron", "emmanuel");
		
		JSONObject log1 = UserServices.login(logins[0], passwords[0], "on");
		JSONObject log2 = UserServices.login(logins[1], passwords[1], "on");
		JSONObject log3 = UserServices.login(logins[2], passwords[2], "undefined");
		
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
		
		
		
		//*************************************
		System.out.println("\n\nShow friends with query !");
		//*************************************
		
		
		
		JSONObject search = UserServices.searchUser(key1, "macr");
		System.out.println(search.toString());
		
		
		
		//*************************************
		System.out.println("\n\nShow friends");
		//*************************************

		
		JSONObject show = FriendServices.showFriend(key1);
		System.out.println(show.toString());
		
		
		
		//*************************************
		System.out.println("\n\nRemove friend !");
		//*************************************
		
		
		
		//JSONObject rem1 = FriendServices.removeFriend(key1, idF1);
		//System.out.println(rem1.toString());
		
		
		
		//*************************************
		System.out.println("\n\nDeconnection of all users !");
		//*************************************
		
		
		JSONObject logout1 = UserServices.logout(key1);
		JSONObject logout2 = UserServices.logout(key2);
		JSONObject logout3 = UserServices.logout(key3);
		
		System.out.println(logout1.toString());
		System.out.println(logout2.toString());
		System.out.println(logout3.toString());

	}

}
