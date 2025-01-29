// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Quitar espacios innecesarios

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Termina la función si no hay un nombre válido
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Mostrar mensaje en la consola (opcional, para pruebas)
    console.log("Amigo añadido:", nombre);
    console.log("Lista actual de amigos:", amigos);
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, añade al menos un amigo antes de realizar el sorteo.");
        return; // Termina la función si el array está vacío
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Mostrar en consola para pruebas (opcional)
    console.log("Amigo sorteado:", amigoSorteado);
}
