
var env;

function utilDB(){

	var localDB = [];

	var u1={"id":1,"login":"fianso"};
	var u2={"id":2,"login":"damso"};
	var u3={"id":3,"login":"lompal"};
	var u4={"id":4,"login":"niska"};
	var u5={"id":5,"login":"alkpote"};
	var u6={"id":6,"login":"vald"};
	var u7={"id":7,"login":"kalash kriminel"};



	var c1 = [];
	var c2 = [];
	var c3 = [];
	var c4 = [];

	c1[1]=new Commentaire(u2.id, u2.login, "ptdrrr", new Date());
	c1[2]=new Commentaire(u3.id, u3.login, "ahah", new Date());
	c1[3]=new Commentaire(u4.id, u4.login, "mdrrr", new Date());

	c2[1]=new Commentaire(u2.id, u2.login, "ptdrrr", new Date());
	c2[2]=new Commentaire(u3.id, u3.login, "ahah", new Date());
	c2[3]=new Commentaire(u4.id, u4.login, "mdrrr", new Date());

	c3[1]=new Commentaire(u2.id, u2.login, "ptdrrr", new Date());
	c3[2]=new Commentaire(u3.id, u3.login, "ahah", new Date());
	c3[3]=new Commentaire(u4.id, u4.login, "mdrrr", new Date());

	c4[1]=new Commentaire(u2.id, u2.login, "ptdrrr", new Date());
	c4[2]=new Commentaire(u3.id, u3.login, "ahah", new Date());
	c4[3]=new Commentaire(u4.id, u4.login, "mdrrr", new Date());

	localDB[1]=new Message(1,u1.id,u1.login, "Les riches tuent le temps et le temps tue les pauvres",new Date(),c1);
	localDB[2]=new Message(2,u1.id,u1.login, "Evidemment que ça finit mal sinon ça finirait jamais",new Date(),c2);
	localDB[3]=new Message(3,u1.id,u1.login, "J’suis pas responsable, j’suis influençable, même sa mère la juge m’a interdit de me voir",new Date(),c3);
	localDB[4]=new Message(4,u1.id,u1.login, "Personne ne m’a tendu la corde, Je descends de la potence en rappe",new Date(),c4);

	c1[1]=new Commentaire(u1.id, u1.login, "ptdrrr", new Date());
	c1[2]=new Commentaire(u4.id, u4.login, "ahah", new Date());
	c1[3]=new Commentaire(u5.id, u5.login, "mdrrr", new Date());

	c2[1]=new Commentaire(u1.id, u1.login, "ptdrrr", new Date());
	c2[2]=new Commentaire(u4.id, u4.login, "ahah", new Date());
	c2[3]=new Commentaire(u5.id, u5.login, "mdrrr", new Date());

	c3[1]=new Commentaire(u1.id, u1.login, "ptdrrr", new Date());
	c3[2]=new Commentaire(u4.id, u4.login, "ahah", new Date());
	c3[3]=new Commentaire(u5.id, u5.login, "mdrrr", new Date());

	c4[1]=new Commentaire(u1.id, u1.login, "ptdrrr", new Date());
	c4[2]=new Commentaire(u4.id, u4.login, "ahah", new Date());
	c4[3]=new Commentaire(u5.id, u5.login, "mdrrr", new Date());

	localDB[5]=new Message(5,u2.id,u2.login, "J'te vois comme Jay Z voit Beyoncé, une salope que je n'ai pas besoin de financer",new Date(),c1);
	localDB[6]=new Message(6,u2.id,u2.login, "Faux-cul j'étais comme un Allez L'OM scandé par un supporter parisien",new Date(),c2);
	localDB[7]=new Message(7,u2.id,u2.login, "Tu fumais pour fuire maintenant fuis pour fumer",new Date(),c3);
	localDB[8]=new Message(8,u2.id,u2.login, "J'me sens au dessus des autres comme une kippa",new Date(),c4);

	localDB[9]=new Message(9,u3.id,u3.login, "Je lui ai dit qu’elle était pas unique, ce soir elle dort avec sa fierté",new Date());
	localDB[10]=new Message(10,u3.id,u3.login, "Elle est douée mais elle est pas belle : elle va devoir convaincre son boss!",new Date());
	localDB[11]=new Message(11,u3.id,u3.login, "Mes ennemis vident leurs chargeurs mais ça me passe au-dessus comme Néo",new Date());
	localDB[12]=new Message(12,u3.id,u3.login, "Un gros mot qui dérape en coup d'poing, un bisou qui dérape en levrette",new Date());

	localDB[13]=new Message(13,u4.id,u4.login, "ici c’est la basse cour, c’est nous les coqs, les poulets on leur fait l’amour ",new Date());
	localDB[14]=new Message(14,u4.id,u4.login, "Tu veux faire la guerre, prévois des mouchoirs. C’est pas dans mon clan que ça va pleurer",new Date());
	localDB[15]=new Message(15,u4.id,u4.login, "Lunette teinté phare xéno vitre teinté pas le time",new Date());
	localDB[16]=new Message(16,u4.id,u4.login, "Depuis que je connais le glock mes ennemies ont perdu de la valeur !",new Date());

	localDB[17]=new Message(17,u5.id,u5.login, "J'ai pris en stop la dame blanche au virage, j'l'ai mis en cloque",new Date());
	localDB[18]=new Message(18,u5.id,u5.login, "C'est nous les rois de la trap, les trapezistes",new Date());
	localDB[19]=new Message(19,u5.id,u5.login, "J't'absorbe avec ma queue comme Cell",new Date());
	localDB[20]=new Message(20,u5.id,u5.login, "T'as rien d'attirant comme le corps d'une noich",new Date());

	localDB[21]=new Message(21,u6.id,u6.login, "petite chatte fais gaffe aux grosses voiture reste a la maison !",new Date());
	localDB[22]=new Message(22,u6.id,u6.login, "Je vais faire le milion sans chignon et sans serre-tete",new Date());
	localDB[23]=new Message(23,u6.id,u6.login, "Y’a plein d’trucs dans ton cul qui n’devrait pas y être comme matraque de CRS ",new Date());
	localDB[24]=new Message(24,u6.id,u6.login, "J’emmerde les ordres, j’aime pas les coloris du treillis C’est quoi l’pouvoir quand l’Président, c’est la plus Grande salope du pays ? Nan. Mira, petit pélican",new Date());

	localDB[25]=new Message(25,u7.id,u7.login, " Je suis albinos parce que j’suis né pour briller ",new Date());
	localDB[26]=new Message(26,u7.id,u7.login, "le rap francais meurt en silence, j’serai le coupable, ou le complice",new Date());
	localDB[27]=new Message(27,u7.id,u7.login, "Ça y est Donald Trump est passé, Marine Le Pen prend la confiance ",new Date());
	localDB[28]=new Message(28,u7.id,u7.login, "J’serai surement millionaire si niquer des mères était un métier",new Date());

	return localDB;
}


function init(){

	env=new Object();
	env.noConnection = true;
	env.id=6;
	env.login="vald";
	env.key="";


	var follows=[];

	follows[1] = new Set([2,3,4]);
	follows[2] = new Set([1,4,5]);
	follows[3] = new Set([1,6,7]);
	follows[4] = new Set([1,5,7]);
	follows[5] = new Set([3,6,7]);
	follows[6] = new Set([1,2,3,4,5,7]);
	follows[7] = new Set([1,5,6]);

	env.follows=follows;

}


function MakeMainPanel(fromId, fromLogin, query){

	env.messages=[];

	if(fromId=="undefinded"){
		fromId=1;
	}

	env.fromId=fromId;
	env.fromLogin=fromLogin;
	console.log(env.fromLogin);
	env.query=query;

	var s="<div id=\"top_message\">";

	if(env.fromId<0){
		s+="<div id=\"title\">Actualité</div>";
	}
	else {

		s+="<div id=\"title\">"+env.fromLogin+"</div>";

		if(!env.follows[env.id].has(env.fromId)){

			s+="<div class=\"add\"><div>Follow</div><img src=\"../image/follow.png\" class=\"icon\" title=\"follow\" onclick=\"javascript.follow("+env.fromId+")\"></div>";
		}else{

			s+="<div class=\"add\"><div>Friends</div><img src=\"../image/everfollow.png\" class=\"icon\" title=\"follow\" onclick=\"javascript.unfollow("+env.fromId+")\"></div>";
		}
	}
	
	s+="</div>";

	s+="<div id=\"messages\"></div>";

	$(".message_list").append(s);

	env.messages=completeMessages(fromId, query);

	$.each(env.messages, function(index,message){
		$('#messages').append(message.getHTML());
	});


}

function getMessage(id){

	$.each(env.messages, function(index, message){
		if(message.id==id){
			return message;
		}
	});

	return null;
}

function completeMessages(fromId, query){

	if(!env.noConnection){
		
		$.ajax({
			type:"POST",
			url:"Twister_toto/ShowMessageFriends",

		})
	}
	else{
		return getFromLocalDb(fromId,1,20,10);	
	}
}


//fonctions de Raffraichissement de la page *************************
function refreshMessage(){
	if(env.query=="undefinded"){
		return;
	}

	if(!env.noConnection){
		$.ajax({
			type:"POST",
			url:"Twister_toto/ShowMessageFriends",
			data:"key="+env.key+"&query="+env.query+"env.from="+env.fromId+"&id_max=-1&id_min="+env.maxId+"&nb=-1",
			success:function(rep){refreshMessageResponse(rep);}
		})
	}
}

function refreshMessageResponse(rep){

	var tab=JSON.parse(rep,revival);

	for(var i=tab.length-1;i>=0;i--){
		var m=tab[i];

		$("#list_messages").prepend(m.getHTML());
		env.messages[m.id]=m;

		if(m.id>env.maxId){
			env.maxId=m.id;
		}

		if(env.minId<0 || (m.id<env.minId)){
			env.minId=m.id;
		}
	}
}


function newMessage(){

	var text=$("#new_message").val();

	if(!noConnection){

		$.ajax({
			type:"POST",
			url:"Twister_toto/AddMessage",
			data:"key="+env.key+"&text"+text,
			datatype:"json",
			success:function(rep){newMessagesResponse(rep);},

		})
	}
}


function newMessageResponse(rep){

}


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



function MakeConnexionPanel(){

	var s=	'<div class="top">'+
			'<div class="image">'+
				'<img src="../image/wetalk.png" width="100px" height="50px">'+
			'</div>'+
			'<div class="loginform">'+
				'<form onsubmit="connexion(this)" method="get">'+		
					'<div class="elform_log">'+	
					'<input type="text" name="login" placeholder="Login">'+
					'</div>'+
					'<div class="elform_log">'+
						'<input type="password" name="psswd" placeholder="Password">'+
					'</div>'+
					'<div class="elform_log">'+
						'<input type="checkbox" name="root" value="rooted"><label class="check_root" for="root">Stay connected ?</label>'+
					'</div>'+
					'<div class="elform_log">'+
						'<input class="button_login" type="submit" value="Connection" >'+
					'</div>'+
				'</form>'+
			'</div>'+
		'</div>'+

		'<div class="middle">'+


			'<div class="signinform">'+
				"You don't have an account and want to talk ?<br/>"+
				"Please create an account !"+
				'<form action="signin" method="get">'+
					'<div class="elform">'+
						'<input type="text" name="login" class="up_input lg_200"  placeholder="Login">'+
					'</div>'+
					'<div class="elform">'+
						'<input type="text" name="surname" id="surname" class="lg_200" placeholder="Surname">'+
					'</div>'+
					'<div class="elform">'+
						'<input type="text" name="name" id="name" class="lg_200" placeholder="Name">'+
					'</div>'+
					'<div class="elform">'+
						'<input type="password" name="psswd" class="low_input lg_200" placeholder="Password">'+
					'</div>'+
					'<div class="elform">'+
						'<input class="button" type="submit" value="Create account">'+
					'</div>'+
				'</form>'+
			'</div>'+
		'</div>'+

		'<div class="below">'+
			'<div class="information">'+
				'Created by<br/>'+
				'GOSSE-DUMESNIL Tony<br/>'+
				'BOURCIER Jules<br/>'+
			'</div>'+
		'</div>';

		$("body").html(s);

}


function MakeMessagePanel(){

	var s =	'<div class="top">'+
			'<div class="image">'+
				'<img src="../image/wetalk.png" width="100px" height="50px">'+
			'</div>'+
			'<div class="browser">'+
				'<div class="research">'+
					'<input type="search" name="research" placeholder="Research">'+
				'</div>'+
				'<div class="actuality">'+
					'<img id="actu_icon" class="icon" src="../image/actu.png" >'+
				'</div>'+
				'<div class="user">'+
					'<span id="username"></span>'+
					'<ul>'+
						'<li><a href="#">Your profile</a></li>'+
						'<li><a href="#">Edit profile</a></li>'+
						'<li><a href="#">Disconnect</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</div>'+

		'<div class="middle">'+

			'<div class="aside">'+

				'<h3>Friends</h3>'+

			'</div>'+

			'<div class="message_list">'+
					

			'</div>'+
		'</div>';

	$("body").html(s);
}




function connecte(login,password){

	console.log("connecte "+login+" "+password+"\n");
	var id_user=6;
	var key="";
	var login="Vald";
	
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


	if(rep.error=="undefinded"){
	
		env.key = rep.key;
		env.id=rep.id;
		env.login=rep.login;
		env.follows=new Set();
		
		for(var i=0;i<rep.follows.length;i++){
			env.follows.add(rep.follows[i]);
		}
		
		if(env.noConnection){
			
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


//Fonctions d'enregistrement de compte ***********************************

function enregistrement(nom,prenom,login,password){

	if(!noConnection){
		$.ajax({
			type:"POST",
			url:"Twister_toto/CreateUser",
			data:"prenom="+prenom+"&nom="+nom+"&login="+login+"&psswd="+password,
			datatype:"json",
			success:function(rep){responseEnregistre(rep);},

		});

	}
}

//Fonctions d'affichage et d'ajout de commentaire***********************

function developpeMessage(id){

	var m=getMessage(id);
	var el=$("#message_"+id+" .comments");
	
	if(m!=null){
		for(var i=0;i<m.comments.length;i++){
			var c=m.comments[i];
			el.append(c.getHTML());
		}
	}
	el=$("#message_"+id+" .newComment");
	
	s="<form name=\"new_comment_form\" id=\"new_comment_form\" action=\"func_new_comment("+id+")\">"+
	"<input type=\"text\" id=\"new_"+id+"\" placeholder=\"New comments\">"+
	"</form>";
	
	el.append(s);
	
	$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><circle cx="12" cy="12" r="10"  onclick="replieMessage('+id+')"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>');
}



function replieMessage(id){

	var m=env.messages[id];
	var el = $("#message_"+id+" .comments");
	
	el.html(" ");
	
	$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle" onclick="developpeMessage('+id+')"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>');
}


function newComment(id){

	var text = $("#new_"+id).value;
	
	if(!env.noConnection){
	
	}
	else{
	
		newComment_response(id,JSON.Stringify(new Commentaire(env.messages[id],comments.length+1,{"id":env.id,"login":env.login},text,new Date())));
	}
}



function newComment_response(id,rep){

	var com=JSON.parse(rep,revival);
	
	if(com!="undefinded" && com.erreur=="undefinded"){
		var el = $("#message_"+id+" .comments");
		el.append(com.getHTML());
		env.messages[id].comments.push(com);
		
		if(env.noConnection){
			
			localdb[id]=env.messages[id];
		}
		
	}
	else{
	
		alert(com.error);
	}
}


function performPictureSubmit(){

	var formData=new FormData();
	formData.append("key",env.key);
	formData.append(env.id+" picture",$("#sfile")[0].files[0]);

	$.ajax({
		type:"POST",
		url:"Twister_toto/UploadPicture",
		data:formData,
		processData:false,
		contentType:false,
		datatype:"json",

	})

}



function getFromLocalDb(from, idMin, idMax, nbMax){

	var messages = utilDB();
	messages.reverse();

	var newliste = [];
	var cpt=0;

	if(from!=-1 && idMax!=-1 && nbMax!=-1){
		
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin && message.id<=idMax && cpt<nbMax){
				newliste.push(message);
			}
		});
	}
	if(from==-1 && idMax!=-1 && nbMax!=-1){
		messages.forEach(function(message){
			if( message.id>=idMin && message.id<=idMax && cpt<nbMax){
				newliste.push(message);
			}
		});
	}
	if(from!=-1 && idMax==-1 && nbMax!=-1){
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin && cpt<nbMax){
				newliste.push(message);
			}
		});
	}
	if(from==-1 && idMax==-1 && nbMax!=-1){
		messages.forEach(function(message){
			if(message.id>=idMin && cpt<nbMax){
				newliste.push(message);
			}
		});
	}
	

	if(from!=-1 && idMax!=-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin && message.id<=idMax ){
				newliste.push(message);
			}
		});
	}
	if(from==-1 && idMax!=-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id>=idMin && message.id<=idMax ){
				newliste.push(message);
			}
		});
	}
	if(from!=-1 && idMax==-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin){
				newliste.push(message);
			}
		});
	}
	if(from==-1 && idMax==-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id>=idMin ){
				newliste.push(message);
			}
		});
	}

	return newliste;
}



