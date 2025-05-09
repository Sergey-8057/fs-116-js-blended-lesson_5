//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

const clickBtn = document.querySelector('#passwordButton');

clickBtn.addEventListener('click', () => {
  const input = document.querySelector('#passwordInput');
  input.type === 'text' ? (input.type = 'password') : (input.type = 'text');
  clickBtn.textContent = input.type === 'password' ? 'Розкрити' : 'Приховати';
});
