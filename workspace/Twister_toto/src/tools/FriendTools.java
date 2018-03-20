package tools;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import com.mongodb.BasicDBObject;

import db.Database;

public class FriendTools {
	
	
	public static boolean friendExists(int idUser, int idFriend){
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT * FROM Friend WHERE id_user=\""+ idUser +"\" and id_friend=\""+idFriend+"\";";
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
	

	public static boolean insertFriend(int idUser, int idFriend){
		
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String insert = "INSERT INTO Friend(id_user,id_friend,thedate) VALUES(?,?,NOW());";
			PreparedStatement st = cn.prepareStatement(insert);
			
			st.setInt(1, idUser);
			st.setInt(2, idFriend);
			st.executeUpdate();
			
			retour=true;
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	public static boolean removeFriend(int idUser, int idFriend){
		
		boolean retour=false;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String delete = "DELETE FROM Friend where id_user=? and id_friend=?;";
			PreparedStatement st = cn.prepareStatement(delete);
			
			st.setInt(1, idUser);
			st.setInt(2, idFriend);
			st.executeUpdate();
			
			retour=true;
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return retour;
	}
	
	public static JSONObject showFriend(int idUser){
		
		JSONObject friends = new JSONObject();
		
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT id, login, name, surname FROM Friend as f, Users as u  WHERE u.id=f.id_friend and f.id_user=?;";
			PreparedStatement st = cn.prepareStatement(query);
			
			st.setInt(1, idUser);
			ResultSet rs = st.executeQuery();
			
			while(rs.next()) {
				JSONObject el = new JSONObject();
				el.put("id",rs.getInt("id"));
				el.put("login",rs.getString("login"));
				el.put("name",rs.getString("name"));
				el.put("surname",rs.getString("surname"));
				
				System.out.println(rs.getString("name")+" "+rs.getString("surname"));
				friends.put("friends", el);
			}
			
			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return friends;
	}
	
	
	public static JSONObject searchFriend(int idUser, String search){
		
		JSONObject friends = new JSONObject();
		
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT id, login, name, surname FROM Friend as f, Users as u  WHERE u.id=f.id_friend and f.id_user=? and (name=? or surname=?);";
			PreparedStatement st = cn.prepareStatement(query);
			
			st.setInt(1, idUser);
			st.setString(2, search);
			st.setString(3, search);
			ResultSet rs = st.executeQuery();
			
			while(rs.next()) {
				JSONObject el = new JSONObject();
				el.put("id",rs.getInt("id"));
				el.put("login",rs.getString("login"));
				el.put("name",rs.getString("name"));
				el.put("surname",rs.getString("surname"));
				
				System.out.println(rs.getString("name")+" "+rs.getString("surname"));
				friends.put("friends", el);
			}

			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
			
		}
		
		return friends;
	}
	
	
	public static List<BasicDBObject> listFriend(int idUser){
		
		List<BasicDBObject> list = new ArrayList<BasicDBObject>(); 
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Connection cn = Database.getMySQLConnection();
			String query = "SELECT id_friend FROM Friend  WHERE id_user=? ;";
			PreparedStatement st = cn.prepareStatement(query);
			
			st.setInt(1, idUser);

			ResultSet rs = st.executeQuery();
			
			while(rs.next()) {
				
				BasicDBObject dbo = new BasicDBObject();
				dbo.put("id_user", rs.getInt("id_friend"));
				list.add(dbo);
			}

			
			st.close();
			cn.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
		return list;
	}
	
}
