function Like(id,login,date){

	this.id=id;
	this.login=login;
	this.date=date;
}

Like.prototype.getHTML = function() {

	return "<li><div id=\"likers_"+this.id+"\" onclick=\"pageUser('"+this.login+"',"+this.id+")\">"+this.login+"</div></li>";
}




function like(id){

	if(!env.noConnexion){
		
		$.ajax({
			type:"POST",
			url:"AddLike",
			data:"key="+env.key+"&idMessage="+id,
			datatype:"json",
			success:function(rep){likeResponse(id,JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
}


function likeResponse(id, rep){

	var like=JSON.parse(rep);

	if(like!=undefined && like.error==undefined){

		like = new Like(like.id_liker, like.login, like.date);
		

		$("#message_"+id+" .heart").replaceWith(heart_like(id));


		env.messages[id].likes.push(like);

		$("#message_"+id+" .nblikes").html(env.messages[id].likes.length+' likes');
		
		
		if(env.noConnexion){
			
			localdb[id]=env.messages[id];
		}

	
		
	}
	else{
	
		alert(com.error);
		if(message.code==5){
			deconnecte();
		}
	}
}


function dislike(id){

	if(!env.noConnexion){
		
		$.ajax({
			type:"POST",
			url:"RemoveLike",
			data:"key="+env.key+"&idMessage="+id,
			datatype:"json",
			success:function(rep){dislikeResponse(id,JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
}


function dislikeResponse(id, rep){

	var message=JSON.parse(rep);
	
	if(message!=undefined && message.error==undefined){


		$("#message_"+id+" .heart").replaceWith(heart_dislike(id));


		remove_like(id);

		$("#message_"+id+" .nblikes").html(env.messages[id].likes.length+' likes');
		
		
		if(env.noConnexion){
			
			localdb[id]=env.messages[id];
		}
		
	}
	else{
	
		alert(message.error);
		if(message.code==5){
			deconnecte();
		}
	}
}


function remove_like(id){

	console.log(env.messages[id]);
	if(env.messages[id]!=null){
		$.each(env.messages[id].likes, function(index, like){

			console.log(like);

			if(like!=null && env.id==like.id){

				env.messages[id].likes.splice(index,1);
				return true;
			}

		});
	}

	return false;
}


function liked(id, likes){


	for(var i in likes){
		if(likes[i].id==id){
			return true;
		}
	}

	return false;
}





function heart_like(id){

	var s='<svg class="heart" onclick="dislike('+id+')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 492.719 492.719" style="enable-background:new 0 0 492.719 492.719;" xml:space="preserve" width="24" height="24"><g><g id="Icons_18_">'
		+'<path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569    c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178    l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553    C474.988,241.811,492.719,206.017,492.719,166.008z" fill=" rgba(254,60,22,1)"/>'
		+'</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g></svg>';

	return s;
}


function heart_dislike(id){

	var s='<svg class="heart" onclick="like('+id+')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 492.719 492.719" style="enable-background:new 0 0 492.719 492.719;" xml:space="preserve" width="24" height="24"><g><g id="Icons_18_">'
		+'<path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569    c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178    l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553    C474.988,241.811,492.719,206.017,492.719,166.008z" fill="#858585"/>'
		+'</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g></svg>';

	return s;
}