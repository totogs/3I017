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
		
		JSONObject retour = null;
		List<DBObject> messages = new ArrayList<DBObject>();
		
		try {

			DBCollection col= Database.getCollection("message");
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("id_user",id_user);
			
			DBCursor c=col.find(dbo);
			c.sort(new BasicDBObject("id", -1));
			
			while(c.hasNext()){
				
				DBObject obj=c.next();
				
				messages.add(obj);
				
			}
			
			retour=new JSONObject();
			retour.put("messages", messages);
			
		} catch (UnknownHostException e) {	

			e.printStackTrace();

		}catch(JSONException e){

			e.printStackTrace();
		}
		
		return retour;
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
			DBCollection com= Database.getCollection("comment");
			DBCollection like= Database.getCollection("like");
			

			
			DBCursor c=col.find(query);
			c.sort(new BasicDBObject("id", -1));
			
			while(c.hasNext() ){
				
				DBObject obj=c.next();
				
				BasicDBObject query_id = new BasicDBObject();
				query_id.put("id_message", obj.get("id"));
				
				
				DBCursor comments = com.find(query_id);
				
				BasicDBList l_com = new BasicDBList();
				
				while(comments.hasNext() ){
					
					l_com.add(comments.next());
					
				}
				
				
				DBCursor likes = like.find(query_id);
				
				BasicDBList l_like = new BasicDBList();
				
				while(likes.hasNext() ){
					
					l_like.add(likes.next());
					
					
				}
				
				obj.put("comments", l_com);
				obj.put("likes", l_like);
				
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

			DBCollection col= Database.getCollection("comment");
			
			GregorianCalendar c=new GregorianCalendar();
			Date d=c.getTime();
			
			BasicDBObject dbo = new BasicDBObject();
			BasicDBObject dbauteur = new BasicDBObject();
			
			
			dbo.put("id_user",id_user);
			dbo.put("login", login);
			dbo.put("id_message",id_message);
			dbo.put("date", d);
			dbo.put("content", comment);
			
			col.insert(dbo);
			
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
	
	
    public static boolean deleteComment(int id_user, int id_message, int id){
		
		boolean retour = false;
		
		try {

			DBCollection col= Database.getCollection("comment");
			
			
			BasicDBObject searchcomment = new BasicDBObject();
			searchcomment.put("id_message", id_message);
			searchcomment.put("id", id);
			
			col.remove(searchcomment);
			
			
			retour = true;
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
    public static JSONObject insertLike(int id_user, String login, int id_message){
		
		JSONObject retour = null;
		
		try {

			DBCollection col= Database.getCollection("like");
			
			GregorianCalendar c=new GregorianCalendar();
			Date d=c.getTime();
			
			BasicDBObject dbo = new BasicDBObject();
			BasicDBObject dbauteur = new BasicDBObject();
			
			dbo.put("id_message", id_message);
			dbo.put("id_liker",id_user);
			dbo.put("login", login);
			dbo.put("date", d);

			
			col.insert(dbo);
			
			retour = new JSONObject();
			retour.put("like", dbo);
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		catch (JSONException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
    
    
    public static boolean deleteLike(int id_user, int id_message){
		
		boolean retour = false;
		
		try {

			DBCollection col= Database.getCollection("like");
			
			
			BasicDBObject searchlike = new BasicDBObject();
			List<BasicDBObject> list = new ArrayList<BasicDBObject>();
			
			list.add(new BasicDBObject("id_message", id_message));
			list.add(new BasicDBObject("id_liker", id_user));
			searchlike.put("$and", list);
			
			col.remove(searchlike);
		
			
			retour = true;
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	
	public static boolean deleteMessage(int id_user, int id_message){
		
		boolean retour=false;
		
		try {

			DBCollection col = Database.getCollection("message");
			DBCollection com= Database.getCollection("comment");
			DBCollection like= Database.getCollection("like");
			
			BasicDBObject searchmessage = new BasicDBObject();
			searchmessage.put("id", id_message);
			
			BasicDBObject query_id = new BasicDBObject();
			query_id.put("id_message", id_message);
			DBCursor c = com.find(query_id);
			
			while(c.hasNext() ){
				
				DBObject obj=c.next();
				deleteComment(((Integer)obj.get("id_user")).intValue(),((Integer)obj.get("id_message")).intValue(), ((Integer)obj.get("id")).intValue());
				
			}
			
			
			c = like.find(query_id);
			
			while(c.hasNext() ){
				
				DBObject obj=c.next();
				deleteLike(((Integer)obj.get("id_liker")).intValue(),((Integer)obj.get("id_message")).intValue());
				
			}
			
			col.remove(searchmessage);
			retour=true;
			
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
		
		return retour;
	}
	
	public static int getNbMessages(int id) {
		
		int n=0;
		
		try {

			DBCollection col= Database.getCollection("message");
			
			BasicDBObject dbo = new BasicDBObject();
			dbo.put("id_user",id);
			
			DBCursor c=col.find(dbo);
			
			while(c.hasNext()){
				
				n++;
				c.next();
				
			}
			
		} catch (UnknownHostException e) {	

			e.printStackTrace();

		}
		
		return n;
	}
	
	
	
}
