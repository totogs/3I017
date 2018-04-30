
function Message(id,id_user,login,content,date,comments){

	this.id=id;
	this.id_user=id_user;
	this.login=login;
	this.content=content;
	this.date=date;

	if(typeof comments == undefined || comments==null){
		comments=[];
	}

	this.comments=comments;
}

Message.prototype.getHTML = function() {
	
	var s= "<div id=\"message_"+this.id+"\" class=\"message\">"+
			"<div class=\"login_message\" onclick=\"pageUser('"+this.login+"',"+this.id_user+")\">"+this.login+"</div>"+
			"<div class=\"text\">"+this.content+"</div>"+
			"<div class=\"date\">"+this.date+"</div><hr  width=\"80%\"/>";

	if(this.comments.length>0){
		s+='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle" onclick="developpeMessage('+this.id+')"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>'
	}else{
		s+='<svg width="0" height="0"></svg>';
	}

	s+='<span>'+this.comments.length+' comments</span>'+
		"<div class=\"comments\"></div>"+
		"<div class=\"newComment\">	<form name=\"new_comment_form\" id=\"new_comment_form\" action=\"javascript:(function(){})()\" onsubmit=\"newComment("+this.id+")\">"+
		"<input type=\"text\" id=\"new_"+this.id+"\" placeholder=\"New comment\"></form></div>"+			
		"</div>";

	return s;
}

function Commentaire( auteur, content, date){

	this.auteur=auteur;
	this.content=content;
	this.date=date;

}

Commentaire.prototype.getHTML=function(){

	return "<div><div class=\"auteur_comments\" onclick=\"pageUser("+this.auteur.login+","+this.auteur.id_user+")\">"+this.auteur.login+"</div>"+
				"<div class=\"text_comments\">"+this.content+"</div>"+
				"<div class=\"date\">"+this.date+"</div>"+
			"</div>";

}


function revival(key, value){


	if(value==null){
		return value;
	}


	if(value.auteur != undefined){
		return new Commentaire(value.id, value.auteur, value.content, value.date);
	}

	if(value.comments != undefined){
		var c = new Message(value.id, value.id_user, value.login, value.content, value.date, value.comments);
		return c;
	}
	else if(value.content != undefined){

		var c = new Message(value.id, value.id_user, value.login, value.content, value.date);
		return c; 
	}

	return value;
}


/*
$(function() {

	$('body').load(function() {
		console.log("ok");
        var sH = $(window).height();
        $('.aside').css('height', sH + 'px');
    }); 
    
    $(window).resize(function() {
        var sH = $(window).height();
        $('.aside').css('height', sH + 'px');
        
    }); 



});*/