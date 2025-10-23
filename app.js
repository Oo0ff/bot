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
        showTypingIndicator();
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
        
        removeTypingIndicator();
        
        if (response.ok) {
            const data = await response.json();
            return data.choices[0].message.content;
        } else {
            return 'Извините, в данный момент не могу подключиться к AI. Попробуйте позже.';
        }
    } catch (error) {
        removeTypingIndicator();
        return 'Ошибка соединения. Проверьте интернет и попробуйте еще раз.';
    }
}

// Функция для отправки сообщений
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (userInput.value.trim() === '') return;
    
    // Показываем сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatMessages.appendChild(userMessage);
    
    const userText = userInput.value;
    userInput.value = '';
    
    // Получаем ответ от AI
    const aiResponse = await getDeepSeekResponse(userText);
    
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = aiResponse;
    chatMessages.appendChild(botMessage);
    
    // Прокручиваем вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Индикатор набора сообщения
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot-message';
    typingIndicator.id = 'typingIndicator';
    typingIndicator.textContent = 'Помощник печатает...';
    typingIndicator.style.fontStyle = 'italic';
    typingIndicator.style.opacity = '0.7';
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
