// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

console.log('\n%c011' + '='.repeat(50) + '011\n\n', 'color: green; font-weight: 900;');

const navigationTopic = document.querySelector('[data-topic="navigation"]');
setTimeout(() => {
  navigationTopic.style.backgroundColor = 'yellow';
}, 5000);
console.log(
  'Changed the background color of the item data-topic="navigation" to %cyellow',
  'color: orange; font-weight: 600;'
);

console.log('\n012' + '='.repeat(50) + '012\n\n');

const paragraphElem = navigationTopic.querySelector('p');
setTimeout(() => {
  paragraphElem.textContent = 'Я змінив тут текст!';
}, 8000);
console.log('Change text in paragraph element data-topic="navigation" to "Я змінив тут текст"');

console.log('\n013' + '='.repeat(50) + '013\n\n');

const currentTopic = 'manipulation';
const findTopic = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(findTopic);

console.log('\n014' + '='.repeat(50) + '014\n\n');

setTimeout(() => {
  findTopic.style.backgroundColor = 'skyblue';
}, 11000);
console.log(
  `Changed the background color of the item data-topic="${currentTopic}" to %cblue`,
  'color: blue; font-weight: 600;'
);

console.log('\n015' + '='.repeat(50) + '015\n\n');

const classCompletedElem = document.querySelector('.completed');
console.log(classCompletedElem);

console.log('\n%cEND' + '='.repeat(50) + 'END\n\n', 'color: red; font-weight: 900;');
