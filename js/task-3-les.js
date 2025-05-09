// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

const clickBtn = document.querySelector('.btnChange');

clickBtn.addEventListener('click', () => {
  const paragraphs = document.querySelectorAll('.paragraph');
  console.log(paragraphs.length);

  paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = index + 1;
  });
});