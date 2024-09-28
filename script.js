const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(display.value);
        if (isFinite(result)) {
            display.value = result;
        } else {
            display.value = 'Помилка';
        }
    } catch {
        display.value = 'Помилка';
    }
}
