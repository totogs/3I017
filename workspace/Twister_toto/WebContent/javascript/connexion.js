//fonctions de connexion au serveur *********************************
function connexion(formulaire){
	
	var login=formulaire.login.value;
	var pass=formulaire.psswd.value;
	var isroot=formulaire.root.value;
	var ok = verif_formulaire_connexion(login,pass,isroot);
	
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

		$(".middle").prepend(msg);
	}	
	else{
		old_msg.replaceWith(msg);
	}
	
	
}






function connecte(login,password,isroot){

	console.log("connecte "+login+" "+password+"\n");
	var id_user=6;
	var key="";
	

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"LoginUser",
			data:"login="+login+"&psswd="+password+"&root="+isroot,
			datatype:"json",
			success:function(rep){responseConnexion(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{

		responseConnexion(JSON.stringify({"key":key,"id":id_user,"login":"Vald","follows":[1,2,3,4,5,7]}));
	}

}



function responseConnexion(rep){

	rep=JSON.parse(rep);

	if(rep.error==undefined){
	
		env.key = rep.key;
		env.id=rep.id;
		env.login=rep.login;
		env.follows=new Set();
		
		if(rep.follows!=undefined){
			for(var i=0;i<rep.follows.length;i++){
				env.follows.add(rep.follows[i]);
			}
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
	
		func_erreur(rep.error);
	}
}


function deconnecte(){

	console.log("deconnecte "+env.login+" "+env.id+"\n");

	

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"LogoutUser",
			data:"key="+env.key,
			datatype:"json",
			success:function(rep){responseDeconnexion(JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{

		responseDeconnexion(JSON.stringify({"key":key,"message":"Logout !"}));
	}

}

function responseDeconnexion(rep){

	rep=JSON.parse(rep);

	if(rep.error==undefined){
	
		alert(rep.message);
	}
	else{
	
		alert(rep.error);
	}

	init();
	MakeConnexionPanel();
}




//Fonctions d'enregistrement de compte ***********************************

function enregistrement(formulaire){

	var login=formulaire.login.value;
	var prenom=formulaire.surname.value;
	var nom=formulaire.name.value
	var pass=formulaire.psswd.value;

	var ok = verif_formulaire_enregistrement(login, prenom, nom, pass);

	if(ok){
		enregistre(nom, prenom, login, pass);
	}

}

function verif_formulaire_enregistrement(login, prenom, nom, password){

	if(login.length==0){
		func_erreur("Id required");
		return false;	
	}
	if(prenom.length==0){
		func_erreur("Surname required");
		return false;	
	}
	if(nom.length==0){
		func_erreur("Name required");
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
	if(prenom.length>30){
		func_erreur("Surname too long");
		return false;
	}
	
	if(nom.length>30){
		func_erreur("Name too long");
		return false;
	}
	
	
	return true;

}

function enregistre(nom,prenom,login,password){

	if(!env.noConnection){
		$.ajax({
			type:"POST",
			url:"CreateUser",
			data:"prenom="+prenom+"&nom="+nom+"&login="+login+"&psswd="+password,
			datatype:"json",
			success:function(rep){responseEnregistre(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});

	}
	else{

		
	}
}


function responseEnregistre(rep){

	rep=JSON.parse(rep);

	if(rep.error==undefined){
	
		alert(rep.message);
	}
	else{
	
		alert(rep.error);
	}
}


function pageUser(login, id){

	clear();
	MakeMainPanel(id, login, "");
}


function pageActualite(){
	clear();
	MakeMainPanel(-1, "", env.key);
}



function init(){

	env=new Object();
	env.noConnexion = false;
	env.id=6;
	env.login="vald";
	env.key="";
	env.maxId=0;
	env.minId=-1;
	env.messages=[];

	if(env.noConnexion){
		utilDB();
	}
	

}