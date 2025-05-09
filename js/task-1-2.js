// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

console.log('\n%c006' + '='.repeat(50) + '006\n\n', 'color: green; font-weight: 900;');

const lastDataTopicElem = document.querySelectorAll('[data-topic]');
console.log(`first data-topic: ${lastDataTopicElem[lastDataTopicElem.length - 1].dataset.topic}`);

console.log('\n007' + '='.repeat(50) + '007\n\n');

const headOneElem = document.querySelector('h1');
const nextElem = headOneElem.nextElementSibling;
console.log(nextElem);

console.log('\n008' + '='.repeat(50) + '008\n\n');

console.group('Task 8');
const headThreeElems = document.querySelectorAll('h3');
headThreeElems.forEach(head => console.log(`head-3: ${head.textContent}`));
console.groupEnd();


console.log('\n009' + '='.repeat(50) + '009\n\n');

const style = document.createElement('style'); // Создаем CSS-правило
style.textContent = `
  .active {
    color: red;
  }
`;
document.head.appendChild(style);
setTimeout(() => {
  headThreeElems.forEach(head => head.classList.add('active')); // Добавляем класс 'active' ко всем <h3>
}, 2000);
console.log('Changed the color of the headers-3 to %cred', 'color: red; font-weight: 600;');

console.log('\n010' + '='.repeat(50) + '010\n\n');

const listDataTopicElem = document.querySelectorAll('[data-topic]');
const navigationDataTopic = Array.from(listDataTopicElem).find(
  elem => elem.dataset.topic === 'navigation'
);
console.log(navigationDataTopic);

const navigationElem = document.querySelector('[data-topic="navigation"]'); // Альтернативный вариант
console.log(navigationElem);

console.log('\n%cEND' + '='.repeat(50) + 'END\n\n', 'color: red; font-weight: 900;');
