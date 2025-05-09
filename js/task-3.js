// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const formElem = document.querySelector('.js-contact-form');
const nameInput = formElem.querySelector('.js-username-input');
const policyCheckbox = formElem.querySelector('.js-policy-checkbox');
const spanElem = formElem.querySelector('.js-username-output');

const formData = {
  userName: '',
  accept: false,
};

nameInput.addEventListener('input', enterName);
nameInput.addEventListener('focus', focusName);
nameInput.addEventListener('blur', blurName);
formElem.addEventListener('submit', onSubmit);

// Task - 1
function enterName(event) {
  if (event.target.value.length > 6) {
    nameInput.classList.add('success');
    nameInput.classList.remove('error');
  } else {
    nameInput.classList.add('error');
    nameInput.classList.remove('success');
  }
  formData[event.target.name] = event.target.value.trim();
  // console.log('input = ', event.target.value);
}

// Task - 2
function focusName(event) {
  if (event.target.value) {
    nameInput.style.outline = '3px solid green';
  } else {
    nameInput.style.outline = '3px solid red';
  }
  // console.log('focus = ', event.target.value);
}

// Task - 3
function blurName(event) {
  spanElem.textContent = event.target.value.trim() || 'Anonymous';
  if (event.target.value) {
    nameInput.style.outline = '3px solid lime';
  } else {
    nameInput.style.outline = '3px solid red';
  }
  // console.log('blur = ', event.target.value);
}

// Task - 4
function onSubmit(event) {
  event.preventDefault();
  const isChecked = policyCheckbox.checked; // true или false
  formData.accept = isChecked;

  if (!formData.userName.trim()) {
    alert('Please fill in the "name" field');
    return;
  } else if (!formData.accept) {
    alert('To submit, please check the policy box');
    return;
  }

  console.log(formData);
  formElem.reset();
  formData.userName = '';
  formData.accept = false;
  spanElem.textContent = 'Anonymous';
  nameInput.style.outline = 'none';
}
