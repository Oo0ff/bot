// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();

// Настройка основной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2c3e50";

let selectedGenre = "";

// Получение всех кнопок жанров
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

// Обработчики для кнопок жанров
btn1.addEventListener("click", function() {
    toggleMainButton("comedy", "Показать комедии");
});

btn2.addEventListener("click", function() {
    toggleMainButton("action", "Показать боевики");
});

btn3.addEventListener("click", function() {
    toggleMainButton("drama", "Показать драмы");
});

btn4.addEventListener("click", function() {
    toggleMainButton("fantasy", "Показать фантастику");
});

btn5.addEventListener("click", function() {
    toggleMainButton("romance", "Показать мелодрамы");
});

btn6.addEventListener("click", function() {
    toggleMainButton("horror", "Показать ужасы");
});

// Функция переключения основной кнопки
function toggleMainButton(genre, text) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
        selectedGenre = "";
    } else {
        tg.MainButton.setText(text);
        selectedGenre = genre;
        tg.MainButton.show();
    }
}

// Обработка нажатия основной кнопки
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    if (selectedGenre) {
        tg.sendData(selectedGenre);
    }
});

// Показ информации о пользователе
let userinfo = document.getElementById("userinfo");
let profileName = tg.initDataUnsafe.user?.first_name || "Пользователь";
userinfo.innerHTML = `<p>Добро пожаловать, ${profileName}!</p>`;
