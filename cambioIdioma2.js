document.getElementById('cambioIdiomaBtn').addEventListener('click', function () {
	var idioma = document.getElementById('select').value;
	localStorage.setItem('idiomaLS', idioma);
	if (idioma == 'espanol') {
		window.location.href = 'pag_principal.html';
	} else if (idioma == 'ingles') {
		window.location.href = 'ingles.html';
	}
});

document.getElementById("cerrar").onclick=function(){
document.getElementById("modalcontent").style.display="none";
};

document.getElementById("img1").onclick=function(){
document.getElementById("modalcontent").style.display="block";
};