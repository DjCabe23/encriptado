document.addEventListener('DOMContentLoaded', function() {
    function encriptar(texto) {
        return texto.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
    }

    function desencriptar(texto) {
        return texto.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
    }

    document.getElementById('encriptarBtn').addEventListener('click', function() {
        let inputTexto = document.getElementById('inputTexto').value;
        let textoEncriptado = encriptar(inputTexto);
        document.getElementById('outputTexto').value = textoEncriptado;
    });

    document.getElementById('desencriptarBtn').addEventListener('click', function() {
        let inputTexto = document.getElementById('inputTexto').value;
        let textoDesencriptado = desencriptar(inputTexto);
        document.getElementById('outputTexto').value = textoDesencriptado;
    });

    document.getElementById('copiarBtn').addEventListener('click', function() {
        let outputTexto = document.getElementById('outputTexto');
        outputTexto.select();
        document.execCommand('copy');
        alert("Copiado");
    });
});