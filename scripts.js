var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var lupa = document.querySelector(".contenedor-a-ocultar");
var resultado = document.querySelector(".contenedor-resultado");
var botonCopiar = document.querySelector(".boton-copiar");
// var textoEncriptado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
  
function encriptar() {
    ocultarAdelante();
    mostrarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
    document.querySelector(".contenedor-resultado").innerHTML += '<input type="button" class="boton-copiar" value="Copiar">';
    console.log("Texto a copiar:", resultado);
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    lupa.classList.add("ocultar");
}

function mostrarAdelante() {
    resultado.classList.add("mostrar");
    document.querySelector(".contenedor-resultado").style.display = "flex";
    botonCopiar.classList.add("mostrar");

}

function pruebaBotonEncriptar() {
    alert('Click desde el boton Encriptar')
}

function pruebaBotonDesencriptar() {
    alert('Click desde el boton DesEncriptar')
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
            else if (texto[i] == "e") {
                textoFinal = textoFinal + "e"
                i = i + 4;
            }
            
            else if (texto[i] == "i") {
                textoFinal = textoFinal + "i"
                i = i + 3;
            }

            else if (texto[i] == "o") {
                textoFinal = textoFinal + "o"
                i = i + 3;
            }

            else if (texto[i] == "u") {
                textoFinal = textoFinal + "u"
                i = i + 3;
            }

        else {
                textoFinal = textoFinal + texto[i];              
        }
        
    }

    return textoFinal;
}

function ocultar(id){
    var elemento = document.getElementById(id);
    elemento.style.display = "none";
}

function mostrar(id){
    var elemento = document.getElementById(id);
    elemento.style.display = "block";
}

// Boton Copiar

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("boton-copiar")) {
        var contenido = document.querySelector(".contenedor-resultado").textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            console.log("Texto copiado:", contenido);
            alert("Texto copiado al portapapeles.");
        }).catch(err => {
            console.error("Error al copiar: ", err);
        });
    }
});