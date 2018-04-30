package tests;

import org.json.JSONException;
import org.json.JSONObject;

import services.UserServices;

public class UserTest {
	
	public static void main (String[] args){

		String [] logins = {"scarface1", "sosa92", "elyzeeEnY"};
		String [] passwords = {"izi92", "izi93", "manulemalin"};
		
		//*************************************
		System.out.println("Creation of users's account !");
		//*************************************
		
		JSONObject user1 = UserServices.signIn(logins[0], passwords[0], "montana", "antonio");
		JSONObject user2 = UserServices.signIn(logins[1], passwords[1], "colombia", "sosa");
		JSONObject user3 = UserServices.signIn(logins[2], passwords[2], "macron", "emmanuel");
		
		System.out.println(user1.toString());
		System.out.println(user2.toString());
		System.out.println(user3.toString());
		
		
		//*************************************
		System.out.println("\n\n Connection of all users !");
		//*************************************
		
		
		JSONObject log1 = UserServices.login(logins[0], passwords[0], "on");
		JSONObject log2 = UserServices.login(logins[1], passwords[1], "on");
		JSONObject log3 = UserServices.login(logins[2], passwords[2], "undefinded");
		
		//System.out.println(log1.toString());
		//System.out.println(log2.toString());
		//System.out.println(log3.toString());
		
		
		//*************************************
		System.out.println("\n\nDeconnection of all users !");
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
		
		
		JSONObject logout1 = UserServices.logout(key1);
		JSONObject logout2 = UserServices.logout(key2);
		JSONObject logout3 = UserServices.logout(key3);
		
		System.out.println(logout1.toString());
		System.out.println(logout2.toString());
		System.out.println(logout3.toString());
		
		
		//*************************************
		System.out.println("\n\nDelete accounts of users !");
		//*************************************
		
		
		JSONObject delete1 = UserServices.deleteAccount(logins[0], passwords[0]);
		JSONObject delete2 = UserServices.deleteAccount(logins[1], passwords[1]);
		
		System.out.println(delete1.toString());
		System.out.println(delete2.toString());
		
		
	}

}
