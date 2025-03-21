
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

/*Mostrar y ocultar el pop up de las categorías.
  En la segunda funcion indicamos que queremos que solo cuando el ancho de la pantalla
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
    $("#popup_usuario").animate({
      height: 'toggle'
    });
  });
})

var nombre2LS = localStorage.getItem("nombreUsuario2LS");
console.log(nombre2LS);
  document.getElementById("nombreinfantil").innerHTML = nombre2LS;

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
    document.getElementById("usuario2").src = "images/" + nombreimagen2;
    //aquí además indicamos que la imagen añadida tiene que pertenecer a la carpeta images
  };  

  $(document).ready(function(){
  $("#usuario2").click(function(){
    $("#popup_usuario").slideToggle("slow");
  });
})

//Quitar el cambio automático de los slides del carrusel
$(".carousel").carousel({
  interval: false,
});

function irAnormal(){
  window.location.href="Pagina_inicio.html";
}

//Cerrar sesión//

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

//alertas para salir del modo infantil//

document.getElementById("tendencias").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
} 

document.getElementById("lo_nuevo").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}

document.getElementById("musicales").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("terror").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("comedia").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("drama").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("animacion").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("thriller").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("documentales").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}
document.getElementById("por_pais").onclick = function() {
  alert("Para salir del modo infantil, presione su usuario y clica en                         <<Salir del modo infantil>>");
}