let labelElement = document.querySelector('.label');
let oneElement = document.querySelector('.one');
let twoElement = document.querySelector('.two');
let resultElement = document.querySelector('.result');
let btn1Element = document.querySelector('.btn1');
let btn2Element = document.querySelector('.btn2');
let btn3Element = document.querySelector('.btn3');

// console.log(oneElement.value);
// console.log(twoElement.value);
// console.log(btnElement);

let getRandomNumber = () => Math.floor(Math.random()*11);
let one, two;

let startNewPrimer = () => {
    one = getRandomNumber();
    two = getRandomNumber();
    oneElement.innerHTML = one;
    twoElement.innerHTML = two;
    labelElement.innerHTML = '';
    resultElement.innerHTML = '';
}

let calculate = () => {
    if (+resultElement.innerHTML === one * two) {
        labelElement.innerHTML = 'DOĞRU';
        labelElement.classList.remove('error');
    } else {
        labelElement.innerHTML = 'YANLIŞ';
        labelElement.classList.add('error');
    }
}

let answer = () => {
    resultElement.innerHTML = one * two;
}

startNewPrimer();

btn1Element.addEventListener('click', answer);
btn2Element.addEventListener('click', calculate);
btn3Element.addEventListener('click', startNewPrimer);
