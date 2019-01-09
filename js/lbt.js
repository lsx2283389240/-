var lbt=document.getElementById("lbt");
var is=lbt.getElementsByTagName("img");
var ls=lbt.getElementsByTagName("li");
var c=0;
setInterval(function(){
	c++;
	c=c==5?0:c;
	for(var i=0;i<is.length;i++){
		is[i].style.display="none";
		ls[i].style.backgroundColor="#C0C0C0"
	}
		is[c].style.display="block";
		ls[c].style.backgroundColor="salmon"
	
},2000)
