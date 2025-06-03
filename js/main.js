import { btnThemeToggle, formElem, ulElem } from './refs.js';
import { currentTheme, changeColorTheme, addTask } from './tasks.js';
import { renderTask, deleteTask } from './renderTasks.js';

currentTheme();

btnThemeToggle.addEventListener('click', changeColorTheme);

//==============================================

renderTask();

formElem.addEventListener('submit', addTask);
ulElem.addEventListener('click', deleteTask);
