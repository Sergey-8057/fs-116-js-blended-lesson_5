const COLOR_THEME_LS = 'colorTheme';
const TASKS_KEY = 'tasks';

export function getCurrentTheme() {
  return localStorage.getItem(COLOR_THEME_LS) || 'light';
}

export function setCurrentTheme(theme) {
  localStorage.setItem(COLOR_THEME_LS, theme);
}

export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function savedTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
