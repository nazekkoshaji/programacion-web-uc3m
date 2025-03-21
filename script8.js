document.getElementById("t2").onclick=function(){
document.getElementById("modal1").style.display="none";
document.getElementById("modal2").style.display="block";
};

document.getElementById("t1").onclick=function(){
document.getElementById("modal2").style.display="none";
document.getElementById("modal1").style.display="block";
};

var contadorLikes = 0;
//document.getElementById("likes_2").innerHTML=contadorLikes2

document.getElementById("like").onclick=function(){

	contadorLikes= contadorLikes + 1


	localStorage.setItem("contadorLikesLS", contadorLikes);
	var likesLS = localStorage.getItem('contadorLikesLS'); 
	document.getElementById("likeNumero").innerHTML = likesLS;
	document.getElementById("likeNumero").style.display = "block";
	window.alert('No vayas tan rápido! Solo puedes indicar que te gusta cada contenido una vez!');
	console.log (likesLS)
};

/*Y hacemos lo mismo con el dislike*/
var contadorDLikes = 0;
//document.getElementById("likes_2").innerHTML=contadorLikes2

document.getElementById("dislike").onclick=function(){

	contadorDLikes= contadorDLikes + 1


	localStorage.setItem("contadorDLikesLS", contadorDLikes);
	var DlikesLS = localStorage.getItem('contadorDLikesLS'); 
	document.getElementById("dislikeNumero").innerHTML = DlikesLS;
	document.getElementById("dislikeNumero").style.display = "block";
	window.alert('No vayas tan rápido! Solo puedes indicar que no te gusta cada contenido una vez!');
	console.log (DlikesLS)
};

document.getElementById("bloque1").onclick=function(){
	window.location.href="ver.html"
}


document.getElementById("share").onclick=function(){
document.getElementById("cont_share").style.display="block";
};



document.getElementById("cont_share").onclick=function(){
document.getElementById("cont_share").style.display="none";
};