function friend(id,login){

	this.id=id;
	this.login=login;
}

friend.prototype.getHTML = function() {

	return "<li><div id=\"friends_"+this.id+"\" onclick=\"pageUser('"+this.login+"',"+this.id+")\">"+this.login+"</div></li>";
}


function getFriendList(){

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"SearchFriends",
			data:"key="+env.key,
			datatype:"json",
			success:function(rep){responseFriendList(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
}

function revivalFriends(key, value){

	if(value==null){
		return value;
	}
	console.log(value);

	if(value.login != undefined){
		return new friend(value.id, value.login);
	}

	return value;
}

function responseFriendList(rep){

	var friends = JSON.parse(rep, revivalFriends);
	console.log(friends);
	var liste=$("#list_friend");
	if(friends.error==undefined){
		
		$.each(friends, function(index,friend){
			
			liste.append(friend.getHTML());
		});
	}
	else{
		alert(friends.error);
	}
}


function unfollow(idfriend){

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"RemoveFriend",
			data:"key="+env.key+"&idFriend="+idfriend,
			datatype:"json",
			success:function(rep){responseUnfollow(idfriend, JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}

}


function responseUnfollow(id, rep){

	rep=JSON.parse(rep);

	if(rep.error==undefined){

		$("#add").replaceWith("<div class=\"add\"><div>Follow</div><img src=\"./image/follow.png\" class=\"icon\" title=\"follow\" onclick=\"follow("+id+")\"></div>");
	}
	else{
		alert(rep.error);
	}
}



function follow(idfriend){

	if(!env.noConnexion){
	
		$.ajax({
			type:"POST",
			url:"AddFriend",
			data:"key="+env.key+"&idFriend="+idfriend,
			datatype:"json",
			success:function(rep){responseFollow(idfriend, JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}

}

function responseFollow(id, rep){

	rep=JSON.parse(rep);

	if(rep.error==undefined){

		$("#add").replaceWith("<div class=\"add\"><div>Unfollow</div><img src=\"./image/everfollow.png\" class=\"icon\" title=\"follow\" onclick=\"unfollow("+env.fromId+")\"></div>");
	}
	else{
		alert(rep.error);
	}
}