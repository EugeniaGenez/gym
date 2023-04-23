const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    answers[index].style.display = 'block';
  });

  answers[index].addEventListener('click', () => {
    answers[index].style.display = 'none';
  });
});

