let counterDisplayElem = document.querySelector('.counter__display');
let counterMinusElem = document.querySelector('.counter__minus');
let counterPlusElem = document.querySelector('.counter__plus');

let count = 1;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};