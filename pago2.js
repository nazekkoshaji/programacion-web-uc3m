


function saveFormData() {
	var Nombreapellidos = document.getElementById("NombreApellidos").value;
	localStorage.setItem("NombreApellidosLS", Nombreapellidos);

	var tarjeta = document.getElementById("tarjeta").value;
	localStorage.setItem("tarjetaLS", tarjeta);

	var cvv = document.getElementById("cvv").value;
	localStorage.setItem("cvvLS", cvv);
};

