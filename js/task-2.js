// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const divElem = document.createElement('div');
divElem.classList.add('numberContainer');
const containerElem = document.querySelector('.container');
containerElem.append(divElem);

const numbers = [];
for (let i = 1; i <= 100; i++) {
  const number = Math.floor(Math.random() * 100) + 1;
  numbers.push(number);
}

function numberTamplate(number, index) {
  if (number % 2) {
    return `<div class="odd">${index + 1}. Odd number - ${number}</div>`;
  } else {
    return `<div class="even">${index + 1}. Even number - ${number}</div>`;
  }
}

function renderNumbers() {
  const numberContainerElem = document.querySelector('.numberContainer');
  numbers.forEach((number, index) => {
    const markup = numberTamplate(number, index);
    setTimeout(() => {
      numberContainerElem.insertAdjacentHTML('beforeend', markup);
    }, index * 500); // каждая итерация на 1 сек позже предыдущей
  });
}

renderNumbers();
