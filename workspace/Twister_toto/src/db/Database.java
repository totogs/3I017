
package db;
import java.net.UnknownHostException;
import java.sql.*;
import java.util.Collection;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.Mongo;
import db.DBStatic;


public class Database {
	
	private DataSource dataSource;
	
	
	public Database(String jndiname) throws SQLException{
		try{
			dataSource =(DataSource)new InitialContext().lookup("java:comp/env/"+jndiname);
		}catch(NamingException e){
			throw new SQLException(jndiname+" is missing in JNDI! : "+e.getMessage());
		}
	}
	
	public Connection getConnection() throws SQLException{
		return dataSource.getConnection();
	}
	
	
	private static Database database=null;
	public static Connection getMySQLConnection() throws SQLException{
		if (DBStatic.mysql_policy==false){
			return (DriverManager.getConnection("jdbc:mysql://"+ DBStatic.mysql_host +"/"+ DBStatic.mysql_db, DBStatic.mysql_username, DBStatic.mysql_password));
		}
		
		else{
		if (database==null){
			database = new Database("jdbc/db");
			}
			return (database.getConnection());
		}
	}
	
	
	public static DBCollection getCollection(String nom_Collection) throws UnknownHostException {
		Mongo m = new Mongo(DBStatic.mongo_url);
		DB db=m.getDB(DBStatic.mongo_db);
		DBCollection msg=db.getCollection(nom_Collection);
		return msg;
	}
}