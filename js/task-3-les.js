// TODO: ЗАДАЧА 3 на обіцянки (Promise) ====================================

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "Hello world 👋";
// }

function greet() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello world 👋');
    }, 2000);
  });
}

// Использование:
greet().then(message => console.log(message));
greet().then(console.log); // краткий способ
console.log('greet =', greet() instanceof Promise); // true, если это промис

// Альтенативный вариант

function greetTwo() {
  return 'Hello world Two 👋';
}

function greetWithDelay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(greetTwo());
    }, 2000);
  });
}

greetWithDelay().then(result => {
  console.log(result); // "Hello world Two 👋" через 2 секунды
});

console.log('greetWithDelay =', greetWithDelay() instanceof Promise); // true, если это промис

// Короткая запись

const greetThree = () =>
  new Promise(resolve => setTimeout(() => resolve('Hello world Three 👋'), 2000));
greetThree().then(console.log);
console.log('greetThree =', greetThree() instanceof Promise); // true, если это промис
