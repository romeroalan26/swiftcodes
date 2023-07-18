"use strict";
// var bank = "Silicon Valley Bank";
const sectionContainer = document.getElementById("container");

const lookUp = function () {
	const code = document.getElementById("codigo");
	console.log(code.value);

	$.ajax({
		method: "GET",
		url: `https://api.api-ninjas.com/v1/swiftcode?swift=${code.value}`,
		headers: { "X-Api-Key": "t9CkPnFp+0CtqKBJ80T1bw==OGzWrvKZkAOjiJcd" },
		contentType: "application/json",
		success: function (result) {
			const [resultado] = result;
			console.log(resultado);
			const html = `
   <p><b>Pais</b>: ${resultado.country}</p>
	<p><b>Direccion</b>: ${resultado.city}</p>
   `;
			sectionContainer.insertAdjacentHTML("beforeend", html);
		},
		error: function ajaxError(jqXHR) {
			console.error("Error: ", jqXHR.responseText);
		},
	});
};