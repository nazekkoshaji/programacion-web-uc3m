document.getElementById("reproducir").onclick=function(){
document.getElementById("reproducir").src="images/pausa.png";
};

document.getElementById("titulo").onclick=function(){
document.getElementById("modalcontent").style.display="none";
};

document.getElementById("subt").onclick=function(){
document.getElementById("modalcontent2").style.display="none";
};

document.getElementsByClassName("pausar").onclick=function(){
document.getElementsByClassName("pausar").src="images/reproducir.png";
};

function volver() {
	window.location.href="Pagina_series.html"
}

/*
function temporadas() {
	if($('#modal1').css('display') === 'block')
	{
	   document.getElementById("modal1").style.display="none";
	}
	else
	{
	    document.getElementById("modal1").style.display="block";
	}
}

function subtitulos() {
	if($('#modal2').css('display') === 'block')
	{
 		 document.getElementById("modal2").style.display="none";
	}
	else
	{
	     document.getElementById("modal2").style.display="block";
	}
}
*/