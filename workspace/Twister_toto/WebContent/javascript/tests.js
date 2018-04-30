
var env;
var localDB;

function utilDB(){

	localDB = [];

	var u1={"id_user":1,"login":"fianso"};
	var u2={"id_user":2,"login":"damso"};
	var u3={"id_user":3,"login":"lompal"};
	var u4={"id_user":4,"login":"niska"};
	var u5={"id_user":5,"login":"alkpote"};
	var u6={"id_user":6,"login":"vald"};
	var u7={"id_user":7,"login":"kalash kriminel"};



	var c1 = [];
	var c2 = [];
	var c3 = [];
	var c4 = [];

	c1[1]=new Commentaire(1, u2, "ptdrrr", new Date());
	c1[2]=new Commentaire(1, u3, "ahah", new Date());
	c1[3]=new Commentaire(1, u4, "mdrrr", new Date());

	c2[1]=new Commentaire(2, u2, "ptdrrr", new Date());
	c2[2]=new Commentaire(2, u3, "ahah", new Date());
	c2[3]=new Commentaire(2, u4, "mdrrr", new Date());

	c3[1]=new Commentaire(3, u2, "ptdrrr", new Date());
	c3[2]=new Commentaire(3, u3, "ahah", new Date());
	c3[3]=new Commentaire(3, u4, "mdrrr", new Date());

	c4[1]=new Commentaire(4, u2, "ptdrrr", new Date());
	c4[2]=new Commentaire(4, u3, "ahah", new Date());
	c4[3]=new Commentaire(4, u4, "mdrrr", new Date());

	localDB[1]=new Message(1,u1.id_user,u1.login, "Les riches tuent le temps et le temps tue les pauvres",new Date(),c1);
	localDB[2]=new Message(2,u1.id_user,u1.login, "Evidemment que ça finit mal sinon ça finirait jamais",new Date(),c2);
	localDB[3]=new Message(3,u1.id_user,u1.login, "J’suis pas responsable, j’suis influençable, même sa mère la juge m’a interdit de me voir",new Date(),c3);
	localDB[4]=new Message(4,u1.id_user,u1.login, "Personne ne m’a tendu la corde, Je descends de la potence en rappe",new Date(),c4);

	c1[1]=new Commentaire(5, u1, "ptdrrr", new Date());
	c1[2]=new Commentaire(5, u4, "ahah", new Date());
	c1[3]=new Commentaire(5, u5, "mdrrr", new Date());

	c2[1]=new Commentaire(6, u1, "ptdrrr", new Date());
	c2[2]=new Commentaire(6, u4, "ahah", new Date());
	c2[3]=new Commentaire(6, u5, "mdrrr", new Date());

	c3[1]=new Commentaire(7, u1, "ptdrrr", new Date());
	c3[2]=new Commentaire(7, u4, "ahah", new Date());
	c3[3]=new Commentaire(7, u5, "mdrrr", new Date());

	c4[1]=new Commentaire(8, u1, "ptdrrr", new Date());
	c4[2]=new Commentaire(8, u4, "ahah", new Date());
	c4[3]=new Commentaire(8, u5, "mdrrr", new Date());

	localDB[5]=new Message(5,u2.id_user,u2.login, "J'te vois comme Jay Z voit Beyoncé, une salope que je n'ai pas besoin de financer",new Date(),c1);
	localDB[6]=new Message(6,u2.id_user,u2.login, "Faux-cul j'étais comme un Allez L'OM scandé par un supporter parisien",new Date(),c2);
	localDB[7]=new Message(7,u2.id_user,u2.login, "Tu fumais pour fuire maintenant fuis pour fumer",new Date(),c3);
	localDB[8]=new Message(8,u2.id_user,u2.login, "J'me sens au dessus des autres comme une kippa",new Date(),c4);

	localDB[9]=new Message(9,u3.id_user,u3.login, "Je lui ai dit qu’elle était pas unique, ce soir elle dort avec sa fierté",new Date());
	localDB[10]=new Message(10,u3.id_user,u3.login, "Elle est douée mais elle est pas belle : elle va devoir convaincre son boss!",new Date());
	localDB[11]=new Message(11,u3.id_user,u3.login, "Mes ennemis vident leurs chargeurs mais ça me passe au-dessus comme Néo",new Date());
	localDB[12]=new Message(12,u3.id_user,u3.login, "Un gros mot qui dérape en coup d'poing, un bisou qui dérape en levrette",new Date());

	localDB[13]=new Message(13,u4.id_user,u4.login, "ici c’est la basse cour, c’est nous les coqs, les poulets on leur fait l’amour ",new Date());
	localDB[14]=new Message(14,u4.id_user,u4.login, "Tu veux faire la guerre, prévois des mouchoirs. C’est pas dans mon clan que ça va pleurer",new Date());
	localDB[15]=new Message(15,u4.id_user,u4.login, "Lunette teinté phare xéno vitre teinté pas le time",new Date());
	localDB[16]=new Message(16,u4.id_user,u4.login, "Depuis que je connais le glock mes ennemies ont perdu de la valeur !",new Date());

	localDB[17]=new Message(17,u5.id_user,u5.login, "J'ai pris en stop la dame blanche au virage, j'l'ai mis en cloque",new Date());
	localDB[18]=new Message(18,u5.id_user,u5.login, "C'est nous les rois de la trap, les trapezistes",new Date());
	localDB[19]=new Message(19,u5.id_user,u5.login, "J't'absorbe avec ma queue comme Cell",new Date());
	localDB[20]=new Message(20,u5.id_user,u5.login, "T'as rien d'attirant comme le corps d'une noich",new Date());

	localDB[21]=new Message(21,u6.id_user,u6.login, "petite chatte fais gaffe aux grosses voiture reste a la maison !",new Date());
	localDB[22]=new Message(22,u6.id_user,u6.login, "Je vais faire le milion sans chignon et sans serre-tete",new Date());
	localDB[23]=new Message(23,u6.id_user,u6.login, "Y’a plein d’trucs dans ton cul qui n’devrait pas y être comme matraque de CRS ",new Date());
	localDB[24]=new Message(24,u6.id_user,u6.login, "J’emmerde les ordres, j’aime pas les coloris du treillis C’est quoi l’pouvoir quand l’Président, c’est la plus Grande salope du pays ? Nan. Mira, petit pélican",new Date());

	localDB[25]=new Message(25,u7.id_user,u7.login, " Je suis albinos parce que j’suis né pour briller ",new Date());
	localDB[26]=new Message(26,u7.id_user,u7.login, "le rap francais meurt en silence, j’serai le coupable, ou le complice",new Date());
	localDB[27]=new Message(27,u7.id_user,u7.login, "Ça y est Donald Trump est passé, Marine Le Pen prend la confiance ",new Date());
	localDB[28]=new Message(28,u7.id_user,u7.login, "J’serai surement millionaire si niquer des mères était un métier",new Date());

	follows=[];

	follows[1] = new Set([2,3,4]);
	follows[2] = new Set([1,4,5]);
	follows[3] = new Set([1,6,7]);
	follows[4] = new Set([1,5,7]);
	follows[5] = new Set([3,6,7]);
	follows[6] = new Set([1,2,3,4,5,7]);
	follows[7] = new Set([1,5,6]);

	env.follows=follows;
}







function performPictureSubmit(){

	var formData=new FormData();
	formData.append("key",env.key);
	formData.append(env.id+" picture",$("#sfile")[0].files[0]);

	$.ajax({
		type:"POST",
		url:"UploadPicture",
		data:formData,
		processData:false,
		contentType:false,
		datatype:"json",

	})

}



function getFromLocalDb(from, idMin, idMax, nbMax){

	var messages = localDB.slice();
	messages.reverse();
	var newliste = [];
	var cpt=0;
	console.log(idMin+" "+idMax);

	if(from!=-1 && idMax!=-1 && nbMax!=-1){
		
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin && message.id<=idMax && cpt<nbMax){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	if(from==-1 && idMax!=-1 && nbMax!=-1){
		messages.forEach(function(message){
			if( message.id>=idMin && message.id<=idMax && cpt<nbMax){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	if(from!=-1 && idMax==-1 && nbMax!=-1){
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin && cpt<nbMax){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	if(from==-1 && idMax==-1 && nbMax!=-1){
		messages.forEach(function(message){
			if(message.id>=idMin && cpt<nbMax){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	

	if(from!=-1 && idMax!=-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin && message.id<=idMax ){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	if(from==-1 && idMax!=-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id>=idMin && message.id<=idMax ){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	if(from!=-1 && idMax==-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id_user==from && message.id>=idMin){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}
	if(from==-1 && idMax==-1 && nbMax==-1){
		messages.forEach(function(message){
			if(message.id>=idMin ){
				newliste.push(message);
				env.messages[message.id]=message;
				cpt++;
			}
		});
	}

	return newliste;
}



