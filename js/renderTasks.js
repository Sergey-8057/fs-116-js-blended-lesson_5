import { ulElem } from './refs.js';
import { tasks, savedTasks } from './localStorageApi.js';

export function renderTask() {
  ulElem.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('task-list-item');

    const btnTask = document.createElement('button');
    btnTask.innerText = 'Delete';
    btnTask.dataset.index = index;
    btnTask.classList.add('task-list-item-btn');
    li.appendChild(btnTask);

    const titleTask = document.createElement('h3');
    titleTask.innerText = task.title;
    li.appendChild(titleTask);

    const descriptionTask = document.createElement('p');
    descriptionTask.innerText = task.description;
    li.appendChild(descriptionTask);
    ulElem.appendChild(li);
  });
}

export function deleteTask(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') return;
  const taskIndex = event.target.dataset.index;
  tasks.splice(taskIndex, 1);
  savedTasks();
  renderTask();
}
