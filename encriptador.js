function encriptar() {
    var texto = document.querySelector("#entrada-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/u/gi, "ufat").replace(/o/gi, "ober");
    document.querySelector("#salida-mensaje").value = textoCifrado;
    document.querySelector("#entrada-texto").value = "";
    document.querySelector("#entrada-texto").focus();
    
}

function limpiar() {
    var input = document.querySelector("#entrada-texto");
    input.value = "";
}

var button_encriptador= document.querySelector("#boton-encriptar");
button_encriptador.onclick = encriptar;


function desencriptar() {
    var texto = document.querySelector("#entrada-texto").value;
    var textoDecifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ufat/gi, "u").replace(/ober/gi, "o");
    document.querySelector("#salida-mensaje").value = textoDecifrado;
    document.querySelector("#entrada-texto").value;
}



var button_desencriptador = document.querySelector("#boton-desencriptar");
button_desencriptador.onclick = desencriptar;


//funcion para copiar texto
var copiar = document.querySelector('#copiar');
copiar.addEventListener('click', function(event){
    var copiado = document.querySelector('#salida-mensaje');
    copiado.select();
    copiado.setSelectionRange(0, 9999);
    try{
        var retorno = navigator.clipboard.writeText(copiado.value);
        document.querySelector('#salida-mensaje').value = "";
    } catch(err){
        alert('Browser no soportado');
    }
})

