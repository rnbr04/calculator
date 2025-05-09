function operate(num1, op, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (op) {
    case '+':
      num1 = NaNtoZero(num1);
      num2 = NaNtoZero(num2);
      return add(num1, num2);
      
      case '-':
      num1 = NaNtoZero(num1);
      num2 = NaNtoZero(num2);
      return subtract(num1, num2);

    case '*':
      num1 = NaNtoOne(num1);
      num2 = NaNtoOne(num2);
      return multiply(num1, num2);
      
      case '/':
      num1 = NaNtoOne(num1);
      num2 = NaNtoOne(num2);
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

function calc() {
  if (disp.textContent === '') {
    disp.textContent = '';
  }
  else {
    let nums = disp.textContent.split(`${op}`);
    disp.textContent = operate(nums[0], op, nums[1]);
  }
}

function NaNtoZero(num) {
  if (isNaN(num)) {
    return 0;
  }
  return num;
}

function NaNtoOne(num) {
  if (isNaN(num)) {
    return 1;
  }
  return num;
}

// Event Listeners
const disp = document.querySelector('.calc-display');
const numbers = Array.from(document.querySelectorAll('.number'));
const operations = Array.from(document.querySelectorAll('.op'));
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear');
let op;
let opCount = 0;

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
    if (opCount === 0) {
      opCount++;
    }
    else if (opCount === 1) {
     calc(); 
    }
    op = e.target.textContent;
    disp.appendChild(document.createTextNode(op));
    
    if (disp.textContent === op) {
      disp.textContent = '';
    }
  });
});

// click event for equal
calculate.addEventListener('click', (e) => {
  if (disp.textContent === '') {
    disp.textContent = '';
  }
  else {
    calc();
  }
});

// click event for clearing display
clear.addEventListener('click', (e) => {
  disp.textContent = '';
})