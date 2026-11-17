function sumar() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    return document.getElementById('r').value = (a + b);
}
function restar() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    return document.getElementById('r').value = (a - b)
}
function multiplicar() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    return document.getElementById('r').value = (a * b)
}
function dividir() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    return document.getElementById('r').value = (a / b)
}
function potenciacion() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    return document.getElementById('r').value = Math.pow(a, b)
}
function raiz() {
    let a = parseFloat(document.getElementById('v1').value)
    if (a >= 0) {
        return document.getElementById('r').value = Math.sqrt(a)
    }
    return document.getElementById('r').value = 'Su raiz no existe en los reales'
}
function multiplo() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    if (b === 0) {
        return document.getElementById('r').value = 'No se puede dividir entre 0';

    }
    if (a % b === 0) {
        return document.getElementById('r').value = 'Es múltiplo'
    }
    return document.getElementById('r').value = 'No es múltiplo'

}
function comparar() {
    let a = parseFloat(document.getElementById('v1').value)
    let b = parseFloat(document.getElementById('v2').value)
    if (a === '' || b === '') {
        return document.getElementById('r').value = 'Debe ingresar ambos números'
    }
    if (a > b) {
        return document.getElementById('r').value = 'El primer valor es mayor que el segundo'
    }
    else if (b > a) {
        return document.getElementById('r').value = 'El segundo valor es mayor que el primero'
    }
    else {
        return document.getElementById('r').value = 'Ambos valores son iguales'
    }
}


// CADENAS

function compararCadenas() {
    let a = document.getElementById('texto1').value.length
    let b = document.getElementById('texto2').value.length

    if (a === '' || b === '') {
        return document.getElementById('rTexto').value = 'Ingrese ambos textos'
    }
    if (a > b) {
        return document.getElementById('rTexto').value = 'El primer texto es más largo'
    }
    else if (b > a) {
        return document.getElementById('rTexto').value = 'El segundo texto es más largo'
    }
    else {
        return document.getElementById('rTexto').value = 'Los textos tienen el mismo tamaño'
    }
}



function contarCaracter() {
    let a = document.getElementById('texto1').value
    let b = document.getElementById('texto2').value
    let contador = 0;

    if (a === '' || b === '') {
        return document.getElementById('rTexto').value = 'Ingrese ambos textos'
    }
    if (b.length !== 1) {
        return document.getElementById('rTexto').value = 'Solo puede ingresar un caracter en el texto 2';
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            contador++;
        }
    }
    if (contador > 0) {
        return document.getElementById('rTexto').value = 'El caracter "' + b + '" se encuentra ' + contador + ' veces.'
    } else {
        return document.getElementById('rTexto').value = 'El caracter "' + b + '" no se encutra en el primer texto'
    }
}



function quitarEspacios() {
    let a = document.getElementById('texto1').value;

    if (a === '') {
        return document.getElementById('rTexto').value = 'Por favor ingrese un texto'
    }
    return document.getElementById('rTexto').value = a.replace(/ /g, "");
}


function insertarCadena() {
    let a = document.getElementById('texto1').value
    let b = document.getElementById('texto2').value

    if (a === '' || b === '') {
        return document.getElementById('rTexto').value = 'Ingrese ambos textos'
    }
    let mitad = Math.ceil(a.length / 2)
    return document.getElementById('rTexto').value = `${a.slice(0, mitad)}${b}${a.slice(mitad)}`
}


//vectores

var arregloInicial = []
var arregloFinal = []


function validarNumeros(arreglo) {
    aux = []
    for (let i = 0; i < arreglo.length; i++) {
        if (!isNaN(arreglo[i])) {
            aux.push(arreglo[i])
        }
    }
    return aux
}

function crearVector() {
    let a = document.getElementById('vector').value;

    if (a.trim() === '') {
        document.getElementById('rVector').value = 'Por favor ingrese los números';
    } else {

        arregloInicial = a.split(',').map(Number);
        let x = validarNumeros(arreglo);

        
        document.getElementById('rVector').value = x.join(', ');
        arregloFinal = x
    }
}


function sumarVector() {

    if (x.length === 0) {
        return document.getElementById('rVector').value = 'Primero debe crear el arreglo';
    }

    let suma = 0;
    for (let i = 0; i < arregloFinal.length; i++) {
        suma = suma + arregloFinal[i]
    }

    return document.getElementById('rVector').value = `La suma es: ${suma}`
}

function multiplicarPares() {

    if (arregloFinal.length === 0) {
        return document.getElementById('rVector').value = 'Primero debe crear el arreglo';
    }

    let multipiclador = 1
    for (i = 1; i < arregloFinal.length; i += 2) {
        multipiclador *= arreglo[i]
    }

    return document.getElementById('rVector').value = multipiclador
}

