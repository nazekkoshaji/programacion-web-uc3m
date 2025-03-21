
function guardarNombre(){
	var nombreUsuario = document.getElementById("nombre").value
	localStorage.setItem("nombreUsuarioLS" , nombreUsuario);
}

document.getElementById("subirFoto").oninput = function() {
  	//alert(document.getElementById("imagenasubir").value);
  	localStorage.setItem("fotoBoton", 
  											 document.getElementById("subirFoto").value);
  	var imagenguardada = localStorage.getItem("fotoBoton")
  	if (imagenguardada != null 
  										 && imagenguardada != "undefined");
  	//alert(imagenguardada);
  	var nombreimagen = imagenguardada.split("\\").pop();
  	//alert(nombreimagen)
  	document.getElementById("fotoBoton").src = "images/" + nombreimagen;
 
  	/*
  	Cuando se carga la página
  	1. Revisar si existe la variable imagen seleccionada en localStorage
  	2. Eliminar información adicional y dejar solo la imagen y su extension
  	3. Asignar a la etiqueta imagen el source de la imagen guardada y seleccionada
  	*/
  	var imagenguardada = localStorage.getItem("fotoBoton")
  	if (imagenguardada != null 
  										 && imagenguardada != "undefined");
  	//alert(imagenguardada);
  	var nombreimagen = imagenguardada.split("\\").pop();
  	//alert(nombreimagen)
  	document.getElementById("fotoBoton").src = "images/" + nombreimagen;
  }

function cargarIcono() {
	var imagenguardada3 = localStorage.getItem("fotoBoton")
  	if (imagenguardada3 != null 
  										 && imagenguardada3 != "undefined");
  	//alert(imagenguardada);
  	var nombreimagen3 = imagenguardada3.split("\\").pop();
  	//alert(nombreimagen)
  	document.getElementById("fotoBoton").src = "images/" + nombreimagen3;
  }
