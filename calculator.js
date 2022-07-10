const display = document.querySelectorAll('.display');
const entry = document.querySelector('#entry');
const prevEntry = document.querySelector('#prev-entry');
const opEntry = document.querySelector('#op-entry');
const prevOp = document.querySelector('#prev-op');

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
    if (b === 0) {
        return "ERROR";
    } else {
        return a / b;
    }
}

function exponent(a, b) {
    return a ** b;
}

function root(a, b) {
    return b ** (1/a);
}

function factorial(a) {
    let total = 1;
    if (a > 170) {
        return "Infinity";
    } else {
        for (let i = 0; i < a; i++) {
            total = total * (a - i);
            }
    }
    return total;
}

function inputNum(value) {
    if (entry.innerText.length < 16) {
        entry.innerText += value;
    }
}

function inputDec(value) {
    if (!entry.innerText.includes('.')) {
        entry.innerText += value;
    }
}

function inputOp(value) {
    entry.innerText = operate();
    prevEntry.innerText = entry.innerText;
    opEntry.innerText = value;
    entry.innerText = '';
    prevOp.innerText = '';
}

function inputEq() {
    prevOp.innerText = `${prevEntry.innerText} ${opEntry.innerText} ${entry.innerText} = `;
    entry.innerText = operate();
    opEntry.innerText = '';
    prevEntry.innerText = '';
}

function clear() {
    display.forEach(display => display.innerText = '');
}

function del() {
    entry.innerText = entry.innerText.slice(0,-1);
}

function negate() {
    entry.innerText = Number(entry.innerText) * -1;
}

function resetEntry() {
    if (shouldResetEntry) {
        entry.innerText = '';
        shouldResetEntry = false;
    }
}

// Switch on operation buttons' innerText values
function operate() {
    let a = Number(prevEntry.innerText);
    let b = Number(entry.innerText);

    switch(opEntry.innerText) {
        case '+':
            return add(a, b);
        
        case '-':
            return subtract(a, b);

        case '×':
            return multiply(a, b);

        case '÷':
            return divide(a, b);
        
        case '^':
            return exponent(a, b);
            
        case '√':
            return root(a, b);

        case '!':
            return factorial(a);
    
        default:
            return b;
    }
}

let shouldResetEntry = false;

// Listen for all clicks; switch on HTML data-type values
window.addEventListener('click', (e) => {
    let dataSet = e.target.dataset.type;
    let value = e.target.innerHTML;

    switch(dataSet) {
        case 'number':
            resetEntry();
            inputNum(value);
            break; 

        case 'decimal':
            resetEntry();
            inputDec(value);
            break;

        case 'operator':
            inputOp(value);
            break;

        case 'equals':
            inputEq();
            shouldResetEntry = true;
            break;

        case 'clear':
            clear();
            break;

        case 'delete':
            del();
            break;

        case 'negate':
            negate();
            break;
    }
});

// Keyboard listeners --  HTML button IDs set as keyboard event key
document.addEventListener('keydown', (e) => {
    document.getElementById(e.key).click();
    document.getElementById(e.key).classList.add('active');
    });

document.addEventListener('keyup', (e) => {
    document.getElementById(e.key).classList.remove('active');
});