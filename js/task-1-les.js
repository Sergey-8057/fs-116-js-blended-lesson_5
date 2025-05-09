//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

const clickBtn = document.querySelector('#alertButton');

clickBtn.addEventListener('click', () => {
  const input = document.querySelector('#alertInput');
  console.log(input.value);
});
