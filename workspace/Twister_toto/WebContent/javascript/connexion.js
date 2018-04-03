//fonctions de connexion au serveur *********************************
function connexion(formulaire){
	
	var login=formulaire.login.value;
	var pass=formulaire.psswd.value;
	var ok = verif_formulaire_connexion(login,pass);
	
	if(ok){
		connecte(login,pass);
	}
}

function verif_formulaire_connexion(login,password){
	
	if(login.length==0){
		func_erreur("Id required");
		return false;	
	}
	if(password.length==0){
		func_erreur("Password required");
		return false;
	}
	if(login.length>20){
		func_erreur("Id too long");
		return false;
	}
	
	return true;
}



function func_erreur(msg){

	var msg="<div id=\#msg_connexion\">"+msg+"</div>";
	var old_msg=$("#msg_connexion");
	
	if(old_msg.length==0){

		$(".loginform form").prepend(msg);
	}	
	else{
		old_msg.replaceWith(msg);
	}
	
	
}






function connecte(login,password){

	console.log("connecte "+login+" "+password+"\n");
	var id_user=6;
	var key="";
	

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"Twister/login",
			data:"login="+login+"&password="+password,
			succes:function(rep){responseConnexion(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{

		responseConnexion({"key":key,"id":id_user,"login":login,"follows":[1,2,3,4,5,7]});
	}

}



function responseConnexion(rep){


	if(rep.error==undefined){
	
		env.key = rep.key;
		env.id=rep.id;
		env.login=rep.login;
		env.follows=new Set();
		
		for(var i=0;i<rep.follows.length;i++){
			env.follows.add(rep.follows[i]);
		}
		
		if(env.noConnexion){
			
			env.follows[rep.id]=new Set();
			
			for(var i=0;i<rep.follows.length;i++){
				env.follows[rep.id].add(rep.follows[i]);
			}
			
		}
		
		MakeMessagePanel();
		$('#username').html(env.login);
		MakeMainPanel(-1,"",env.key);
	}
	else{
	
		func_erreur(rep.erreur);
	}
}