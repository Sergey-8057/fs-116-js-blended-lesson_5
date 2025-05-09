//TODO: № 5 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

const btnDec = document.querySelector('#decrease');
const btnInc = document.querySelector('#increase');
const boxElem = document.querySelector('#box');

btnDec.addEventListener('click', subtractBoxSixe);
btnInc.addEventListener('click', addBoxSixe);

function addBoxSixe() {
  const width = boxElem.offsetWidth;
  const height = boxElem.offsetHeight;

  boxElem.style.width = `${width + 10}px`;
  boxElem.style.height = `${height + 10}px`;
}

function subtractBoxSixe() {
  const width = boxElem.offsetWidth;
  const height = boxElem.offsetHeight;

  boxElem.style.width = `${width - 10}px`;
  boxElem.style.height = `${height - 10}px`;
}

// ====================================================

const btnDecTwo = document.querySelector('#decreaseTwo');
const btnIncTwo = document.querySelector('#increaseTwo');
const boxElemTwo = document.querySelector('#boxTwo');

btnDecTwo.addEventListener('click', changeBoxSixe);
btnIncTwo.addEventListener('click', changeBoxSixe);

function changeBoxSixe(event) {
  const width = boxElemTwo.offsetWidth;
  const height = boxElemTwo.offsetHeight;
  const currentBtn = event.target.getAttribute('id');

  switch (currentBtn) {
    case 'decreaseTwo':
      boxElemTwo.style.width = `${width - 10}px`;
      boxElemTwo.style.height = `${height - 10}px`;
      break;
    case 'increaseTwo':
      boxElemTwo.style.width = `${width + 10}px`;
      boxElemTwo.style.height = `${height + 10}px`;
      break;
  }
}
