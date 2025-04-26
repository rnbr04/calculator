function operate(num1, op, num2) {
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
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Event Listeners
disp = document.querySelector('.calc-display');
btns = Array.from(document.querySelectorAll('.math'));

// click event for btns
btns.forEach((element) => {
  element.addEventListener('click', (e) => {
    let calc = document.createTextNode(e.target.textContent);
    disp.appendChild(calc);
  })
});