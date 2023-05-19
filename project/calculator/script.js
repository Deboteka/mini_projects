const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "+", "="];
let output = "";
const calculator = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } 
  else if (btnValue === "AC") {
    output = "";
  } 
  else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } 
  else if (btnValue === 'sqrt'){
    let number = display.value;
    display.value = ''
    output = Math.sqrt(number);
  }
  else if (btnValue === 'sin'){
    let number = display.value;
    display.value = ''
    output = Math.sin(number);
  }
  else if (btnValue === 'cos'){
    let number = display.value;
    display.value = ''
    output = Math.cos(number);
  }
  else if (btnValue === 'tan'){
    let number = display.value;
    display.value = ''
    output = Math.tan(number);
  }
  else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculator(e.target.dataset.value));
});
