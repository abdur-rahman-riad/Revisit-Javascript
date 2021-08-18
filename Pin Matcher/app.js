function getPin() {
    const pin = parseInt(Math.random() * 9999);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');

    if (generatedPin == typedPin) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        failMessage.style.display = 'block'
        successMessage.style.display = 'none';
    }
}