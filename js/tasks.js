import { getCurrentTheme, setCurrentTheme, tasks, savedTasks } from './localStorageApi.js';
import { bodyElem, formElem } from './refs.js';
import { renderTask } from './renderTasks.js';

export function currentTheme() {
  const theme = getCurrentTheme();
  bodyElem.classList.remove('theme-dark', 'theme-light');
  bodyElem.classList.add(`theme-${theme}`);
  console.log('Applied theme:', theme);
}

export function changeColorTheme(event) {
  const currentColor = getCurrentTheme();
  const newTheme = currentColor === 'dark' ? 'light' : 'dark';

  // Сначала сохраняем новую тему
  setCurrentTheme(newTheme);

  // Затем применяем её
  currentTheme(newTheme);

  console.log('Switched from', currentColor, 'to', newTheme);
}

// Обработка формы после клика на "ADD"

export function addTask(event) {
  event.preventDefault();

  const title = formElem.taskName.value.trim();
  const description = formElem.taskDescription.value.trim();

  if (title === '') {
    iziToast.show({
      message: `Необходимо заполнить поле "Title"`,
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'red',
      close: true,
    });
    return;
  }

  if (description === '') {
    iziToast.show({
      message: `Необходимо заполнить поле "Description"`,
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'red',
      close: true,
    });
    return;
  }

  const task = {
    title,
    description,
  };

  tasks.push(task);
  formElem.taskName.value = '';
  formElem.taskDescription.value = '';
  savedTasks();
  renderTask();
}
