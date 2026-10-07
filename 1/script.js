// Ждем, пока документ полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cta-button');

    // Обработка клика на кнопку
    button.addEventListener('click', () => {
        alert('Спасибо за клик! Код работает отлично.');
    });
});