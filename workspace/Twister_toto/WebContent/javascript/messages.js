
function Message(id,id_user,login,text,date,comments){

	this.id=id;
	this.id_user=id_user;
	this.login=login;
	this.text=text;
	this.date=date;

	if(typeof comments == 'undefinded' || comments==null){
		comments=[];
	}

	this.comments=comments;
}

Message.prototype.getHTML = function() {
	
	return "<div id=\"message_"+this.id+"\" class=\"message\">"+
				"<div class=\"login_message\" onclick=\"pageUser("+this.login+")\">"+this.login+"</div>"+
				"<div class=\"text\">"+this.text+"</div>"+
				"<div class=\"date\">"+this.date+"</div>"+
				"<div class=\"comments\"></div>"+
			"</div>";
}

function Commentaire(id, auteur, text, date){

	this.id=id;
	this.auteur=auteur;
	this.text=text;
	this.date=date;

}

Commentaire.prototype.getHTML=function(){

	return "<div><div class=\"auteur_comments\" onclick=\"pageUser("+this.login+")\">"+this.auteur+"</div>"+
				"<div class=\"text_comments\">"+this.text+"</div>"+
				"<div class=\"date_comments\">"+this.date+"</div>"+
			"</div>";

}


function revival(key, value){

	if(value.comments!='undefinded'){
		var c = new Message(value.id, value.id_user, value.login, value.text, value.date, value.comments);
		return c;
	}
	else if(value.text != 'undefinded'){

		var c = new Message(value.id, value.login, value.text, value.date);
		return c; 
	}
}