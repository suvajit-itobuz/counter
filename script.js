const counterIncrease = document.getElementById("counter-increase");
const counterDecrease = document.getElementById("counter-decrease");
const counterReset = document.getElementById("counter-reset");
const counterNum = document.getElementById("counter-num");

let value = counterNum.innerText;

const check = (value) => {
  if (value > 0) {
    counterNum.style.color = "green";
  } else if (value < 0) {
    counterNum.style.color = "red";
  } else counterNum.style.color = "black";
};

const increase = () => {
  value = Number(value) + 1;
  counterNum.innerText = value;
  check(value);
};

const decrease = () => {
  value = Number(value) - 1;
  counterNum.innerText = value;
  check(value);
};

const reset = () => {
  value = 0;
  counterNum.innerText = value;
  check(value);
};
