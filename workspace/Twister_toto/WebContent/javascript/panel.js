function MakeConnexionPanel(){

	var s=	'<div class="top">'+
			'<div class="image">'+
				'<img src="../image/wetalk.png" width="100px" height="50px">'+
			'</div>'+
			'<div class="loginform">'+
				'<form action="javascript:(function(){})()" onsubmit="connexion(this)" method="get">'+		
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

		'<div class="middle1">'+


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

		'<div class="middle2">'+

			'<div class="aside">'+

				'<h3>Friends</h3>'+

			'</div>'+

			'<div class="message_list">'+
					

			'</div>'+
		'</div>';

	$("body").html(s);
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

	

	$.each(completeMessages(fromId, query), function(index,message){
		$('#messages').append(message.getHTML());
	});


}