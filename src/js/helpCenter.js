const questions = document.querySelectorAll('.accordions');

questions.forEach(question => {
    const icon = question.querySelector('.icon');
    const answer = question.querySelector('.answer');

    question.addEventListener('click', () => {

        if (icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});