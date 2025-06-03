//TODO: № 4 ==============================================
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду
//  змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

const refs = {
  bodyElem: document.body,
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let colorIntervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColorChange() {
  // Проверяем, нет ли уже запущенного интервала
  if (colorIntervalId) return;

  // Меняем цвет сразу при старте
  refs.bodyElem.style.backgroundColor = getRandomHexColor();

  // Устанавливаем интервал для смены цвета
  colorIntervalId = setInterval(() => {
    refs.bodyElem.style.backgroundColor = getRandomHexColor();
  }, 1000);

  // Блокируем кнопку старта
  refs.btnStart.disabled = true;
}

function stopColorChange() {
  clearInterval(colorIntervalId);
  colorIntervalId = null;
  refs.btnStart.disabled = false;
}
refs.btnStart.addEventListener('click', startColorChange);
refs.btnStop.addEventListener('click', stopColorChange);
