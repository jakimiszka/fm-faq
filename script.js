const answers = document.querySelectorAll('.faq_answer');
const questions = document.querySelectorAll('.faq_question');
const faqSection = document.querySelector('.faq_section');

faqSection.addEventListener('click', (event) => {
  const question = event.target.closest('.faq_question');
  if (question) {
    questions.forEach((item) => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('img');
      answer.classList.remove('active');
      icon.src = answer.classList.contains('active') ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';
    });

    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    const icon = question.querySelector('img');
    icon.src = answer.classList.contains('active') ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';
  }
});