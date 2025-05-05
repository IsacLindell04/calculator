const lowerDisplay = document.getElementById('lowerDisplay');
const upperDisplay = document.getElementById('upperDisplay');

let currentInput = '';

function appendToDisplay(input) {
    if(lowerDisplay.value === 'Error') {
        lowerDisplay.value = '';
    }
    if(lowerDisplay.value === '' && input !== '.' && isNaN(input) && input !== '√') {
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