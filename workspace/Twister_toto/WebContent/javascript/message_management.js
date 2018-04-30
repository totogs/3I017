function getMessage(id){

	$.each(env.messages, function(index, message){
		if(message.id==id){
			return message;
		}
	});

	return null;
}

function completeMessages(fromId, query){

	env.messages=[];

	if(!env.noConnexion){
		
		$.ajax({
			type:"POST",
			url:"ShowMessageFriends",
			data:"key="+env.key+"&query="+query+"&from="+fromId+"&id_max=-1&id_min=-1&nb=10",
			dataType:"json",
			success:function(rep){messageResponse(JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{
		messageResponse(JSON.stringify(getFromLocalDb(fromId,-1,-1,10)));	
	}
}



//fonctions de Raffraichissement de la page *************************
function refreshMessage(){

	if(!env.noConnexion){
		$.ajax({
			type:"POST",
			url:"ShowMessageFriends",
			data:"key="+env.key+"&query="+env.query+"&from="+env.fromId+"&id_max="+env.minId+"&id_min=-1&nb=10",
			dataType:"json",
			success:function(rep){messageResponse(JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{
		messageResponse(JSON.stringify(getFromLocalDb(env.fromId, -1, env.minId, 10)));
	}
}


function messageResponse(rep){


	if(rep!=undefined){

		var tab=JSON.parse(rep,revival);
		console.log(tab);

		$.each(tab, function(index,message){
			env.messages[message.id]=message;
			if(message.id>env.maxId){
				env.maxId=message.id;
			}
			if((env.minId<0) || (message.id<env.minId)){
				env.minId=message.id;
			}
			$('#messages').append(message.getHTML());
		});
		console.log(env.minId+" "+env.maxId);
	}
	else{
		//nomessages
	}

}

function newMessage(formulaire){

	var text=formulaire.new_message.value;
	

	if(!env.noConnexion){

		$.ajax({
			type:"POST",
			url:"AddMessage",
			data:"key="+env.key+"&text="+text,
			datatype:"json",
			success:function(rep){newMessageResponse(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{

		newMessageResponse(JSON.stringify(new Message(localDB.length, env.id, env.login,text,new Date())));
	}
}


function newMessageResponse(rep){

	console.log(rep);
	var message=JSON.parse(rep, revival);

	
	if(message!=undefined && message.error==undefined){

		env.messages[message.id]=message;
		if(message.id>env.maxId){
			env.maxId=message.id;
		}
		if((env.minId<0) || (message.id<env.minId)){
			env.minId=message.id;
		}
		$('#messages').prepend(message.getHTML());
	}
	else{
	
		alert(message.error);
	}
}








//Fonctions d'affichage et d'ajout de commentaire***********************

function developpeMessage(id){

	var m=env.messages[id];
	var el=$("#message_"+id+" .comments");
	
	if(m!=null){
		
		$.each(m.comments, function(index,comments){
			
			if(comments!=undefined)
				el.append(comments.getHTML());
		});
	}
	
	$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle" onclick="replieMessage('+id+')"><circle cx="12" cy="12" r="10"  ></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>');
}



function replieMessage(id){

	var m=env.messages[id];
	var el = $("#message_"+id+" .comments");
	el.html(" ");

	
	$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle" onclick="developpeMessage('+id+')"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>');
}


function newComment(id){

	var text = $("#new_"+id).val();
	console.log(text);
	
	if(!env.noConnexion){
		
		$.ajax({
			type:"POST",
			url:"AddComment",
			data:"key="+env.key+"&text="+text+"&idMessage="+id,
			datatype:"json",
			success:function(rep){newCommentResponse(id,JSON.stringify(rep));},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
	}
	else{
	
		newCommentResponse(id,JSON.stringify(new Commentaire({"id":env.id,"login":env.login},text,new Date())));
	}
}



function newCommentResponse(id,rep){

	console.log(rep);
	var com=JSON.parse(rep);
	
	if(com!=undefined && com.error==undefined){
		com = new Commentaire(com.auteur, com.content, com.date)
		var el = $("#message_"+id+" .comments");
		el.append(com.getHTML());

		if(env.messages[id].comments.length==0){
			$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle" onclick="developpeMessage('+id+')"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>');
		}

		env.messages[id].comments.push(com);
		
		if(env.noConnexion){
			
			localdb[id]=env.messages[id];
		}
		
	}
	else{
	
		alert(com.error);
	}
}
