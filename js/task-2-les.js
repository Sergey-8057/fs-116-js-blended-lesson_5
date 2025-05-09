//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const clickBtn = document.querySelector('#swapButton');

clickBtn.addEventListener('click', () => {
  const inputLeft = document.querySelector('#leftSwapInput');
  const inputRight = document.querySelector('#rightSwapInput');
  [inputLeft.value, inputRight.value] = [inputRight.value, inputLeft.value];
});
