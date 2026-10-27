var x = multiplicar(4, 3)

function multiplicar(n1, n2) {
    return n1 * n2
}

console.log(x)

e = encuentreMayor(1, 123, 500, 115, 44, 88);

function encuentreMayor() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
}
