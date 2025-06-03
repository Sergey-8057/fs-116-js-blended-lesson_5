//TODO: № 2 ==============================================
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const inputElem = document.querySelector('input[name=taskName]');
const formElem = document.querySelector('#task-form');
const ulElem = document.querySelector('#task-list');

const TASKS_KEY = 'tasks';
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

formElem.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();

  const task = inputElem.value.trim();

  if (task !== '') {
    tasks.push(task);
    inputElem.value = '';
    renderTask();
    savedTasks();
  }
}

function renderTask() {
  ulElem.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerText = task;
    const btnTask = document.createElement('button');
    btnTask.innerText = 'Delete';
    btnTask.dataset.index = index;

    btnTask.addEventListener('click', deleteTask);

    li.appendChild(btnTask);
    ulElem.appendChild(li);
  });
}

function savedTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function deleteTask(event) {
  const taskIndex = event.target.dataset.index;
  console.log(taskIndex);
  tasks.splice(taskIndex, 1);
  renderTask();
  savedTasks();
}

renderTask();
