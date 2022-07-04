// Two-arguement functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return a**b;
}

function root(a, b) {
    return a**(1/b);
}

// Single-arguement functions


function toggleNegative(a) {
    return a * -1;
}

function factorial(a) {
    let total = 1;
    for (let i = 0; i < a; i++) {
        total = total * (a - i);
    }
    return total;
}

// Operate function

function operate(operator, a, b) {
    return operator(a, b);
}
