"use strict";
//Seleccionando el contenedor donde tendremos Pais y Direccion
const sectionContainer = document.getElementById("container");

// Funcion para consumir la API y mistrar pais y direccion
const lookUp = function () {
	const code = document.getElementById("codigo");
	console.log(code.value);
	sectionContainer.textContent = " ";
	$.ajax({
		method: "GET",
		url: `https://api.api-ninjas.com/v1/swiftcode?swift=${code.value}`,
		headers: { "X-Api-Key": "t9CkPnFp+0CtqKBJ80T1bw==OGzWrvKZkAOjiJcd" },
		contentType: "application/json",
		success: function (result) {
			const [resultado] = result;
			console.log(resultado);
			const html = `
   <p><b>País</b>: ${resultado.country}</p>
	<p><b>Dirección</b>: ${resultado.city}</p>
   `;
			sectionContainer.insertAdjacentHTML("beforeend", html);
		},
		error: function ajaxError(jqXHR) {
			console.error("Error: ", jqXHR.responseText);
		},
	});
};

//Evento para ejecutar funcion lookUp() cuando se precione enter
document
	.getElementById("codigo")
	.addEventListener("keypress", function (event) {
		const key = event.key || event.keyCode;

		if (key === "Enter" || key === 13) {
			lookUp();
		}
	});
