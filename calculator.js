const display = document.querySelectorAll('.display');
const entry = document.querySelector('#entry');
const prevEntry = document.querySelector('#prev-entry');
const opEntry = document.querySelector('#op-entry');
const prevOp = document.querySelector('#prev-op');

// Switch on operation buttons' innerText values
function operate() {
    let a = Number(prevEntry.innerText);
    let b = Number(entry.innerText);

    switch(opEntry.innerText) {
        case '+':
            return a + b;
        
        case '-':
            return a - b;

        case '×':
            return a * b;

        case '÷':
            if (b === 0) {
                return "ERROR";
            } else {
                return a / b;
            }
        
        case '^':
            return a ** b;
        case '√':
            return b ** (1/a);

        case '!':
            if (a > 170) {
                return "Infinity";
            } else {
                let total = 1;
                for (let i = 0; i < a; i++) {
                total = total * (a - i);
            }
                return total;
            }
    
        default:
            return b;
    }
}

// Listen for all clicks; switch on HTML data-type values
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
            opEntry.innerText = value;
            entry.innerText = '';
            prevOp.innerText = '';
            break;

        case 'equals':
            prevOp.innerText = `${prevEntry.innerText} ${opEntry.innerText} ${entry.innerText} = `;
            entry.innerText = operate();
            opEntry.innerText = '';
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

// Keyboard listeners --  HTML button IDs set as keyboard event key
document.addEventListener('keydown', (e) => {
    document.getElementById(e.key).click();
    document.getElementById(e.key).classList.add('active');
    });

document.addEventListener('keyup', (e) => {
    document.getElementById(e.key).classList.remove('active');
});