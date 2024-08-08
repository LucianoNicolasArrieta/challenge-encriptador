let encriptables = ['a', 'e', 'i', 'o', 'u'];


function encriptarTexto() {
    let textoUsuario = document.getElementById('texto-ingresado').value;
    let textoEncriptado = '';

    for (var i = 0; i < textoUsuario.length; i++) {
        console.log(i);
        var letraEncriptada = encriptar(textoUsuario[i])
        textoEncriptado = textoEncriptado.concat(letraEncriptada);
    }

    reiniciarTextarea();
    cambiarEstilos();

    let output = document.getElementById('output__texto');
    output.innerHTML = textoEncriptado;
}

function encriptar(letra) {
    switch (letra) {
        case 'a':
            return 'ai';
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return letra;
    }
}

function reiniciarTextarea() {
    document.getElementById('texto-ingresado').value = '';
}

function cambiarEstilos() {
    document.getElementsByClassName('output__imagen')[0].style.display = 'none';
    document.getElementsByClassName('output__mensajeNoEncontrado')[0].style.display = 'none';
    document.getElementsByClassName('output__ingresarTexto')[0].style.display = 'none';
    document.getElementsByClassName('output')[0].style.alignItems = 'start';
    document.getElementsByClassName('output')[0].style.justifyContent = 'start';
}