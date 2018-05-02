function MakeConnexionPanel(){

	var s=	'<div class="top">'+
			'<div class="image">'+
				'<img src="./image/wetalk.png" width="100px" height="50px">'+
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
				'<form action="javascript:(function(){})()" onsubmit="enregistrement(this)" method="get">'+
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


function MakeMainPanel(){

	var s =	'<div class="top">'+
			'<div class="image">'+
				'<img src="./image/wetalk.png" width="100px" height="50px">'+
			'</div>'+
			'<div class="browser">'+
				'<div class="research">'+
					'<input id="searchinput" onkeyup="getUsersSearch(this);"  type="search" name="research" placeholder="Research">'+
					'<ul></ul>'+
				'</div>'+
				'<div class="actuality">'+
					'<img id="actu_icon" class="icon" src="./image/actu.png" width="50px" height="50px" onclick="pageActualite()">'+
				'</div>'+
				'<div class="user">'+
					'<div id="username"></div>'+
					'<ul>'+
						'<li><a href="#" onclick="pageUser(\''+env.login+'\','+env.id+')">Your profile</a></li>'+
						'<li><a href="#" onclick="makeDeleteAccount()">Delete account</a></li>'+
						'<li><a href="#" onclick="deconnecte()">Disconnect</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</div>'+

		'<div class="middle2">'+

			'<div class="aside">'+

				'<h3>Friends</h3>'+
				'<ul id="list_friend"></ul>'+
			'</div>'+

			'<div class="message_list">'+
					

			'</div>'+
		'</div>';

	$("body").html(s);
	var sH = $(window).height();
    $('.aside').css('height', sH + 'px');
	getFriendList();
}

function clear(){
	$(".message_list").html("");
}



function MakeMessagePanel(fromId, fromLogin, query){

	env.messages=[];

	if(fromId==undefined){
		fromId=1;
	}

	env.fromId=fromId;
	env.fromLogin=fromLogin;
	console.log(env.fromLogin);
	env.query=query;

	var s="<div id=\"top_message\">";

	if(env.fromId<0){
		s+="<div id=\"title\">Actualité</div>"+
		"<div class=\"newMessage\">	<form name=\"new_message_form\" id=\"new_message_form\" action=\"javascript:(function(){})()\" onsubmit=\"newMessage(this)\">"+
	"<input type=\"text\" id=\"new_message\" placeholder=\"New message\"></form></div>"
	}
	else {

		getUserInfo(env.fromId);s
	}
	
	s+="</div>";

	s+="<div id=\"messages\"></div>";
	s+='<div id="load_next" onclick="refreshMessage()">load next messages</div>';

	$(".message_list").append(s);

	
	completeMessages(fromId, query);



}



function makeDeleteAccount(){

	var s=	'<div class="top">'+
			'<div class="image">'+
				'<img src="./image/wetalk.png" width="100px" height="50px">'+
			'</div>'+
		'</div>'+

		'<div class="middle1">'+


			'<div class="signinform">'+
				"Delete Account <br/>"+
				"Please create an account !"+
				'<form action="javascript:(function(){})()" onsubmit="deleteAccount(this)" method="get">'+

					'<div class="elform">'+	
					'<input type="text" name="login" class="up_input lg_200" placeholder="Login">'+
					'</div>'+
					'<div class="elform">'+
						'<input type="password" class="up_input lg_200" name="psswd" placeholder="Password">'+
					'</div>'+
					'<div class="elform">'+
						'<input class="button" class="up_input lg_200" type="submit" value="delete account">'+
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