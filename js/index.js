let elInput = document.querySelector(".input-number");
let elButton = document.querySelector(".button-click");
let elAlert = document.querySelector(".alert-information");


elButton.addEventListener('click', ()=> {
    let inputNumber = elInput.value;
    if(inputNumber % 15 === 0) {
        elAlert.textContent = 'FizzBuzz';
    } else if(inputNumber % 5 === 0) {
        elAlert.textContent = 'Buzz';
    } else if(inputNumber % 3 === 0) {
        elAlert.textContent = 'Fizz';
    } else {
        elAlert.textContent = elInput.value;
    }
})