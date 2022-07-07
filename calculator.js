const display = document.querySelectorAll('.display');
const entry = document.querySelector('#entry');
const prevEntry = document.querySelector('#prev-entry');
const operatorEntry = document.querySelector('#op-entry');
const prevOp = document.querySelector('#prev-op');

// Operate function gathers a button's inner text value
// to determine which operation to perform

function operate() {
    let a = Number(prevEntry.innerText);
    let b = Number(entry.innerText);
    const operator = operatorEntry.innerText;
    const accuracy = 8;

    // Number().toFixed() limits output decimals only if there are decimals.
    // It also slices off excess 0s at the ends of decimals

    switch(operator) {
        case '+':
            return Number((a + b).toFixed(accuracy));
        
        case '-':
            return Number((a - b).toFixed(accuracy));

        case '×':
            return Number((a * b).toFixed(accuracy));

        case '÷':
            if (b === 0) {
                return "WHAT HAVE YOU DONE???";
            } else {
                return Number((a / b).toFixed(accuracy));
            }
        
        case '^':
            return Number((a ** b).toFixed(accuracy));

        case '√':
            return Number((b ** (1/a)).toFixed(accuracy));

        case '!':
            let total = 1;
            for (let i = 0; i < a; i++) {
                total = total * (a - i);
            }
            return Number(total.toFixed(accuracy));
        
        default:
            return Number(b.toFixed(accuracy));
    }
}

// Listen for all clicks
// Switch case if clicked button contains certain data-type values

window.addEventListener('click', (e) => {
    let dataSet = e.target.dataset.type;
    let value = e.target.innerHTML;

    switch(dataSet) {
        case 'number':
            if (entry.innerText.length < 16) {
                entry.innerText += value;
            }
            break; 

        case 'decimal':
            if (!entry.innerText.includes('.')) {
                entry.innerText += value;
            }
            break;

        case 'operator':
            entry.innerText = operate();
            prevEntry.innerText = entry.innerText;
            operatorEntry.innerText = value;
            entry.innerText = '';
            prevOp.innerText = '';
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

// Keyboard listeners
// Button IDs set as keyboard event key

document.addEventListener('keydown', (e) => {
    document.getElementById(e.key).click();
    document.getElementById(e.key).classList.add('active');
    });

document.addEventListener('keyup', (e) => {
    document.getElementById(e.key).classList.remove('active');
});

// TODO

// store input data in an object