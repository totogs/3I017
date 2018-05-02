
function Message(id,id_user,login,content,date,comments,likes){

	this.id=id;
	this.id_user=id_user;
	this.login=login;
	this.content=content;
	this.date=date;

	if(typeof comments == undefined || comments==null){
		comments=[];
	}
	if(typeof likes == undefined || likes==null){
		likes=[];
	}

	this.comments=comments;
	this.likes=likes;
}

Message.prototype.getHTML = function() {
	
	var s= "<div id=\"message_"+this.id+"\" class=\"message\">"+
			"<div class=\"login_message\" onclick=\"pageUser('"+this.login+"',"+this.id_user+")\">"+this.login+"</div>";

		if(this.id_user==env.id){
			s+='<img src="./image/trash.png" class="trash" onclick="deleteMessage('+this.id+')">';
		}

		s+=	"<div class=\"text\">"+this.content+"</div>"+
			"<div class=\"date\">"+this.date+"</div><hr  width=\"80%\"/>";


	if(liked(env.id, this.likes)){
		
		s+=heart_like(this.id);
	}
	else{
		s+=heart_dislike(this.id);
	}

	s+='<div class="nblikes">'+this.likes.length+' likes</div>'+
	    '<div class=\"likes\"></div>';

	if(this.comments.length>0){
		s+='<svg class="developpe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle" onclick="developpeMessage('+this.id+')"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>'
	}else{
		s+='<svg class="developpe" width="0" height="0"></svg>';
	}

	s+='<div class="nbcomments">'+this.comments.length+' comments</div>'+
		"<div class=\"comments\"></div>"+
		"<div class=\"newComment\">	<form name=\"new_comment_form\" id=\"new_comment_form\" action=\"javascript:(function(){})()\" onsubmit=\"newComment("+this.id+")\">"+
		"<input type=\"text\" id=\"new_"+this.id+"\" placeholder=\"New comment\"></form></div>"+			
		"</div>";

	return s;
}

function Commentaire( login, id_user, content, date){

	this.login=login;
	this.id_user=id_user;
	this.content=content;
	this.date=date;

}

Commentaire.prototype.getHTML=function(){

	return "<div><div class=\"auteur_comments\" onclick=\"pageUser("+this.login+","+this.id_user+")\">"+this.login+"</div>"+
				"<div class=\"text_comments\">"+this.content+"</div>"+
				"<div class=\"date\">"+this.date+"</div>"+
			"</div>";

}


function revival(key, value){


	if(value==null){
		return value;
	}


	if(value.id_liker != undefined){

		return new Like(value.id_liker, value.login, value.date);
	}

	if(value.auteur != undefined){
		return new Commentaire(value.login, value.id_user, value.content, value.date);
	}

	if(value.content != undefined){

		return new Message(value.id, value.id_user, value.login, value.content, value.date, value.comments, value.likes);
	}

	return value;
}



