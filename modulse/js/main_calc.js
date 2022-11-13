import { OPERATIONS } from "./operations.js";
    const equally =document.querySelector('.equally');
    const result = document.querySelector('.output');
    const calc_line=document.querySelector('.content');
    const sign = document.querySelector('.sign');
    const input_second = document.querySelector(".input-second");
    const input_first = document.querySelector(".input-first");

 function totalResult() {
    let first_num = Number(input_first.value);
    let second_num = Number(input_second.value);
    let operator = sign.value;
    switch (operator) {
        case OPERATIONS.ADD:
            result.textContent = +first_num + +second_num;
            break;
        case OPERATIONS.MINUS:
            result.textContent = first_num - second_num;
            break;
        case OPERATIONS.MULTI:
            result.textContent = first_num * second_num;
            break;
        case OPERATIONS.DEL:
            result.textContent = (first_num / second_num).toFixed(15);
            break;
    }
}
equally.addEventListener("click", () => {
    totalResult();
});
equally.addEventListener("click", () => {
    listOfResults();
});
function listOfResults() {
    let div = document.createElement('div');
    div.className = "div";
    div.textContent = result.textContent;
    calc_line.append(div);
    div.addEventListener("click", cleanListOfResults);
}
function cleanListOfResults() {
            this.remove();
        }