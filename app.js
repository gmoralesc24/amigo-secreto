// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo').value.trim();
    if (inputNombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        listaAmigos.push(inputNombre);
        actualizarLista();
        document.getElementById('amigo').value = ""; // Limpiar el campo
    }
}

// Función para actualizar la lista visible
function actualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";
    listaAmigos.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres para realizar el sorteo.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    }
}
