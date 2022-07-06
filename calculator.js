const display = document.querySelectorAll('.display');
const entry = document.querySelector('#entry');
const prevEntry = document.querySelector('#prev-entry');
const operatorEntry = document.querySelector('#op-entry');
const answer = document.querySelector('#answer');

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
            return a / b;
        
        case '^':
            return a ** b;

        case '!':
            let total = 1;
            for (let i = 0; i < a; i++) {
                total = total * (a - i);
            }
            return total;

        default:
            alert("Something went horribly wrong.");
            break;
    }
}

// Click listener

window.addEventListener('click', (e) => {
    let dataType = e.target.dataset.type;
    let value = e.target.innerHTML;

    switch(dataType) {
        case 'number':
            entry.innerText += value;
            break;

        case 'operator':
            prevEntry.innerText = entry.innerText;
            operatorEntry.innerText = value;
            entry.innerText = '';
            break;

        case 'equals':
            answer.innerText = '=' + operate();
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