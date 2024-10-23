let counterValue = 0;

const counterDisplay = document.getElementById("counter");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  counterValue = 0;

  updateCounter();
});

//Обновление отображения счетчика

const updateCounter = () => {
  counterDisplay.textContent = counterValue;
};

//Увеличение счетчика

plus.addEventListener("click", function () {
  counterValue++;

  updateCounter();
});

//Уменьшение счетчика

minus.addEventListener("click", function () {
  if (counterValue > 0) {
    counterValue--;

    updateCounter();
  }
});
