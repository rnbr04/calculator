function operate(num1, op, num2) {
  // sanitize operands
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (op) {
    case '+':
      // set NaN to Zero if isNaN
      num1 = NaNtoZero(num1);
      num2 = NaNtoZero(num2);
      return add(num1, num2);
      
    case '-':
      // set NaN to Zero if isNaN
      num1 = NaNtoZero(num1);
      num2 = NaNtoZero(num2);
      return subtract(num1, num2);

    case '*':
      // set NaN to One if isNaN
      num1 = NaNtoOne(num1);
      num2 = NaNtoOne(num2);
      return multiply(num1, num2);
      
    case '/':
      // set NaN to One if isNaN
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
  // return upto 2 decimals
  return +result.toFixed(2);
}

function divide(num1, num2) {
  let result = num1 / num2;
  // return upto 2 decimals
  return +result.toFixed(2);
}

function calc() {
  // if display is empty remain empty
  if (disp.textContent === '') {
    disp.textContent = '';
  }
  // else calculate accordingly
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

function clearDisplay(e) {
  if (e.target.classList.contains('op')) {
    disp.textContent = '';
  }
  else {
    disp.textContent = e.target.textContent;
  }
  op = undefined;
  opCount = 0;
  numbers.forEach(element => {
    element.removeEventListener('click', clearDisplay);
  })
}

// Event Listeners
const disp = document.querySelector('.calc-display');
const numbers = Array.from(document.querySelectorAll('.number'));
const operations = Array.from(document.querySelectorAll('.op'));
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear');

// capture operation to be performed
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
    // if operation is used for the first time
    if (opCount === 0) {
      opCount++;
    }
    // if it is used the second time or more, calculate
    else if (opCount === 1) {
      calc(); 
    }
    // print the operation on display, after calculation
    op = e.target.textContent;
    disp.appendChild(document.createTextNode(op));
    
    // if the only thing on display is operation, empty it immediately
    if (disp.textContent === op) {
      disp.textContent = '';
    }
  });
});

// click event for equal
calculate.addEventListener('click', (e) => {
  // do nothing when "=" is pressed on empty display
  if (disp.textContent === '') {
    disp.textContent = '';
  }
  // else calculate
  else {
    calc();
    if (opCount === 1) {
      numbers.forEach(element => {
        element.addEventListener('click', clearDisplay);
      });
      operations.forEach(element => {
        element.addEventListener('click', clearDisplay);
      });
    }
  }
});

// click event for clearing display
clear.addEventListener('click', (e) => {
  // clear everything including variables
  disp.textContent = '';
  op = undefined;
  opCount = 0;
});
})