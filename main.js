let labelElement = document.querySelector('.label');
let oneElement = document.querySelector('.one');
let twoElement = document.querySelector('.two');
let resultElement = document.querySelector('.result');
let btn1Element = document.querySelector('.btn1');
let btn2Element = document.querySelector('.btn2');
let btn3Element = document.querySelector('.btn3');
let selectElement = document.querySelector('#operation');
let noElement = document.querySelector('.no');
let yesElement = document.querySelector('.yes');

let getRandomNumber = (n) => Math.floor(Math.random()*(n + 1));
let one, two;

let startNewPrimer = () => {
    btn2Element.removeAttribute('disabled');
    one = getRandomNumber(10);
    if (selectElement.value === 'multiply') {
        two = getRandomNumber(10);
        oneElement.innerHTML = one;
    }
    if (selectElement.value === 'devide') {
        two = getRandomNumber(9) + 1;
        oneElement.innerHTML = one * two;
    }
    twoElement.innerHTML = two;
    labelElement.innerHTML = '';
    resultElement.innerHTML = '';
}

let calculate = () => {
    btn2Element.setAttribute('disabled', true);
    let result = selectElement.value === 'multiply' ? one * two : one;
    if (+resultElement.innerHTML === result) {
        labelElement.innerHTML = 'DOĞRU';
        labelElement.classList.remove('error');
        yesElement.innerHTML = +yesElement.innerHTML + 1;
    } else {
        labelElement.innerHTML = 'YANLIŞ';
        labelElement.classList.add('error');
        noElement.innerHTML = +noElement.innerHTML + 1;
    }
}

let answer = () => {
    btn2Element.setAttribute('disabled', true);
    resultElement.innerHTML = selectElement.value === 'multiply' ? one * two : one;
}

startNewPrimer();

btn1Element.addEventListener('click', answer);
btn2Element.addEventListener('click', calculate);
btn3Element.addEventListener('click', startNewPrimer);
selectElement.addEventListener('change', startNewPrimer);
resultElement.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        if (!btn2Element.hasAttribute('disabled')) calculate();
    }
});
