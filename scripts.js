console.log("¡El script se ha cargado correctamente!");

// Funciones de encriptación y desencriptación
function encriptarTexto(texto) {

    let textoEncriptado = texto.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
        
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    
    return textoDesencriptado;
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
    const contenedorResultado = document.querySelector(".contenedor-resultado");
    const contenedorOcultar = document.querySelector(".contenedor-a-ocultar");
    const textoResultado = document.querySelector(".texto-resultado");
    const botonCopiar = document.querySelector(".boton-copiar");
    console.log("Desencriptar clickeado"); // Verifica si este log se imprime
    console.log("Encriptar clickeado"); // Verifica si este log se imprime     

    // Asegurarse de que el contenedor de "sin mensaje" esté oculto
    contenedorOcultar.classList.add("hidden");

    // Mostrar el contenedor de resultados
    contenedorResultado.classList.remove("hidden");

    // Colocar el texto en el contenedor de resultados
    textoResultado.textContent = texto;

    // Hacer visible el botón de copiar
    botonCopiar.classList.remove("hidden");
}


// Función para manejar el evento de encriptar
document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;

    if (inputText === "") {
        alert("Por favor ingresa un texto.");
    } else {
        const textoEncriptado = encriptarTexto(inputText);
        mostrarResultado(textoEncriptado);
    }
});

// Función para manejar el evento de desencriptar
document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;

    if (inputText === "") {
        alert("Por favor ingresa un texto.");
    } else {
        const textoDesencriptado = desencriptarTexto(inputText);
        mostrarResultado(textoDesencriptado);
    }
});

// Función para copiar al portapapeles
document.querySelector(".boton-copiar").addEventListener("click", function() {
    const textoResultado = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(textoResultado)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(err => alert("Error al copiar al portapapeles: " + err));
});