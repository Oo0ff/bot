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

// Получение всех карточек жанров
const genreCards = document.querySelectorAll('.genre-card');

// Обработчики для кнопок жанров
btn1.addEventListener("click", function() {
    selectGenre("comedy", "Показать комедии", this);
});

btn2.addEventListener("click", function() {
    selectGenre("action", "Показать боевики", this);
});

btn3.addEventListener("click", function() {
    selectGenre("drama", "Показать драмы", this);
});

btn4.addEventListener("click", function() {
    selectGenre("fantasy", "Показать фантастику", this);
});

btn5.addEventListener("click", function() {
    selectGenre("romance", "Показать мелодрамы", this);
});

btn6.addEventListener("click", function() {
    selectGenre("horror", "Показать ужасы", this);
});

// Функция выбора жанра
function selectGenre(genre, text, button) {
    // Снимаем выделение со всех карточек
    genreCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Добавляем выделение текущей карточке
    const genreCard = button.closest('.genre-card');
    genreCard.classList.add('active');
    
    // Устанавливаем выбранный жанр
    selectedGenre = genre;
    tg.MainButton.setText(text);
    tg.MainButton.show();
}

// Обработка нажатия основной кнопки
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    if (selectedGenre) {
        tg.sendData(selectedGenre);
        // Сбрасываем выделение после отправки
        genreCards.forEach(card => {
            card.classList.remove('active');
        });
        selectedGenre = "";
        tg.MainButton.hide();
    }
});

// Функция для общения с DeepSeek API
async function getDeepSeekResponse(message) {
    const apiKey = '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';
    const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
    
    const requestData = {
        model: 'deepseek/deepseek-r1-0528-qwen3-8b:free',
        messages: [
            {
                role: 'system',
                content: 'Ты помощник в кинотеатре. Отвечай кратко и полезно. Помогай с выбором фильмов, давай рекомендации и информацию о кино.'
            },
            {
                role: 'user',
                content: message
            }
        ],
        temperature: 0.7,
        max_tokens: 500
    };
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://oo0ff.github.io/bot/',
                'X-Title': 'CinemaBot'
            },
            body: JSON.stringify(requestData)
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.choices[0].message.content;
        } else {
            return 'Извините, в данный момент не могу подключиться к AI. Попробуйте позже.';
        }
    } catch (error) {
        return 'Ошибка соединения. Проверьте интернет и попробуйте еще раз.';
    }
}

// Функция для отправки сообщений
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.querySelector('.chat-input button');
    
    if (userInput.value.trim() === '') return;
    
    // Блокируем кнопку отправки
    sendButton.disabled = true;
    sendButton.textContent = 'Отправка...';
    
    // Показываем сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatMessages.appendChild(userMessage);
    
    const userText = userInput.value;
    userInput.value = '';
    
    // Показываем индикатор набора
    showTypingIndicator();
    
    // Получаем ответ от AI
    const aiResponse = await getDeepSeekResponse(userText);
    
    // Убираем индикатор набора
    removeTypingIndicator();
    
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = aiResponse;
    chatMessages.appendChild(botMessage);
    
    // Разблокируем кнопку отправки
    sendButton.disabled = false;
    sendButton.textContent = 'Отправить';
    
    // Прокручиваем вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Индикатор набора сообщения
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot-message typing-indicator';
    typingIndicator.id = 'typingIndicator';
    
    typingIndicator.innerHTML = `
        Помощник печатает
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Enter для отправки
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Показ информации о пользователе
let userinfo = document.getElementById("userinfo");
let profileName = tg.initDataUnsafe.user?.first_name || "Пользователь";
userinfo.innerHTML = `<p>Добро пожаловать, ${profileName}!</p>`;

// Фокусировка на поле ввода при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userInput').focus();
});
