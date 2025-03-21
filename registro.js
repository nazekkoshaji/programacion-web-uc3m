function saveFormData() {
	var nombreR = document.getElementById("NombreApellidos").value;
	localStorage.setItem("nombreRLS", nombreR);

	var apellidoR = document.getElementById("Apellidos").value;
	localStorage.setItem("apellidoRLS", apellidoR);

	var passwordR = document.getElementById("email2").value;
	localStorage.setItem("passwordRLS", passwordR);

	var correoR = document.getElementById("password2").value;
	localStorage.setItem("correoRLS", correoR);





};
