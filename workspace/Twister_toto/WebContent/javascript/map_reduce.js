function map(){

	var text=this.text;
	var words=text.match("/\w+/g");
	var tf={};

	for(var i=0;i<words.length;i++){
		if(tf[words[i]]==null){
			tf[words[i]]=1;
		}
		else{
			tf[words[i]]+=1;
		}
	}

	for(w in tf){
		enit(w,1);
	}
}


function n(key, values){
	return values.length;
}


function map_inverse(){

	var text=this.text;
	var id=this.id;
	var words=text.match("/\w+/g");
	var tf={};

	for(var i=0;i<words.length;i++){

		if(tf[words[i]]==null){
			tf[words[i]]=1;
		}
		else{
			tf[words[i]]+=1;
		}
	}

	for(w in tf){

		var ret={};
		ret[id]=tf[w];
		enit(w,ret);
	}
}


function rsv(k,v){

	var df=Object.keys(v);
	for(d in v){
		v[d]=v[d]*Math.log(N/df);
	}

	return v;
}


function n2(key, values)