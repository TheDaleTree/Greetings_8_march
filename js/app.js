let clicked = false; // Флаг для отслеживания нажатия

document.addEventListener('DOMContentLoaded', function () {
    shakeAnimation(); // Запускаем анимацию тряски при загрузке страницы
});

// Функция для анимации тряски
function shakeAnimation() {
    const messageElement = document.querySelector('.message img');

    // Добавляем класс с анимацией тряски
    messageElement.classList.add('shake');
}

// Функция для анимации "звонка" и обработки клика
function handleClick() {
    // Если нажатие уже произошло
    if (clicked) {
        return; // Просто выходим из функции
    }

    const messageElement = document.querySelector('.message img');

    // Удаляем класс с анимацией тряски
    messageElement.classList.remove('shake');

    // Добавляем класс с анимацией "звонка"
    messageElement.classList.add('ring');

    // Удаляем класс с анимацией "звонка" через 2 секунды (длительность анимации "звонка")
    setTimeout(() => {
        messageElement.classList.remove('ring');
        messageElement.style.display = 'none';

        // Ваш дополнительный код, который должен выполняться после анимации
        const messageText = "Желаю в этот женский день весенний,Чтоб жизнь дарила много сказочных мгновений,Чтоб воплощались грезы,сны,мечты и планы,Чтоб были чувства и взаимны,и желанны. С 8 Марта!";
        const messageTextElement = document.querySelector('.typing-text');
        typeText(messageText, messageTextElement);

        clicked = true; // Устанавливаем флаг нажатия в true
    }, 2000);
}

// Функция для набирающегося текста
function typeText(text, element, index = 0) {
    if (index < text.length) {
        // Добавляем символ к тексту элемента
        element.textContent += text.charAt(index);
        index++;
        // Вызываем функцию снова с небольшой задержкой
        setTimeout(() => {
            typeText(text, element, index);
        }, 40); // Задержка между символами (в миллисекундах)
    } else {
        // Когда текст набран полностью, показываем изображение
        const marchImage = document.querySelector('.March');
        marchImage.style.display = 'block'; // Показываем изображение
    }
}
