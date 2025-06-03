//TODO: № 1 ЗАДАЧА  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const COLOR_THEME_LS = 'colorTheme';

const bodyElem = document.body;
const checkboxElem = bodyElem.querySelector('#checkbox');
let currentColorTheme = localStorage.getItem(COLOR_THEME_LS);
if (currentColorTheme === 'dark') {
  checkbox.checked = true;
  document.body.classList.add('dark');
}

checkboxElem.addEventListener('change', event => {
  const isChecked = event.target.checked;

  if (isChecked) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    currentColorTheme = localStorage.setItem(COLOR_THEME_LS, 'dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    currentColorTheme = localStorage.setItem(COLOR_THEME_LS, 'white');
  }

});
