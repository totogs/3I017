package tools;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.bson.types.ObjectId;
import org.json.JSONException;
import org.json.JSONObject;

import com.mongodb.*;
import com.mongodb.util.JSON;

import db.Database;

public class MessageTools {

	private static long idmax;
	
	public static JSONObject insertMessage(int id_user, String login, String message){
		
		JSONObject retour = null;
		
		try {

			DBCollection col = Database.getCollection("message");
			
			GregorianCalendar c=new GregorianCalendar();
			Date d=c.getTime();
			
			idmax = col.getCount();
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("id_user",id_user);
			dbo.put("id", idmax);
			dbo.put("login",login);
			dbo.put("date", d);
			dbo.put("content", message);
			dbo.put("comments", new ArrayList<BasicDBObject>());
		
			col.insert(dbo);
			
			retour=new JSONObject();
			retour.put("message", dbo);
			
			
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		catch(JSONException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	public static JSONObject selectMessageUser(int id_user){
		
		JSONObject messages = new JSONObject();
		
		try {

			DBCollection col= Database.getCollection("message");
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("id_user",id_user);
			
			DBCursor c=col.find(dbo);
			
			while(c.hasNext()){
				
				DBObject obj=c.next();
				
				messages.put("messages", obj);
				
				
			}
			
			
		} catch (UnknownHostException e) {	

			e.printStackTrace();

		}catch(JSONException e){

			e.printStackTrace();
		}
		
		return messages;
	}
	
	public static JSONObject selectMessageFriend(int id_user, int from, int min_id, int max_id, int nb_messages){
		
		JSONObject retour = null;
		List<DBObject> messages = new ArrayList<DBObject>();
		
		try {
			
			List<BasicDBObject> list;
			List<BasicDBObject> l_dbo = new ArrayList<BasicDBObject>();

			if(from==-1){
				list = FriendTools.listFriend(id_user);
				list.add(new BasicDBObject("id_user", id_user));
	
				l_dbo.add(new BasicDBObject("$or",list));

			}
			else{
				l_dbo.add(new BasicDBObject("id_user",from));
			}
			
			BasicDBObject inter = null;
			if(min_id>=0 && max_id==-1) {
				inter = new BasicDBObject("$gt", min_id);
			}
			else if(max_id>=0 && min_id==-1) {
				inter = new BasicDBObject("$lt", max_id);
			}
			else if(max_id>=0 && min_id>=0) {
				inter = new BasicDBObject("$gt", min_id).append("$lt", max_id);
			}
			
			BasicDBObject query = new BasicDBObject();
			
			if(inter!=null) {
				l_dbo.add(new BasicDBObject("id",inter));

			}
			query.put("$and", l_dbo);

			DBCollection col= Database.getCollection("message");
			
			
			DBCursor c=col.find(query);
			c.sort(new BasicDBObject("id", -1));
			
			while(c.hasNext() ){
				
				DBObject obj=c.next();
				
				
				messages.add(obj);
				
				if((nb_messages--)==0){
					break;
				}
				
			}
			
			retour=new JSONObject();
			retour.put("messages", messages);
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		catch(JSONException e){
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	
	
	public static JSONObject insertComment(int id_user, String login, int id_message, String comment){
		
		JSONObject retour = null;
		
		try {

			DBCollection col= Database.getCollection("message");
			
			GregorianCalendar c=new GregorianCalendar();
			Date d=c.getTime();
			
			BasicDBObject searchmessage = new BasicDBObject();
			searchmessage.put("id", id_message);
			
			DBObject dbmessage = col.findOne(searchmessage);
			
			BasicDBObject dbo = new BasicDBObject();
			BasicDBObject dbauteur = new BasicDBObject();
			
			dbauteur.put("id_user",id_user);
			dbauteur.put("login", login);
			dbo.put("auteur",dbauteur);
			dbo.put("date", d);
			dbo.put("content", comment);
			
			dbmessage.put("comments",dbo);
			
			col.update(searchmessage, dbmessage);
			
			retour = new JSONObject();
			retour.put("comment", dbo);
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		catch (JSONException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	
	public static boolean deleteMessage(int id_user, ObjectId id_message){
		
		boolean retour=false;
		
		try {

			DBCollection col = Database.getCollection("message");
			
			BasicDBObject searchmessage = new BasicDBObject();
			searchmessage.put("id", id_message);
			
			col.remove(searchmessage);
			retour=true;
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	
	
}
