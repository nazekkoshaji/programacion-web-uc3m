
//Quitar los videos de la pagina de favoritos

$('.boton_quitar').on('click', function(){
	$(this).parent().remove();
});

// Añadir alt text después de cada .img
  // 1. Para cada elemento con class .img...
  // 2. Ejecuta la función para cada uno de ellos (for each)...
  // 3. Para añadir un elemento p después 
  // 5. El p contiene el texto alt de dicho elemento
$(".image").each(function() {
	$(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
})

// CSS shows/hides the alt text on hover

$('.video').hover(function() {
        $(this).find('.botonesvideo').show(100);
    },
    function () {
        $(this).find('.botonesvideo').hide(100);
    }
);
/*
$(document).ready(function() {
    var botones = $(".boton_anadir");
    for (var btn of botones) {
        btn.addEventListener('click', function() {
        	if($(this).siblings(".image") && 
        		localStorage ) {
        		localStorage.setItem("videos", $(this).siblings(".image"));
        		alert("imagen guardada en localstorage")
        	}
        })
    }
});
/*Mostrar el pop up menu.
	Con la función animate y width: toggle indicamos que cada vez que precionamos el botón del menú
	el pop ul se desliza a la derecha al mostrarse y a la izquierda al cerrarse, 
	o sea el toggle se aplica a su anchura.*/
$(document).ready(function(){
	$("#menu_icon").click(function(){
		$("#menu_popup").animate({
			width: 'toggle'
		});
	});
})

/*Ocultar el pop up del menu si el botón lo ha sido precionado pero la pantalla se hace más grnade*/
HideMenu();
$(window).resize(function(){
	HideMenu();
});

function HideMenu(){
	if (window.innerWidth <= 1242) {
        $("#menu_popup").hide(1500);
    }
}	

/*En la segunda funcion indicamos que queremos que solo cuando el ancho de la pantalla
	es menor que 767px (que son los píxeles que en el css hemos puesto para señalar cuando
	queremos que se oculta el menú vertical inicial y se muestra el boton para llamar a las categoías)
	que entonces queremos que al cerrar el popup de las categorías que de nuevo aparezca el boton categorías.
	Si el tamaño de la pantalla es mayor que estos 767px, al cerrar el popup el boton no aparece de nuevo porque
	ya aparece el menú vertical inicial.*/
$(document).ready(function(){
	$("#boton_categorias").click(function(){
		$("#popup_categorias").animate({
			width: 'toggle'
		});
		$("#boton_categorias").hide();
	});
})

$(document).ready(function(){
	$("#cerrar_categorias").click(function(){
		$("#popup_categorias").hide(500);
		if ($(window).width() < 767) {
            $("#boton_categorias").show();
        }
	});
})

/* En la función anterior hemos indicado que no queremos 
	que el botón de categorías aparezca después de cerrar el popup de categorías
	si la pantalla tiene un tamaño mayor que 767px.
	El programa lo entiende como:
		- si la pantalla en menos de 767px myestro de nuevo el botón
		- si es mayor de lo indicado no lo muestro más. El botón aparecerá de nuevo solo
		si recargamos la página.
	Lo que queremos es después de ejecutar esta función, si volvemos a hacer la pantalla 
	más pequeña que de nuevo aparezca el botón.
	esto lo conseguimos con la función resize.*/

showMenu();
$(window).resize(function(){
	showMenu();
});

function showMenu(){
	if (window.innerWidth < 767) {
        $("#boton_categorias").show();
    }
}	

$(document).ready(function(){
	$("#search").click(function(){
		if ($(window).width() < 767) {
            $("#input").animate({
				width: 'toggle'
			});
        } else {
        	 $("#input").show();
        }
	});
})


//Mostrar el popup compartir
$(".share").on("click", function(){
	$("#popup_compartir").show();
});

//Cerrar el popup compartir
$("#cerrar_compartir").on("click", function(){
	$("#popup_compartir").hide();
});


//Mostrar el popup comentarios
$(".comentar").on("click", function(){
	$("#popup_comentario").show();
});

//Cerrar el popup comentarios
$("#cerrar_comentarios").on("click", function(){
	$("#popup_comentario").hide();
});


/*Cambiar el margen del contenedor de los vídeo para que cuando desaparezca el botón de las categorías
no queden espacios en blanco.*/
document.getElementById("boton_categorias").onclick = function() {
	document.getElementById("contenido").style.marginLeft = "0px";
}

document.getElementById("cerrar_categorias").onclick = function() {
	document.getElementById("contenido").style.marginLeft = "70px";
}


/*Mostrar el popup de usuario con informacion.
	Con la función animate y height: toggle indicamos que cada vez que precionamos el botón del menú
	el pop ul se desliza hacia abajo al mostrarse y hacia arriba al cerrarse, 
	o sea el toggle se aplica a su altura.*/

$(document).ready(function(){
	$("#usuario").click(function(){
		$("#popup_usuario").slideToggle("slow");
	});
})

//Quitar el cambio automático de los slides del carrusel
$(".carousel").carousel({
  interval: false,
});

//cerrar sesion//

document.getElementById("cerrar_sesion").onclick = function() {
	document.getElementById("popup_cerrar_sesion").style.display ="block";
}

document.getElementById("cerrar").onclick = function() {
	document.getElementById("popup_cerrar_sesion").style.display ="none";		
}

document.getElementById("boton_cancelar").onclick = function() {
	document.getElementById("popup_cerrar_sesion").style.display ="none";		
}

document.getElementById("boton_aceptar").onclick = function() {
	document.getElementById("popup_cerrar_sesion").innerHTML= window.location=('Pag_principal.html');
}

var nombreLS = localStorage.getItem("nombreUsuarioLS");
console.log(nombreLS);
  document.getElementById("nombre").innerHTML = nombreLS;


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
  	document.getElementById("usuario").src = "images/" + nombreimagen;
  	//aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
  };	

function irAeditar() {
	window.location.href="seleccionaPerfil.html";
}

/*
document.getElementById("fyq").onclick= function (){
	window.location.href = "ver.html";
}
*/

//ir al modo infantil//

function irInfantil(){
  window.location.href="Pagina_inicio_infantil2.html";
}

function verContenido(){
	window.location.href = "contenido.html";
}

// añadir comentario

function anadirComentario() {
	//si el usuario no teclea nada, no puede enviar comentarios
	if(document.getElementById("comment_box").value == "") {
            return false;
    } else {
		/*Creamos un nuevlo elemento li que queremos añadir a la lista existe de comentarios que tenemos.
		Este elemento va a contener el nombre de la persona que hace el comentario y el texto del comentario*/
	    var li = document.createElement("li");
	   


	    /*Creamos un nuevo elemento span donde queremos que aparezca solo el nombre 
	    de la persona que está escribiendo el comentario.
	    De esta manera podremos añadir estilos solo a este elemento, es este casoo queremos que el nombre
	    salga en negrita, tal como los nombres de las demás personas que han comentado.*/
	    var nombre = document.createElement("SPAN");

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
		  	document.getElementById("usuario").src = "images/" + nombreimagen;
		  	//aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
		  };	


		var image = document.createElement("img");
		if (imagenguardada != null 
	  		&& imagenguardada != "undefined"){
		  	//alert(imagenguardada);
		  	var nombreimagen = imagenguardada.split("\\").pop(); 
		  	
		  	image.src = "images/" + nombreimagen;
		  	//aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
		  };	


		nombre.appendChild(image);
		image.setAttribute("class", "user_comment");

		/*Queremos que en el span que hemos creado aparezca el nombre con el cual la persona se ha registrado 
	    previamente */
	    var NombreLS = localStorage.getItem('nombreUsuarioLS');
	    n = document.createTextNode(NombreLS + ':' + ' ');
	    nombre.appendChild(n);
	    nombre.style.fontWeight = 'bold';
	    li.appendChild(nombre);

	    /*Ahora tenemos que añadir el segundo elemento de nuestra lista, o sea, el nuevo comentario que escribe el usuario.
	    1. Creamos la variable "commentBoxValue" para coger el valor del elemento con id=comment_box. Esto corresponde al elemento input del HTML
	    donde el usuario podrá escribir su comentario.
	    2. Creamos la variable "text" para crear el nodo del texto que va a contener la variable "li" y ponemos ahí la variable commentBoxValue.
	    3. Por último añadimos la variable "text" al elemento "li"*/
		var commentBoxValue= document.getElementById("comment_box").value;
	    var text = document.createTextNode(commentBoxValue);
	    li.appendChild(text);

		var borrar  = document.createElement("button");
		borrar.textContent = "BORRAR";
		li.appendChild(borrar);
		borrar.setAttribute("class", "borrar_comentario");
		borrar.addEventListener('click', function() {
			this.parentElement.remove();
		})
		/*Por último, añadimos el nuevo elemento "li" a la lista de comentarios existente y le 
		añadimos el atributo "contenteditable" = true para hacer posible la edición del nuevo comentario*/
	    
		
	    document.getElementById("comentarios").appendChild(li);
		li.setAttribute("contenteditable", true);
		li.setAttribute("class", "nuevo_comentario");
		document.getElementById("comment_box").value = '';

		/*var comentarios = $(".nuevo_comentario");
		window.addEventListener('load', function() {
			if($(this).siblings("#comment_box") && localStorage ) {
			    window.localStorage.setItem("comentariosLS", $(this).siblings("#comment_box"));
			    alert("comentario guardado en localstorage");
			}
		})*/

	}
};


//Guardar favoritos

let saveFavourites = function(favourite){
	const favourites = getFavourites();

	favourites.push(favourite);

		//add the new array to localStorage
	localStorage.setItem("videosFavoritos", JSON.stringify(favourites));
}

let getFavourites = function() {
	let favourites;

	if (localStorage.getItem("videosFavoritos") === null) {
		favourites = [];
	} else {
		favourites = JSON.parse(localStorage.getItem("videosFavoritos"));
	}
	return favourites;
}

let displayFavourites = function(added_to_favourites) {
	const favouritesList = document.querySelector("#ultimos_guardados");

	added_to_favourites.forEach(favourite => {
		const li = document.createElement("li");
		li.innerHTML = `
			<img src="${favourite.image}" alt="${favourite.name}">
			<button class="boton_quitar"><i class="fa fa-minus" title="Quitar de Mis favoritos"></i></button>
			<div class="botonesvideo">
				<button class="share"><i class="fa fa-share"></i></button>
				<button class="comentar"><i class="fa fa-comment"></i></button>
			</div>
		`;

		favouritesList.appendChild(li);
	});
}


$('.boton_anadir').on('click', function () {
	
		if (this.classList.contains("is_favourite")) {
			//remove the class
			this.classList.remove("is_favourite");
			this.innerHTML = "<i class=\"fa fa-plus\" title=\"Añadir a Mis favoritos\">";
		} else {
			this.classList.add("is_favourite");
			this.innerHTML = "<i class=\"fa fa-minus\" title=\"Quitar de Mis favoritos\">";
		}

		//get info
		const favouritesBody = this.parentElement;
		
		const favouritesInfo = {
			id: this.dataset.id,
			name: favouritesBody.querySelector(".alt").textContent,
			image: favouritesBody.querySelector(".image").src
		}

		//console.log(favouritesInfo);

		//add to storage
		saveFavourites(favouritesInfo);
});


function documentReady(){
	const favouritesList = document.querySelector("#ultimos_guardados");
	if (favouritesList != null
		&& favouritesList != 'undefined'
		&& favouritesList != '') {
		//get the favourites from storage and display them
		const favourites = getFavourites();

		displayFavourites(added_to_favourites);
	}
}
