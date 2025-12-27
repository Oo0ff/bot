// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();

// Настройка основной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2c3e50";

// Данные о товарах
const PRODUCTS_DATA = {
    mens: [
        {
            id: 1,
            title: "Классический костюм",
            description: "Шерстяной костюм для офиса. Итальянская ткань.",
            price: 12500,
            sizes: ["S", "M", "L", "XL"],
            season: "Всесезонный",
            category: "Деловая одежда",
            imageUrl: "https://images.unsplash.com/photo-1594938350607-1a53b5d16a3b?w=400",
            colors: ["Черный", "Серый", "Синий"],
            inStock: true,
            rating: 4.8
        },
        {
            id: 2,
            title: "Джинсы Slim Fit",
            description: "Узкие джинсы премиум-качества",
            price: 4500,
            sizes: ["28", "30", "32", "34", "36"],
            season: "Демисезон",
            category: "Повседневная одежда",
            imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
            colors: ["Синий", "Черный"],
            inStock: true,
            rating: 4.6
        }
    ],
    womens: [
        {
            id: 3,
            title: "Платье коктейльное",
            description: "Элегантное вечернее платье",
            price: 8900,
            sizes: ["XS", "S", "M", "L"],
            season: "Вечерняя коллекция",
            category: "Вечерняя одежда",
            imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
            colors: ["Красный", "Черный", "Белый"],
            inStock: true,
            rating: 4.9
        },
        {
            id: 4,
            title: "Трикотажный свитер",
            description: "Мягкий свитер из кашемира",
            price: 6200,
            sizes: ["S", "M", "L"],
            season: "Зима",
            category: "Верхняя одежда",
            imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
            colors: ["Бежевый", "Серый", "Бордовый"],
            inStock: true,
            rating: 4.7
        }
    ],
    winter: [
        {
            id: 5,
            title: "Пуховик зимний",
            description: "Теплая зимняя куртка с натуральным пухом",
            price: 14500,
            sizes: ["S", "M", "L", "XL", "XXL"],
            season: "Зима",
            category: "Верхняя одежда",
            imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400",
            colors: ["Черный", "Синий", "Красный"],
            inStock: true,
            rating: 4.8
        },
        {
            id: 6,
            title: "Термобелье набор",
            description: "Комплект термобелья для активного отдыха",
            price: 3200,
            sizes: ["S", "M", "L", "XL"],
            season: "Зима",
            category: "Спортивная одежда",
            imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
            colors: ["Черный", "Серый"],
            inStock: true,
            rating: 4.5
        }
    ],
    summer: [
        {
            id: 7,
            title: "Футболка хлопковая",
            description: "Дышащая футболка из 100% хлопка",
            price: 1900,
            sizes: ["XS", "S", "M", "L", "XL"],
            season: "Лето",
            category: "Повседневная одежда",
            imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            colors: ["Белый", "Черный", "Синий", "Зеленый"],
            inStock: true,
            rating: 4.4
        },
        {
            id: 8,
            title: "Шорты льняные",
            description: "Легкие шорты для жаркой погоды",
            price: 2800,
            sizes: ["S", "M", "L", "XL"],
            season: "Лето",
            category: "Повседневная одежда",
            imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
            colors: ["Бежевый", "Белый", "Синий"],
            inStock: true,
            rating: 4.3
        }
    ],
    accessories: [
        {
            id: 9,
            title: "Кожаный ремень",
            description: "Классический кожаный ремень",
            price: 2400,
            sizes: ["S", "M", "L"],
            season: "Всесезонный",
            category: "Аксессуары",
            imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
            colors: ["Коричневый", "Черный"],
            inStock: true,
            rating: 4.6
        },
        {
            id: 10,
            title: "Шерстяной шарф",
            description: "Теплый шарф из натуральной шерсти",
            price: 1800,
            sizes: ["Один размер"],
            season: "Зима",
            category: "Аксессуары",
            imageUrl: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400",
            colors: ["Серый", "Бордовый", "Синий"],
            inStock: true,
            rating: 4.7
        }
    ]
};

// Информация о магазине
const STORE_INFO = {
    name: "FashionStore",
    address: "г. Москва, ул. Тверская, д. 15",
    phone: "+7 (495) 123-45-67",
    email: "info@fashionstore.ru",
    hours: "Ежедневно 10:00 - 22:00",
    mapUrl: "https://yandex.ru/maps/?text=Москва, Тверская, 15",
    deliveryUrl: "https://fashionstore.ru/delivery",
    returnUrl: "https://fashionstore.ru/returns"
};

// Текущее состояние заказа
let currentOrder = {
    category: null,
    product: null,
    selectedSize: null,
    cart: [],
    totalPrice: 0
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeCategoryButtons();
    document.getElementById('userInput').focus();
    updateCartDisplay();
});

// Инициализация кнопок категорий
function initializeCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            selectCategory(category);
        });
    });
}

// Выбор категории
function selectCategory(category) {
    currentOrder.category = category;
    showProducts(category);
    showScreen('productScreen');
}

// Показать товары выбранной категории
function showProducts(category) {
    const productsList = document.getElementById('productsList');
    const screenTitle = document.getElementById('productScreenTitle');
    
    // Установка заголовка
    const categoryNames = {
        mens: '👔 Мужская одежда',
        womens: '👗 Женская одежда',
        winter: '❄️ Зимняя коллекция',
        summer: '☀️ Летняя коллекция',
        accessories: '🧣 Аксессуары'
    };
    
    screenTitle.textContent = categoryNames[category];
    
    // Очистка списка
    productsList.innerHTML = '';
    
    // Добавление товаров
    const products = PRODUCTS_DATA[category];
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/400x400?text=FashionStore'">
            </div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-details">
                    <span class="product-price">${product.price} руб.</span>
                    <span class="product-rating">⭐ ${product.rating}</span>
                </div>
                <div class="product-sizes">Размеры: ${product.sizes.join(', ')}</div>
                <button class="product-btn" onclick="selectProduct(${product.id})">Выбрать</button>
            </div>
        `;
        productsList.appendChild(productCard);
    });
}

// Выбор товара
function selectProduct(productId) {
    // Найти товар по ID
    let selectedProduct = null;
    for (const category in PRODUCTS_DATA) {
        const product = PRODUCTS_DATA[category].find(p => p.id === productId);
        if (product) {
            selectedProduct = product;
            break;
        }
    }
    
    if (selectedProduct) {
        currentOrder.product = selectedProduct;
        showProductDetails(selectedProduct);
        showScreen('detailScreen');
    }
}

// Показать детали товара
function showProductDetails(product) {
    const productDetail = document.getElementById('productDetail');
    const sizesGrid = document.getElementById('sizesGrid');
    
    // Обновление информации о товаре
    productDetail.innerHTML = `
        <div class="product-image-large">
            <img src="${product.imageUrl}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/400x400?text=FashionStore'">
        </div>
        <div class="product-info-large">
            <h3>${product.title}</h3>
            <p class="product-description-large">${product.description}</p>
            <div class="product-meta">
                <div class="meta-item"><strong>Цена:</strong> ${product.price} руб.</div>
                <div class="meta-item"><strong>Сезон:</strong> ${product.season}</div>
                <div class="meta-item"><strong>Категория:</strong> ${product.category}</div>
                <div class="meta-item"><strong>Цвета:</strong> ${product.colors.join(', ')}</div>
                <div class="meta-item"><strong>Рейтинг:</strong> ⭐ ${product.rating}</div>
                <div class="meta-item"><strong>Наличие:</strong> ${product.inStock ? '✅ В наличии' : '❌ Нет в наличии'}</div>
            </div>
        </div>
    `;
    
    // Очистка сетки размеров
    sizesGrid.innerHTML = '';
    
    // Добавление размеров
    product.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = 'size-btn';
        sizeButton.textContent = size;
        sizeButton.onclick = function() {
            selectSize(size);
            // Сброс выделения у всех кнопок
            document.querySelectorAll('.size-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            // Выделение текущей кнопки
            this.classList.add('selected');
        };
        sizesGrid.appendChild(sizeButton);
    });
    
    // Обновление информации о выборе
    document.getElementById('selectedProductName').textContent = product.title;
    document.getElementById('selectedPrice').textContent = product.price;
}

// Выбор размера
function selectSize(size) {
    currentOrder.selectedSize = size;
    document.getElementById('selectedSize').textContent = size;
}

// Добавить в корзину
function addToCart() {
    if (!currentOrder.selectedSize) {
        alert('Пожалуйста, выберите размер!');
        return;
    }
    
    const cartItem = {
        id: currentOrder.product.id,
        title: currentOrder.product.title,
        size: currentOrder.selectedSize,
        price: currentOrder.product.price,
        image: currentOrder.product.imageUrl,
        quantity: 1
    };
    
    // Проверка, есть ли уже такой товар в корзине
    const existingItem = currentOrder.cart.find(item => 
        item.id === cartItem.id && item.size === cartItem.size
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentOrder.cart.push(cartItem);
    }
    
    updateCartDisplay();
    alert(`✅ "${currentOrder.product.title}" (размер ${currentOrder.selectedSize}) добавлен в корзину!`);
    
    // Сброс выбора
    currentOrder.selectedSize = null;
    document.getElementById('selectedSize').textContent = 'Не выбран';
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

// Купить сейчас
function buyNow() {
    if (!currentOrder.selectedSize) {
        alert('Пожалуйста, выберите размер!');
        return;
    }
    
    // Добавить товар в корзину
    addToCart();
    
    // Перейти к оформлению
    showScreen('cartScreen');
}

// Обновление отображения корзины
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    // Очистка корзины
    cartItems.innerHTML = '';
    
    if (currentOrder.cart.length === 0) {
        emptyCart.style.display = 'block';
        cartCount.textContent = '0';
        cartTotal.textContent = '0';
        return;
    }
    
    emptyCart.style.display = 'none';
    
    // Добавление товаров в корзину
    let total = 0;
    let itemCount = 0;
    
    currentOrder.cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-details">
                    <span>Размер: ${item.size}</span>
                    <span>Кол-во: ${item.quantity}</span>
                    <span>${item.price * item.quantity} руб.</span>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">🗑️</button>
        `;
        cartItems.appendChild(cartItem);
        
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });
    
    cartCount.textContent = itemCount;
    cartTotal.textContent = total;
}

// Удалить из корзины
function removeFromCart(index) {
    currentOrder.cart.splice(index, 1);
    updateCartDisplay();
}

// Оформить заказ
function checkout() {
    if (currentOrder.cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    showOrderConfirmation();
    showScreen('checkoutScreen');
}

// Показать подтверждение заказа
function showOrderConfirmation() {
    const orderDetails = document.getElementById('orderDetails');
    let total = 0;
    let itemsCount = 0;
    
    let itemsHtml = '<h3>🛍️ Ваш заказ:</h3>';
    currentOrder.cart.forEach(item => {
        itemsHtml += `
            <div class="order-item">
                <strong>${item.title}</strong> (размер: ${item.size})<br>
                ${item.quantity} шт. × ${item.price} руб. = ${item.price * item.quantity} руб.
            </div>
        `;
        total += item.price * item.quantity;
        itemsCount += item.quantity;
    });
    
    itemsHtml += `
        <div class="order-total">
            <strong>Итого:</strong> ${itemsCount} товаров на сумму ${total} руб.
        </div>
    `;
    
    orderDetails.innerHTML = itemsHtml;
    
    // Отправка данных в Telegram бота
    const orderData = {
        action: 'order_created',
        order_details: {
            order_id: generateOrderId(),
            items_count: itemsCount,
            total_price: total,
            items: currentOrder.cart
        }
    };
    
    // Отправляем данные в Telegram бота
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(orderData));
    }
}

// Начать новый заказ
function startNewOrder() {
    // Сброс текущего заказа
    currentOrder = {
        category: null,
        product: null,
        selectedSize: null,
        cart: [],
        totalPrice: 0
    };
    
    // Обновление отображения корзины
    updateCartDisplay();
    
    // Показать начальный экран
    showScreen('categoryScreen');
}

// Показать информацию о магазине
function showStoreInfo() {
    showScreen('infoScreen');
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

// Генерация ID заказа
function generateOrderId() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Генерация кода брони
function generateBookingCode() {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
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
                content: `Ты консультант магазина одежды 'FashionStore'. Отвечай кратко и полезно. Помогай с выбором одежды, размеров, стилей. Информация о магазине: Адрес: ${STORE_INFO.address}, Телефон: ${STORE_INFO.phone}, Время работы: ${STORE_INFO.hours}. Доступные категории: мужская одежда, женская одежда, зимняя коллекция, летняя коллекция, аксессуары.`
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
                'X-Title': 'FashionStore Bot'
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
        Консультант печатает
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
