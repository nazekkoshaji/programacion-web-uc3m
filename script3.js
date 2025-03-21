
var nombreLS = localStorage.getItem("nombreUsuarioLS");
console.log(nombreLS);
	document.getElementById("nombre1").innerHTML = nombreLS;

var nombre2LS = localStorage.getItem("nombreUsuario2LS");
console.log(nombre2LS);
	document.getElementById("nombre2").innerHTML = nombre2LS;

/*FOTO DE USUARIO EN EL PERFIL:Es una función identica a la anterior,
solo que en este caso añadimos la foto seleccionada por el usuario como
imagen de perfil, y previamente almacenada en local storage*/
var imagenguardada = localStorage.getItem("fotoBoton")
  	if (imagenguardada != null 
  		&& imagenguardada != "undefined"){
  	//alert(imagenguardada);
  	var nombreimagen = imagenguardada.split("\\").pop(); 
  	/*Una particularidad de esta función, es que tenemos que "recortar" el 
  	nombre entero de la ruta de la imágen, para que únicamente se almacene
  	el nombre de la imagen con su extensión, y así poder hacer de forma 
  	correcta el cambio de src en la función*/ 
  	//alert(nombreimagen)
  	document.getElementById("perfil1").src = "images/" + nombreimagen;
  	//aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
  };	

var imagenguardada2 = localStorage.getItem("fotoBoton2")
  	if (imagenguardada2 != null 
  		&& imagenguardada2 != "undefined"){
  	//alert(imagenguardada);
  	var nombreimagen2 = imagenguardada2.split("\\").pop(); 
  	/*Una particularidad de esta función, es que tenemos que "recortar" el 
  	nombre entero de la ruta de la imágen, para que únicamente se almacene
  	el nombre de la imagen con su extensión, y así poder hacer de forma 
  	correcta el cambio de src en la función*/ 
  	//alert(nombreimagen)
  	document.getElementById("perfilinfantil").src = "images/" + nombreimagen2;
  	//aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
  };	