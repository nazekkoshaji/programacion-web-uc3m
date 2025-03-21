
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


document.getElementById("cerrar_sesion").onclick = function() {
	document.getElementById("popup_cerrar_sesion").style.display ="block";
}

document.getElementById("cerrar").onclick = function() {
	document.getElementById("popup_cerrar_sesion").style.display ="none";		
}

document.getElementById("boton_cancelar").onclick = function() {
	document.getElementById("popup_cerrar_sesion").style.display ="none";		
}

var nombreLS = localStorage.getItem("nombreUsuarioLS");
console.log(nombreLS);
  document.getElementById("nombre3").innerHTML = nombreLS;


var imagenguardada= localStorage.getItem("fotoBoton")
  	if (imagenguardada != null 
  		&& imagenguardada != "undefined"){
  	//alert(imagenguardada);
  	var nombreimagen = imagenguardada.split("\\").pop(); 
  	/*Una particularidad de esta función, es que tenemos que "recortar" el 
  	nombre entero de la ruta de la imágen, para que únicamente se almacene
  	el nombre de la imagen con su extensión, y así poder hacer de forma 
  	correcta el cambio de src en la función*/ 
  	//alert(nombreimagen)
  	document.getElementById("usuario3").src = "images/" + nombreimagen;
  	//aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
  };	

function irAeditar() {
	window.location.href="seleccionaPerfil.html";
}

function irAinfantil() {
	window.location.href="Pagina_inicio_infantil2.html";
}

/*

var links = $(".categoria");
links.click(function() {
	links.css("background-color", "#DC4B45");
	links.css("font-size", "17px");
	links.css("box-shadow", "none");

	$(this).css("background-color", "#6B170E");
	$(this).css("font-size", "19px");
	$(this).css("box-shadow", "2px 2px 5px rgba(0,0,0,0.4)")
});



document.getElementById("tendencias").onclick =function() {
	document.getElementById("titulo_inicio").innerHTML = "Tendencias";
	document.getElementById("videos").style.display = "none";
	document.getElementById("tendencias_carousel").style.display = "block";

	document.getElementById("lo_nuevo").style.display = "none";

}

document.getElementById("nuevo").onclick =function() {
	document.getElementById("titulo_inicio").innerHTML = "Lo nuevo";
	document.getElementById("videos").style.display = "none";
	document.getElementById("lo_nuevo").style.display = "block";

	document.getElementById("tendencias_carousel").style.display = "none";
}

*/