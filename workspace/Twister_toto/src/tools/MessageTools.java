package tools;

import java.net.UnknownHostException;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.bson.types.ObjectId;
import org.json.JSONException;
import org.json.JSONObject;

import com.mongodb.*;

import db.Database;

public class MessageTools {

	
	public static boolean insertMessage(int id_user, String message){
		
		boolean retour=false;
		
		try {

			DBCollection col = Database.getCollection("message");
			
			GregorianCalendar c=new GregorianCalendar();
			Date d=c.getTime();
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("id_user",id_user);
			dbo.put("date", d);
			dbo.put("content", message);
		
			col.insert(dbo);
			
			retour=true;
			
		} catch (UnknownHostException e) {
			
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
				System.out.println(obj.toString());
				
			}
			
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
			
		}catch(JSONException e){
			e.printStackTrace();
		}
		
		return messages;
	}
	
	public static JSONObject selectMessageFriend(int id_user){
		
		JSONObject messages = new JSONObject();
		
		try {
			
			List<BasicDBObject> list = FriendTools.listFriend(id_user);

			DBCollection col= Database.getCollection("message");
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("$or",list);
			
			DBCursor c=col.find(dbo);
			
			while(c.hasNext()){
				
				DBObject obj=c.next();
				

				messages.put("messages", obj);
				
				System.out.println(obj.toString());
				
			}
			
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		catch(JSONException e){
			e.printStackTrace();
		}
		
		return messages;
	}
	
	
	
	public static boolean insertComment(int id_user, ObjectId id_message, String comment){
		
		boolean retour=false;
		
		try {

			DBCollection col= Database.getCollection("message");
			
			GregorianCalendar c=new GregorianCalendar();
			Date d=c.getTime();
			
			BasicDBObject searchmessage = new BasicDBObject();
			searchmessage.put("_id", id_message);
			
			DBObject dbmessage = col.findOne(searchmessage);
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("id_user",id_user);
			dbo.put("date", d);
			dbo.put("content", comment);
			
			dbmessage.put("comments", dbo);
			
			col.update(searchmessage, dbmessage);
			
			retour=true;
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	
	public static boolean deleteMessage(int id_user, ObjectId id_message){
		
		boolean retour=false;
		
		try {

			DBCollection col = Database.getCollection("message");
			
			BasicDBObject searchmessage = new BasicDBObject();
			searchmessage.put("_id", id_message);
			
			col.remove(searchmessage);
			retour=true;
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	
	
}
