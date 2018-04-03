function getMessage(id){

	$.each(env.messages, function(index, message){
		if(message.id==id){
			return message;
		}
	});

	return null;
}

function completeMessages(fromId, query){


	if(!env.noConnexion){
		
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
	if(env.query==undefined){
		return;
	}

	if(!env.noConnexion){
		$.ajax({
			type:"POST",
			url:"Twister_toto/ShowMessageFriends",
			data:"key="+env.key+"&query="+env.query+"env.from="+env.fromId+"&id_max=-1&id_min="+env.maxId+"&nb=-1",
			dataType:"json",
			success:function(rep){refreshMessageResponse(rep);},
			error:function(xhr,textstatus,error){alert(textstatus);}
		});
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

	if(!noConnexion){

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








//Fonctions d'affichage et d'ajout de commentaire***********************

function developpeMessage(id){

	var m=env.messages[id];
	var el=$("#message_"+id+" .comments");
	
	if(m!=null){
		
		$.each(m.comments, function(index,comments){
			
			if(comments!=undefined)
				el.append(comments.getHTML());
		})
	}
	
	$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle" onclick="replieMessage('+id+')"><circle cx="12" cy="12" r="10"  ></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>');
}



function replieMessage(id){

	var m=env.messages[id];
	var el = $("#message_"+id+" .comments");
	console.log("ok");
	el.replaceWith(" ");
	el.new
	
	$("#message_"+id+" svg").replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle" onclick="developpeMessage('+id+')"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>');
}


function newComment(id){

	var text = $("#new_"+id).value;
	
	if(!env.noConnexion){
	
	}
	else{
	
		newComment_response(id,JSON.Stringify(new Commentaire(env.messages[id],comments.length+1,{"id":env.id,"login":env.login},text,new Date())));
	}
}



function newComment_response(id,rep){

	var com=JSON.parse(rep,revival);
	
	if(com!=undefined && com.erreur==undefined){
		var el = $("#message_"+id+" .comments");
		el.append(com.getHTML());
		env.messages[id].comments.push(com);
		
		if(env.noConnexion){
			
			localdb[id]=env.messages[id];
		}
		
	}
	else{
	
		alert(com.error);
	}
}
