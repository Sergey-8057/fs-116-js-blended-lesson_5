// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

console.log('\n%c001' + '='.repeat(50) + '001\n\n', 'color: green; font-weight: 900;');

const bodyElem = document.querySelector('body');
console.log(bodyElem);
const bodyElem2 = document.body; // быстрее
console.log(bodyElem2);

console.log('\n002' + '='.repeat(50) + '002\n\n');

const headElem = document.querySelector('#title');
console.log(headElem);
const headElem2 = document.getElementById('title'); // Альтернативный вариант
console.log(headElem2);

console.log('\n003' + '='.repeat(50) + '003\n\n');

const listElem3 = document.querySelector('.list');
console.log(listElem3);
const listElem2 = document.getElementsByClassName('list')[0]; // Альтернативный вариант
console.log(listElem2);

console.log('\n004' + '='.repeat(50) + '004\n\n');

const dataTopicElems = document.querySelectorAll('[data-topic]');
console.log(dataTopicElems);
dataTopicElems.forEach(elem => console.log(`data-topic: ${elem.dataset.topic}`));

console.log('\n005' + '='.repeat(50) + '005\n\n');

const firstDataTopicElem = document.querySelector('[data-topic]');
console.log(firstDataTopicElem);
console.log(`first data-topic: ${firstDataTopicElem.dataset.topic}`);

console.log('\n%cEND' + '='.repeat(50) + 'END\n\n', 'color: red; font-weight: 900;');
