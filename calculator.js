const display = document.querySelectorAll('.display');
const entry = document.querySelector('#entry');
const prevEntry = document.querySelector('#prev-entry');
const operatorEntry = document.querySelector('#op-entry');
const output = document.querySelector('#output');
const prevOp = document.querySelector('#prev-op');

// Operate function gathers a button's inner text value
// to determine which operation to perform

function operate() {
    let a = Number(prevEntry.innerText);
    let b = Number(entry.innerText);
    const operator = operatorEntry.innerText;

    switch(operator) {
        case '+':
            return a + b;
        
        case '-':
            return a - b;

        case '×':
            return a * b;

        case '÷':
            if (b === 0) {
                return "WHAT HAVE YOU DONE???";
            } else {
                return a / b;
            }
        
        case '^':
            return a ** b;

        case '√':
            return b ** (1/a);

        case '!':
            let total = 1;
            for (let i = 0; i < a; i++) {
                total = total * (a - i);
            }
            return total;
        
        default:
            return b;
    }
}

// Listen for all clicks
// Switch case if clicked button contains certain data-type values

window.addEventListener('click', (e) => {
    let dataSet = e.target.dataset.type;
    let value = e.target.innerHTML;

    switch(dataSet) {
        case 'number': // Includes decimal point
            entry.innerText += value;
            break; 

        case 'operator':
            entry.innerText = operate();
            prevEntry.innerText = entry.innerText;
            operatorEntry.innerText = value;
            entry.innerText = '';
            break;

        case 'equals':
            prevOp.innerText = prevEntry.innerText + operatorEntry.innerText + entry.innerText + '=';

            entry.innerText = operate();

            operatorEntry.innerText = '';
            prevEntry.innerText = '';
            break;

        case 'clear':
            display.forEach(display => display.innerText = '');
            break;

        case 'delete':
            entry.innerText = entry.innerText.slice(0,-1);
            break;

        case 'negate':
           entry.innerText = Number(entry.innerText) * -1;
            break;
    }
});

// Keyboard listener
// Button IDs set as keyboard event key

document.addEventListener('keydown', (e) => {
    document.getElementById(e.key).click();
    });


// TODO

// return toFixed only if necessary
// disable decimal if one already exists
// Show keyboard feedback by activating button press on screen