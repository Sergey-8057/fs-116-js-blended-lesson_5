// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

console.log('\n%c016' + '='.repeat(50) + '016\n\n', 'color: green; font-weight: 900;');

const liElems = document.querySelectorAll('li');
const liElem = Array.from(liElems).find(elem => elem.querySelector('.completed'));
setTimeout(() => {
  liElem.remove();
}, 14000);
console.log(
  `Removed element %c"li"%c which has heading "${liElem.querySelector('.completed').textContent}"`,
  'color: red; font-weight: 700;',
  ''
);

console.log('\n017' + '='.repeat(50) + '017\n\n');

const titleElem = document.querySelector('#title');
let textParagraph = "Об'єктна модель документа (Document Object Model)";
const addParagraph = `<p>${textParagraph}</p>`;
setTimeout(() => {
  titleElem.insertAdjacentHTML('afterend', addParagraph);
}, 17000);
console.log(`After heading "${titleElem.textContent}" added text "${textParagraph}"`);

console.log('\n018' + '='.repeat(50) + '018\n\n');

const newItem = document.createElement('li');
const heading = document.createElement('h3');
heading.textContent = 'Властивість innerHTML (Варіант - 1)';
const paragraph = document.createElement('p');
paragraph.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
newItem.append(heading, paragraph);
const listElem = document.querySelector('.list');
setTimeout(() => {
  listElem.append(newItem);
}, 20000);
console.log(
  'Added a new list item to the end of the list using method %c"elem.append(el1, el2, ...)"',
  'font-weight: 900;'
);

console.log('\n019' + '='.repeat(50) + '019\n\n');

let headForlastItem = 'Властивість innerHTML (Варіант - 2)';
let paragraphForlastItem =
  'І ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
const contextItem = `<h3>${headForlastItem}</h3><p>${paragraphForlastItem}</p>`;
const lastItem = `<li>${contextItem}</li>`;
setTimeout(() => {
  listElem.insertAdjacentHTML('beforeend', lastItem);
}, 23000);
console.log(
  'Added a new list item to the end of the list using method %c"insertAdjacentHTML"',
  'font-weight: 900;'
);

console.log('\n020' + '='.repeat(50) + '020\n\n');

setTimeout(() => {
  listElem.remove();
}, 27000);
console.log('The entire list has been %cremoved!!!', 'color: red; font-weight: 600;');

console.log('\n%cEND' + '='.repeat(50) + 'END\n\n', 'color: red; font-weight: 900;');
