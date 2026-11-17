
function soloNumeros(input) {
    let valor = input.value;

    valor = valor.replace(/[^0-9.-]/g, '');

    let signo = valor.startsWith('-') ? '-' : '';
    let numeroLimpio = valor.replace(/-/g, '');

    let partes = numeroLimpio.split('.');
    if (partes.length > 2) {
        numeroLimpio = partes[0] + '.' + partes.slice(1).join('');
    }

    if (numeroLimpio.startsWith('.')) {
        numeroLimpio = '0' + numeroLimpio;
    }

    input.value = signo + numeroLimpio;
}

function sumar() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    return document.getElementById('r').value = (a + b);
}

function restar() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    return document.getElementById('r').value = (a - b);
}

function multiplicar() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    return document.getElementById('r').value = (a * b);
}

function dividir() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    if (b === 0) {
        return document.getElementById('r').value = 'No se puede dividir entre 0';
    }
    return document.getElementById('r').value = (a / b);
}

function potenciacion() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    return document.getElementById('r').value = Math.pow(a, b);
}

function raiz() {
    let a = parseFloat(document.getElementById('v1').value);
    if (isNaN(a)) {
        return document.getElementById('r').value = 'Ingrese un número válido en Valor 1';
    }
    if (a >= 0) {
        return document.getElementById('r').value = Math.sqrt(a);
    }
    return document.getElementById('r').value = 'Su raíz no existe en los reales';
}

function multiplo() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    if (a % b === 0) {
        return document.getElementById('r').value = 'Es múltiplo';
    }
    return document.getElementById('r').value = 'No es múltiplo';
}

function comparar() {
    let a = parseFloat(document.getElementById('v1').value);
    let b = parseFloat(document.getElementById('v2').value);
    if (isNaN(a) || isNaN(b)) {
        return document.getElementById('r').value = 'Ingrese ambos números válidos';
    }
    if (a > b) {
        return document.getElementById('r').value = 'El primer valor es mayor que el segundo';
    } else if (b > a) {
        return document.getElementById('r').value = 'El segundo valor es mayor que el primero';
    } else {
        return document.getElementById('r').value = 'Ambos valores son iguales';
    }
}


//CADENAS DE TEXTO

function compararCadenas() {
    let a = document.getElementById('texto1').value.length;
    let b = document.getElementById('texto2').value.length;

    if (a === 0 || b === 0) {
        return document.getElementById('rTexto').value = 'Ingrese ambos textos';
    }
    if (a > b) {
        return document.getElementById('rTexto').value = 'El primer texto es más largo';
    } else if (b > a) {
        return document.getElementById('rTexto').value = 'El segundo texto es más largo';
    } else {
        return document.getElementById('rTexto').value = 'Los textos tienen el mismo tamaño';
    }
}

function contarCaracter() {
    let a = document.getElementById('texto1').value;
    let b = document.getElementById('texto2').value;
    let contador = 0;

    if (a === '' || b === '') {
        return document.getElementById('rTexto').value = 'Ingrese ambos textos';
    }
    if (b.length !== 1) {
        return document.getElementById('rTexto').value = 'Solo puede ingresar un carácter en el Texto 2';
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            contador++;
        }
    }
    if (contador > 0) {
        return document.getElementById('rTexto').value = 'El carácter "' + b + '" se encuentra ' + contador + ' veces.';
    } else {
        return document.getElementById('rTexto').value = 'El carácter "' + b + '" no se encuentra en el primer texto';
    }
}

function quitarEspacios() {
    let a = document.getElementById('texto1').value;

    if (a === '') {
        return document.getElementById('rTexto').value = 'Por favor ingrese un texto';
    }
    return document.getElementById('rTexto').value = a.replace(/ /g, "");
}

function insertarCadena() {
    let a = document.getElementById('texto1').value;
    let b = document.getElementById('texto2').value;

    if (a === '' || b === '') {
        return document.getElementById('rTexto').value = 'Ingrese ambos textos';
    }
    let mitad = Math.ceil(a.length / 2);
    return document.getElementById('rTexto').value = `${a.slice(0, mitad)}${b}${a.slice(mitad)}`;
}


// VECTORES ó ARREGLOS

function soloNumerosYComas(input) {
    let valor = input.value;

    valor = valor.replace(/[^0-9,-]/g, '');
    valor = valor.replace(/^,/, '').replace(/,,+/g, ',');

    let partes = valor.split(',').map(parte => {
        let signo = parte.startsWith('-') ? '-' : '';
        let numeroLimpio = parte.replace(/-/g, '');
        return signo + numeroLimpio;
    });

    input.value = partes.join(',').replace(/-(?=,)/g, '');
}

let arreglo = [];

function crearVector() {
    let a = document.getElementById('vector').value.trim().replace(/[,-]+$/, '');

    if (a === '') {
        arreglo = [];
        return document.getElementById('rVector').value = 'Por favor ingrese los números';
    }

    document.getElementById('vector').value = a;
    arreglo = a.split(',').map(Number);

    if (arreglo.some(isNaN)) {
        arreglo = [];
        return document.getElementById('rVector').value = 'Ingrese solo números enteros válidos';
    }

    return document.getElementById('rVector').value = arreglo.join(', ');
}

function sumarVector() {
    if (arreglo.length === 0) {
        return document.getElementById('rVector').value = 'Primero debe crear el arreglo';
    }

    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];
    }

    return document.getElementById('rVector').value = `La suma es: ${suma}`;
}

function multiplicarPares() {
    if (arreglo.length === 0) {
        return document.getElementById('rVector').value = 'Primero debe crear el arreglo';
    }

    let multiplicador = 1;
    let hayPares = false;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            multiplicador *= arreglo[i];
            hayPares = true;
        }
    }

    if (!hayPares) {
        return document.getElementById('rVector').value = 'No hay números pares en el arreglo';
    }

    return document.getElementById('rVector').value = `Multiplicación pares: ${multiplicador}`;
}