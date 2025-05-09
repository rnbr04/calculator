function operate(num1, op, num2) {
  num1 = +num1;
  num2 = +num2;
  switch (op) {
    case '+':
      return add(num1, num2);
    
    case '-':
      return subtract(num1, num2);

    case '*':
      return multiply(num1, num2);

    case '/':
      return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return +result.toFixed(2);
}

function divide(num1, num2) {
  let result = num1 / num2;
  return +result.toFixed(2);
}

// Event Listeners
const disp = document.querySelector('.calc-display');
const numbers = Array.from(document.querySelectorAll('.number'));
const operations = Array.from(document.querySelectorAll('.op'));
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear');
let op;
let countop = 0;

// click event for number
numbers.forEach(element => {
  element.addEventListener('click', (e) => {
    let calc = document.createTextNode(e.target.textContent);
    disp.appendChild(calc);
  });
});

// click event for operations
operations.forEach(element => {
  element.addEventListener('click', (e) => {
    op = e.target.textContent;
    disp.appendChild(document.createTextNode(op));
  });
});

// click event for equal
calculate.addEventListener('click', (e) => {
  let nums = disp.textContent.split(`${op}`);
  disp.textContent = operate(nums[0], op, nums[1]);
});

// click event for clearing display
clear.addEventListener('click', (e) => {
  disp.textContent = '';
})