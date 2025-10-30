// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();

// Настройка основной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2c3e50";

// Данные о фильмах с временем и ценами
const MOVIES_DATA = {
    comedy: [
        {
            id: 1,
            title: "Маппеты",
            description: "Смешные приключения известных кукол",
            rating: "7.8/10",
            sessions: ["12:30", "16:45", "19:20"],
            price: 450,
            vipPrice: 650
        },
        {
            id: 2,
            title: "Славные парни",
            description: "Неудачливые грабители в комичных ситуациях",
            rating: "7.9/10",
            sessions: ["14:15", "18:00", "21:00"],
            price: 450,
            vipPrice: 650
        }
    ],
    action: [
        {
            id: 3,
            title: "Форсаж 10",
            description: "Взрывные гонки и невероятные трюки",
            rating: "8.1/10",
            sessions: ["14:00", "18:30", "21:15"],
            price: 500,
            vipPrice: 700
        },
        {
            id: 4,
            title: "Джон Уик 4",
            description: "Легенда киллеров в эпической битве",
            rating: "8.3/10",
            sessions: ["15:20", "19:45", "22:30"],
            price: 500,
            vipPrice: 700
        }
    ],
    drama: [
        {
            id: 5,
            title: "Оппенгеймер",
            description: "История создателя атомной бомбы",
            rating: "8.8/10",
            sessions: ["15:00", "19:15", "22:00"],
            price: 480,
            vipPrice: 680
        },
        {
            id: 6,
            title: "Назад в будущее",
            description: "Культовая история о путешествиях во времени",
            rating: "8.5/10",
            sessions: ["12:00", "16:30", "19:45"],
            price: 400,
            vipPrice: 600
        }
    ],
    fantasy: [
        {
            id: 7,
            title: "Дюна: Часть вторая",
            description: "Эпическая фантастика о пустынной планете",
            rating: "8.7/10",
            sessions: ["14:45", "18:30", "21:45"],
            price: 520,
            vipPrice: 720
        },
        {
            id: 8,
            title: "Интерстеллар",
            description: "Путешествие через червоточину",
            rating: "8.6/10",
            sessions: ["16:00", "19:45", "22:30"],
            price: 480,
            vipPrice: 680
        }
    ],
    romance: [
        {
            id: 9,
            title: "Титаник",
            description: "Легендарная история любви",
            rating: "8.9/10",
            sessions: ["13:30", "17:15", "20:00"],
            price: 460,
            vipPrice: 660
        },
        {
            id: 10,
            title: "Запах женщины",
            description: "История неожиданной дружбы",
            rating: "8.4/10",
            sessions: ["15:45", "19:30"],
            price: 420,
            vipPrice: 620
        }
    ],
    horror: [
        {
            id: 11,
            title: "Пила 10",
            description: "Новые смертельные ловушки",
            rating: "7.2/10",
            sessions: ["20:00", "22:45"],
            price: 440,
            vipPrice: 640
        },
        {
            id: 12,
            title: "Заклятие 4",
            description: "Продолжение страшной истории",
            rating: "7.4/10",
            sessions: ["19:30", "22:15"],
            price: 440,
            vipPrice: 640
        }
    ]
};

// Текущее состояние заказа
let currentOrder = {
    genre: null,
    movie: null,
    time: null,
    seats: [],
    totalPrice: 0
};

// Заранее занятые места (для демонстрации)
const OCCUPIED_SEATS = ['A3', 'B5', 'C2', 'D4', 'E6', 'F1', 'G7'];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeGenreButtons();
    document.getElementById('userInput').focus();
});

// Инициализация кнопок жанров
function initializeGenreButtons() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    genreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const genre = this.getAttribute('data-genre');
            selectGenre(genre);
        });
    });
}

// Выбор жанра
function selectGenre(genre) {
    currentOrder.genre = genre;
    showMovies(genre);
    showScreen('movieScreen');
}

// Показать фильмы выбранного жанра
function showMovies(genre) {
    const moviesList = document.getElementById('moviesList');
    const screenTitle = document.getElementById('movieScreenTitle');
    
    // Установка заголовка
    const genreNames = {
        comedy: 'Комедии',
        action: 'Боевики',
        drama: 'Драмы',
        fantasy: 'Фантастика',
        romance: 'Мелодрамы',
        horror: 'Ужасы'
    };
    
    screenTitle.textContent = genreNames[genre];
    
    // Очистка списка
    moviesList.innerHTML = '';
    
    // Добавление фильмов
    const movies = MOVIES_DATA[genre];
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <div class="movie-title">${movie.title}</div>
            <div class="movie-description">${movie.description}</div>
            <div class="movie-rating">⭐ ${movie.rating}</div>
            <div class="movie-sessions">Сеансы: ${movie.sessions.join(', ')}</div>
            <button class="movie-btn" onclick="selectMovie(${movie.id})">Выбрать</button>
        `;
        moviesList.appendChild(movieCard);
    });
}

// Выбор фильма
function selectMovie(movieId) {
    // Найти фильм по ID
    let selectedMovie = null;
    for (const genre in MOVIES_DATA) {
        const movie = MOVIES_DATA[genre].find(m => m.id === movieId);
        if (movie) {
            selectedMovie = movie;
            break;
        }
    }
    
    if (selectedMovie) {
        currentOrder.movie = selectedMovie;
        showTimes(selectedMovie);
        showScreen('timeScreen');
    }
}

// Показать время сеансов
function showTimes(movie) {
    const selectedMovieInfo = document.getElementById('selectedMovieInfo');
    const timesList = document.getElementById('timesList');
    const screenTitle = document.getElementById('timeScreenTitle');
    
    // Обновление информации о фильме
    screenTitle.textContent = movie.title;
    selectedMovieInfo.innerHTML = `
        <strong>${movie.title}</strong><br>
        ${movie.description}<br>
        ⭐ ${movie.rating}
    `;
    
    // Очистка списка времени
    timesList.innerHTML = '';
    
    // Добавление времени сеансов
    movie.sessions.forEach(time => {
        const timeButton = document.createElement('button');
        timeButton.className = 'time-btn';
        timeButton.textContent = time;
        timeButton.onclick = function() {
            selectTime(time);
        };
        timesList.appendChild(timeButton);
    });
}

// Выбор времени
function selectTime(time) {
    currentOrder.time = time;
    showSeats();
    showScreen('seatsScreen');
}

// Показать экран выбора мест
function showSeats() {
    const selectedSessionInfo = document.getElementById('selectedSessionInfo');
    const seatsGrid = document.getElementById('seatsGrid');
    
    // Обновление информации о сеансе
    selectedSessionInfo.innerHTML = `
        <strong>${currentOrder.movie.title}</strong><br>
        Время: ${currentOrder.time}<br>
        Зал: 1
    `;
    
    // Очистка сетки мест
    seatsGrid.innerHTML = '';
    
    // Генерация мест (5 рядов A-E, 8 мест в ряду)
    const rows = ['A', 'B', 'C', 'D', 'E'];
    rows.forEach(row => {
        for (let number = 1; number <= 8; number++) {
            const seatId = row + number;
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = seatId;
            seat.setAttribute('data-seat', seatId);
            
            // Проверка занятости места
            if (OCCUPIED_SEATS.includes(seatId)) {
                seat.classList.add('occupied');
            } else {
                seat.classList.add('available');
                // Случайные VIP места
                if (Math.random() > 0.7) {
                    seat.classList.add('vip');
                }
                seat.onclick = function() {
                    toggleSeat(seatId);
                };
            }
            
            seatsGrid.appendChild(seat);
        }
    });
    
    // Обновление информации о выбранных местах
    updateSelectedSeats();
}

// Переключение выбора места
function toggleSeat(seatId) {
    const seatIndex = currentOrder.seats.indexOf(seatId);
    const seatElement = document.querySelector(`[data-seat="${seatId}"]`);
    
    if (seatIndex === -1) {
        // Добавление места
        currentOrder.seats.push(seatId);
        seatElement.classList.add('selected');
    } else {
        // Удаление места
        currentOrder.seats.splice(seatIndex, 1);
        seatElement.classList.remove('selected');
    }
    
    updateSelectedSeats();
}

// Обновление информации о выбранных местах
function updateSelectedSeats() {
    const selectedSeatsCount = document.getElementById('selectedSeatsCount');
    const selectedSeatsList = document.getElementById('selectedSeatsList');
    const totalPrice = document.getElementById('totalPrice');
    
    // Обновление счетчика
    selectedSeatsCount.textContent = currentOrder.seats.length;
    
    // Обновление списка мест
    selectedSeatsList.innerHTML = '';
    let total = 0;
    
    currentOrder.seats.forEach(seatId => {
        const seatBadge = document.createElement('span');
        seatBadge.className = 'seat-badge';
        seatBadge.textContent = seatId;
        
        // Определение цены (VIP или обычное)
        const seatElement = document.querySelector(`[data-seat="${seatId}"]`);
        const isVip = seatElement.classList.contains('vip');
        const price = isVip ? currentOrder.movie.vipPrice : currentOrder.movie.price;
        total += price;
        
        selectedSeatsList.appendChild(seatBadge);
    });
    
    // Обновление общей стоимости
    currentOrder.totalPrice = total;
    totalPrice.textContent = total;
}

// Подтверждение покупки
function confirmPurchase() {
    if (currentOrder.seats.length === 0) {
        alert('Пожалуйста, выберите хотя бы одно место!');
        return;
    }
    
    // Показ экрана подтверждения
    showConfirmationScreen();
    showScreen('confirmationScreen');
}

// Показать экран подтверждения
function showConfirmationScreen() {
    const ticketInfo = document.getElementById('ticketInfo');
    
    ticketInfo.innerHTML = `
        <h3>🎫 Ваши билеты</h3>
        <div class="ticket-info"><strong>Фильм:</strong> ${currentOrder.movie.title}</div>
        <div class="ticket-info"><strong>Время:</strong> ${currentOrder.time}</div>
        <div class="ticket-info"><strong>Зал:</strong> 1</div>
        <div class="ticket-info"><strong>Места:</strong> ${currentOrder.seats.join(', ')}</div>
        <div class="ticket-info"><strong>Общая стоимость:</strong> ${currentOrder.totalPrice} руб.</div>
        <div class="ticket-info"><strong>Код брони:</strong> ${generateBookingCode()}</div>
    `;
}

// Генерация кода брони
function generateBookingCode() {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
}

// Начать новый заказ
function startNewOrder() {
    // Сброс текущего заказа
    currentOrder = {
        genre: null,
        movie: null,
        time: null,
        seats: [],
        totalPrice: 0
    };
    
    // Показать начальный экран
    showScreen('genreScreen');
}

// Показать определенный экран
function showScreen(screenId) {
    // Скрыть все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать нужный экран
    document.getElementById(screenId).classList.add('active');
}

// Функции для чата с AI (остаются без изменений)
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

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.querySelector('.chat-input button');
    
    if (userInput.value.trim() === '') return;
    
    sendButton.disabled = true;
    sendButton.textContent = 'Отправка...';
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatMessages.appendChild(userMessage);
    
    const userText = userInput.value;
    userInput.value = '';
    
    showTypingIndicator();
    const aiResponse = await getDeepSeekResponse(userText);
    removeTypingIndicator();
    
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = aiResponse;
    chatMessages.appendChild(botMessage);
    
    sendButton.disabled = false;
    sendButton.textContent = 'Отправить';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

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

// Enter для отправки в чате
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
