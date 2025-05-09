const lowerDisplay = document.getElementById('lowerDisplay');
const upperDisplay = document.getElementById('upperDisplay');
const keysContainer = document.getElementById('keys');

let currentInput = '';

const buttons = [
    { label: 'AC', class: 'clear-button', action: () => clearDisplay() },
    { label: 'del', class: 'clear-button', action: () => delDisplay() },
    { label: '7', class: 'grid-space', action: () => appendToDisplay('7') },
    { label: '8', class: 'grid-space', action: () => appendToDisplay('8') },
    { label: '9', action: () => appendToDisplay('9') },
    { label: '(', class: 'operator-button', action: () => appendToDisplay('(') },
    { label: ')', class: 'operator-button', action: () => appendToDisplay(')') },
    { label: '4', class: 'grid-space', action: () => appendToDisplay('4') },
    { label: '5', class: 'grid-space', action: () => appendToDisplay('5') },
    { label: '6', action: () => appendToDisplay('6') },
    { label: '^', class: 'operator-button', action: () => appendToDisplay('^') },
    { label: '√', class: 'operator-button', action: () => appendToDisplay('√') },
    { label: '1', class: 'grid-space', action: () => appendToDisplay('1') },
    { label: '2', class: 'grid-space', action: () => appendToDisplay('2') },
    { label: '3', action: () => appendToDisplay('3') },
    { label: '÷', class: 'operator-button', action: () => appendToDisplay('÷') },
    { label: '×', class: 'operator-button', action: () => appendToDisplay('×') },
    { label: '0', class: 'grid-space', action: () => appendToDisplay('0') },
    { label: '.', class: 'grid-space', action: () => appendToDisplay('.') },
    { label: '=', class: 'calculate-button', action: () => calculate() },
    { label: '-', class: 'operator-button', action: () => appendToDisplay('-') },
    { label: '+', class: 'operator-button', action: () => appendToDisplay('+') }
];

buttons.forEach(({ label, class: className, action }) => {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = className;
    button.onclick = action;
    keysContainer.appendChild(button);
});

function appendToDisplay(input) {
    if(lowerDisplay.value === 'Error') {
        lowerDisplay.value = '';
    }
    if(lowerDisplay.value === '' && input !== '.' && isNaN(input) && input !== '√' && input !== '(' && input !== ')') {
        lowerDisplay.value = upperDisplay.value;
    }
    lowerDisplay.value += input;
}

function clearDisplay() {
    lowerDisplay.value = '';
    upperDisplay.value = '';
}

function delDisplay() {
    if(lowerDisplay.value === 'Error') {
        lowerDisplay.value = 'Error';
    } else {
        lowerDisplay.value = lowerDisplay.value.slice(0, -1);
    }
}

function calculate() {
    try {
        let result = lowerDisplay.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/(\d+(\.\d+)?)(\^)(\d+(\.\d+)?)/g, 'Math.pow($1, $4)')
            .replace(/\√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
        upperDisplay.value = eval(result);
        lowerDisplay.value = '';
    }
    catch {
        lowerDisplay.value = "Error"
    }
}