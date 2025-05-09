// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const boxElem = document.querySelector('.js-box');
const sizeBox = boxElem.querySelector('.box');
const SIZE_STEP = 20;

boxElem.addEventListener('click', event => {
  if (!event.target.matches('button')) return; // Проверяем, что кликнули именно по кнопке

  const widthBox = sizeBox.offsetWidth;
  const heightBox = sizeBox.offsetHeight;
  const changeSize = event.target.id;

  if (changeSize === 'decrease' && widthBox > 20) {
    sizeBox.style.width = `${widthBox - SIZE_STEP}px`;
    sizeBox.style.height = `${heightBox - SIZE_STEP}px`;
  } else if (changeSize === 'increase') {
    sizeBox.style.width = `${widthBox + SIZE_STEP}px`;
    sizeBox.style.height = `${heightBox + SIZE_STEP}px`;
  }
});
