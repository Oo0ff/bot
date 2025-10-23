let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let selectedGenre = "";

// Получаем все кнопки
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

// Обработчики для кнопок
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

function toggleMainButton(genre, text) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(text);
        selectedGenre = genre;
        tg.MainButton.show();
    }
}

// Обработка нажатия основной кнопки
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(selectedGenre);
});

// Показываем информацию о пользователе (опционально)
let usercard = document.getElementById("usercard");
let profileName = tg.initDataUnsafe.user?.first_name || "Пользователь";
usercard.innerHTML = `<p>Добро пожаловать, ${profileName}!</p>`;
