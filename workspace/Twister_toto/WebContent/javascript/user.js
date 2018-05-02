function User(login, id, name, surname, publications, followers, follows){

	this.login=login;
	this.id=id;
	this.name=name;
	this.surname=surname;
	this.followers=followers;
	this.follows=follows;
	this.publications=publications;
}


User.prototype.getHTML = function() {

		var s="<div id=\"title\">"+this.login+"</div>";
		s+="<div><div id=\"info_user\"><span>Name: "+this.name+"</span><span>Surname: "+this.surname+"</span><span class=\"follows\">"+this.publications+" publications</span><span class=\"follows\">"+this.followers+" followers</span><span class=\"follows\">"+this.follows+" follows</span></div>";

		if(this.id!=env.id){
			console.log(env.follows);
			console.log(this.id);
			if(!env.follows.has(parseInt(this.id))){

				s+="<div class=\"add\"><div>Follow</div><div><img src=\"./image/follow.png\" class=\"icon\" title=\"follow\" onclick=\"javascript:follow("+this.id+")\"></div></div>";
			}else{

				s+="<div class=\"add\"><div>Unfollow</div><div><img src=\"./image/everfollow.png\" class=\"icon\" title=\"everfollow\" onclick=\"javascript:unfollow("+this.id+")\"></div></div>";
			}
		}

		s+="</div>";
		return s;
}


function getUserInfo(id){

	if(!env.noConnexion){
		$.ajax({
			type:"POST",
			url:"GetUserInfo",
			data:"id="+id+"&key="+env.key,
			dataType:"json",
			success:function(rep){userInfoResponse(JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
}


function userInfoResponse(rep){

	var user = JSON.parse(rep);

	if(user!=null && user.error==undefined){

		user=new User(user.login, user.id, user.name, user.surname, user.publications, user.followers, user.follows);

		$("#top_message").html(user.getHTML());
	}

}



function getUsersSearch(form){

	var query=form.value;
	console.log(query);
	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"SearchUser",
			data:"key="+env.key+"&query="+query,
			datatype:"json",
			success:function(rep){responseUserSearch(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
}

function responseUserSearch(rep){

	var users = JSON.parse(rep, revivalFriends);

	var liste=$(".research ul");
	liste.html("");


	if(users.error==undefined){
		
		$.each(users, function(index,user){
			
			liste.append(user.getHTML());
		});
		liste.show();
	}
	else{
		alert(users.error);
		if(users.code==5){
			deconnecte();
		}
	}
}


function deleteAccount(form){

	var login=form.login.value;
	var psswd=form.psswd.value;

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"DeleteUser",
			data:"login="+login+"&psswd="+psswd,
			datatype:"json",
			success:function(rep){responsedeleteUser(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}

}


function responsedeleteUser(rep){

	rep=JSON.parse(rep);

	if(rep.error==undefined){

		alert(rep.message);
		deconnecte();
	}
	else{
		alert(rep.error);
		deconnecte();
	}
}