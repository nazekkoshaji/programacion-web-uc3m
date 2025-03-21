function guardarNombre(){
	var nombreUsuario2 = document.getElementById("nombre").value
	localStorage.setItem("nombreUsuario2LS" , nombreUsuario2);
}

document.getElementById("subirFoto2").oninput = function() {
  	//alert(document.getElementById("imagenasubir").value);
  	localStorage.setItem("fotoBoton2", 
  											 document.getElementById("subirFoto2").value);
  	var imagenguardada2 = localStorage.getItem("fotoBoton2")
  	if (imagenguardada2 != null 
  										 && imagenguardada2 != "undefined");
  	//alert(imagenguardada);
  	var nombreimagen2 = imagenguardada2.split("\\").pop();
  	//alert(nombreimagen)
  	document.getElementById("fotoBoton2").src = "images/" + nombreimagen2;
 
  	/*
  	Cuando se carga la página
  	1. Revisar si existe la variable imagen seleccionada en localStorage
  	2. Eliminar información adicional y dejar solo la imagen y su extension
  	3. Asignar a la etiqueta imagen el source de la imagen guardada y seleccionada
  	*/
  	var imagenguardada2 = localStorage.getItem("fotoBoton2")
  	if (imagenguardada2 != null 
  										 && imagenguardada2 != "undefined");
  	//alert(imagenguardada);
  	var nombreimagen2 = imagenguardada2.split("\\").pop();
  	//alert(nombreimagen)
  	document.getElementById("fotoBoton2").src = "images/" + nombreimagen2;
  }

  function cargarIcono2() {
	var imagenguardada4 = localStorage.getItem("fotoBoton2")
  	if (imagenguardada4 != null 
  										 && imagenguardada4 != "undefined");
  	//alert(imagenguardada);
  	var nombreimagen4 = imagenguardada4.split("\\").pop();
  	//alert(nombreimagen)
  	document.getElementById("fotoBoton2").src = "images/" + nombreimagen4;
  }
