
package services;


import java.sql.*;

import org.json.JSONObject;

import services.ErrorJSON;
import tools.UserTools;



public class UserServices {

	
	public static JSONObject login(String login, String psswd, String root){
	
		if (login==null || psswd==null){
			return ErrorJSON.serviceRefused("Wrong arguments", -1);
		}
		if (! UserTools.userExists(login)) {
			return ErrorJSON.serviceRefused("User doesn't exists", 1);
		}
		
		boolean psswdOk = UserTools.checkPsswd(login, psswd);
		
		if (!psswdOk) {
			return ErrorJSON.serviceRefused("Password does not match !", 3);
		}
		
		String key = UserTools.generateKey(32);
		int idUser = UserTools.getIdByLogin(login);
		
		if(!UserTools.insertSession(key, idUser, root)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		
		return ErrorJSON.login(key, idUser, login);
	}
	
	
	
	public static JSONObject logout(String key){
		
		if(!UserTools.deleteSession(key)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		return ErrorJSON.serviceAccepted("Logout !",key);
	}
	
	
	
	public static JSONObject signIn(String login, String psswd, String surname, String name){
		//~service createUser
		
		if(login==null || psswd==null){
			return ErrorJSON.serviceRefused("Wrong arguments", -1);
		}
		if(UserTools.userExists(login)){
			return ErrorJSON.serviceRefused("User already exists !", 0);
		}
		
		if(!UserTools.insertUser(login, psswd, surname, name)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("User "+login+" has just been created !","");
	}
	
	
	public static JSONObject deleteAccount(String login, String psswd){
		
		if (! UserTools.userExists(login)) {
			return ErrorJSON.serviceRefused("User doesn't exists", 1);
		}
		
		if (!UserTools.checkPsswd(login, psswd)){
			
			return ErrorJSON.serviceRefused("Password does not match !", 3);
		}
		
		if(!UserTools.deleteAccount(login)) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return ErrorJSON.serviceAccepted("User "+login+" has just been deleted !","");
	}
	
	
	public static JSONObject getUserInfo(String key, int id) {
		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}
		
		String login = UserTools.getLogin(id);
		
		if (! UserTools.userExists(login)) {
			return ErrorJSON.serviceRefused("User doesn't exists", 1);
		}
		
		
		JSONObject retour = UserTools.getUserInfo(id);
		
		if(retour==null) {
			return ErrorJSON.serviceRefused("Data Base error", 4);
		}
		
		return retour;
	}
	
	
	public static JSONObject searchUser(String key, String query){

		
		if(!UserTools.isConnected(key)){
			
			return ErrorJSON.serviceRefused("Disconnected !", 5);
		}

		JSONObject friends = UserTools.searchUser( query);
		
		return friends;
	}
	
}
