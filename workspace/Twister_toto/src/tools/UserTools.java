package tools;

import java.sql.*;
import java.util.*;

import org.json.JSONObject;

import db.Database;

public class UserTools {
	
	public static boolean userExists(String login){
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM Users WHERE login=\""+ login +"\";";
			Statement st = cn.createStatement();
			st.executeQuery(query);
			
			ResultSet rs = st.getResultSet();

			
			if (rs.next()){
				retour = true;
			}
			else{
				retour = false;
			}
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	
	public static boolean checkPsswd(String login, String psswd){
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM Users WHERE login=\""+login+"\";";
			Statement st = cn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()){
				if(BCrypt.checkpw(psswd, rs.getString("psswd"))) {
					return true;
				}
			}
			
			st.close();
			cn.close();
			
		} catch(Exception e){

			e.printStackTrace();
		}
		
		return false;
	}
	
	public static String generateKey(int length){
		
		return UUID.randomUUID().toString();
	}
	
	public static int getId(String key){
		
		int id=-1;
		
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM connection WHERE cle=\""+ key +"\";";
			Statement st = cn.createStatement();
			st.executeQuery(query);
			
			ResultSet rs = st.getResultSet();
			
			if (rs.next()){
				
				id=rs.getInt("id_user");
			}
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return id;
	}

	public static String getLogin(int id){

		String login="";

		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM users WHERE id=\""+ id +"\";";
			Statement st = cn.createStatement();
			st.executeQuery(query);
			
			ResultSet rs = st.getResultSet();
			
			if (rs.next()){
				
				login=rs.getString("login");
			}
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return login;

	}
	
	public static int getIdByLogin(String login){
		
		int id=-1;
		
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM Users WHERE login=\""+ login +"\";";
			Statement st = cn.createStatement();
			st.executeQuery(query);
			
			ResultSet rs = st.getResultSet();
			
			if (rs.next()){
				
				id=rs.getInt("id");
			}
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return id;
	}
	
	public static boolean insertSession(String key, int idUser, String root){
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String insert = "INSERT INTO connection(cle,id_user,thedate, isroot) VALUES(?,?,NOW(),?);";
			PreparedStatement st = cn.prepareStatement(insert);
			
			
			st.setString(1, key);
			st.setInt(2, idUser);
			
			if(root.equals("on")){
				st.setBoolean(3, true);
			}else{
				st.setBoolean(3, false);
			}
			st.executeUpdate();
			
			retour=true;
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	public static boolean deleteSession(String key) {
		
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String delete = "DELETE FROM connection WHERE cle=\""+key+"\";";
			Statement st = cn.createStatement();
			
			st.executeUpdate(delete);
			
			retour=true;
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	
	public static boolean insertUser(String login, String psswd, String nom, String prenom){
		
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String insert = "INSERT INTO Users(login, psswd, surname, name) VALUES(?,?,?,?);";
			PreparedStatement st = cn.prepareStatement(insert);
			
			st.setString(1,login);
			st.setString(2, BCrypt.hashpw(psswd, BCrypt.gensalt()));
			st.setString(3, nom);
			st.setString(4, prenom);
			
			st.executeUpdate();
			
			retour=true;
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	
	public static boolean deleteAccount(String login) {
		
		boolean retour=false;
		try {
			
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String delete = "DELETE FROM Users WHERE login=\""+login+"\";";
			Statement st = cn.createStatement();
			
			st.executeUpdate(delete);
			
			retour=true;
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	public static boolean isConnected(String key){
		
		boolean connected=false;
		
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM connection WHERE cle=\""+ key +"\";";
			Statement st = cn.createStatement();
			st.executeQuery(query);
			
			ResultSet rs = st.getResultSet();
			
			if (rs.next()){
				
				long time = rs.getTimestamp("thedate").getTime();
				boolean root = rs.getBoolean("isroot");
				
				if(System.currentTimeMillis()-time<1800000  || root){
					connected=true;
				}
				
				
			}
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return connected;
	}
	
	
	public static JSONObject getUserInfo(int id) {
		
		JSONObject user=null;

		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM users WHERE id=\""+ id +"\";";
			Statement st = cn.createStatement();
			st.executeQuery(query);
			
			ResultSet rs = st.getResultSet();
	
			user = new JSONObject();
			if (rs.next()){
				
				user.put("login",rs.getString("login"));
				user.put("id",rs.getString("id"));
				user.put("name",rs.getString("name"));
				user.put("surname",rs.getString("surname"));
				user.put("followers",FriendTools.getNbFollowers(id));
				user.put("follows",FriendTools.getNbFollows(id));
				user.put("publications",MessageTools.getNbMessages(id));
			}
			
			st.close();
			cn.close();
			
			

		} catch (Exception e) {

			e.printStackTrace();
		}
		
		return user;
	}
	
	
	public static JSONObject searchUser(String search){
		
		JSONObject retour = new JSONObject();;
		List<JSONObject> users = new ArrayList<JSONObject>();
		
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT id, login, name, surname FROM Users  WHERE login like ?;";
			PreparedStatement st = cn.prepareStatement(query);
			search=search+"%";
			
			st.setString(1, search);

			ResultSet rs = st.executeQuery();
			
			while(rs.next()) {
				JSONObject el = new JSONObject();
				el.put("id",rs.getInt("id"));
				el.put("login",rs.getString("login"));
				
				users.add(el);
			}

			
			st.close();
			cn.close();
			
			retour.put("users", users);

		} catch (Exception e) {

			e.printStackTrace();
			
		}
		
		return retour;
	}
	
	
	

}
