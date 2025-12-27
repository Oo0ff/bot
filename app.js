// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
if (tg && tg.initData) {
    tg.expand();
    console.log("Telegram Web App инициализирован");
}

// Настройка основной кнопки
if (tg && tg.MainButton) {
    tg.MainButton.textColor = "#FFFFFF";
    tg.MainButton.color = "#1a1a1a";
}

// Данные о товарах (премиум коллекция) - без брендов
const PRODUCTS_DATA = {
    mens: [
        {
            id: 1,
            title: "Костюм шерстяной",
            description: "Шерстяной костюм ручной работы. Итальянская ткань Super 150s.",
            price: 85000,
            sizes: ["48", "50", "52", "54", "56"],
            season: "Всесезонный",
            category: "Коллекция VIP",
            imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Черный", "Темно-синий", "Шампань"],
            inStock: true,
            rating: 4.9,
            material: "Шерсть 90%, Кашемир 10%"
        },
        {
            id: 2,
            title: "Джинсы премиальные",
            description: "Джинсы из японского денима с ручной отделкой",
            price: 45000,
            sizes: ["48", "50", "52", "54"],
            season: "Демисезон",
            category: "Деним коллекция",
            imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Индиго", "Черный"],
            inStock: true,
            rating: 4.8,
            material: "Японский деним"
        }
    ],
    womens: [
        {
            id: 3,
            title: "Платье вечернее",
            description: "Вечернее платье из французского кружева",
            price: 120000,
            sizes: ["FR36", "FR38", "FR40", "FR42"],
            season: "Вечерняя коллекция",
            category: "Haute Couture",
            imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Черный", "Белый", "Бордовый"],
            inStock: true,
            rating: 5.0,
            material: "Французское кружево, шелк"
        },
        {
            id: 4,
            title: "Кашемировый свитер",
            description: "Свитер из королевского кашемира",
            price: 68000,
            sizes: ["XS", "S", "M", "L"],
            season: "Зима",
            category: "Cashmere Collection",
            imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Кремовый", "Серый меланж", "Каштан"],
            inStock: true,
            rating: 4.9,
            material: "Королевский кашемир"
        }
    ],
    winter: [
        {
            id: 5,
            title: "Пальто зимнее",
            description: "Пальто из гагачьего пуха с отделкой из натурального меха",
            price: 195000,
            sizes: ["48", "50", "52", "54", "56"],
            season: "Зима",
            category: "Горная коллекция",
            imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Черный", "Какао", "Графит"],
            inStock: true,
            rating: 4.9,
            material: "Гагачий пух, натуральный мех"
        },
        {
            id: 6,
            title: "Термобелье",
            description: "Набор из мериносовой шерсти для экстремальных температур",
            price: 32000,
            sizes: ["S", "M", "L", "XL"],
            season: "Зима",
            category: "Performance",
            imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Черный", "Графит"],
            inStock: true,
            rating: 4.7,
            material: "Мериносовая шерсть 100%"
        }
    ],
    summer: [
        {
            id: 7,
            title: "Поло хлопковое",
            description: "Поло из египетского хлопка Pima",
            price: 12500,
            sizes: ["XS", "S", "M", "L", "XL"],
            season: "Лето",
            category: "Polo Collection",
            imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Белый", "Черный", "Темно-синий", "Бордовый"],
            inStock: true,
            rating: 4.8,
            material: "Египетский хлопок Pima"
        },
        {
            id: 8,
            title: "Брюки льняные",
            description: "Брюки из итальянского льна с технологией устойчивости к сминанию",
            price: 38000,
            sizes: ["48", "50", "52", "54"],
            season: "Лето",
            category: "Льняная коллекция",
            imageUrl: "https://images.unsplash.com/photo-1593030737346-58d656c5d41c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Натуральный", "Бежевый", "Белый"],
            inStock: true,
            rating: 4.7,
            material: "Итальянский лен"
        }
    ],
    accessories: [
        {
            id: 9,
            title: "Ремень кожаный",
            description: "Кожаный ремень ручной работы с серебряной пряжкой",
            price: 75000,
            sizes: ["80", "85", "90", "95", "100"],
            season: "Всесезонный",
            category: "Кожаные аксессуары",
            imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Черный", "Коричневый", "Темно-синий"],
            inStock: true,
            rating: 4.9,
            material: "Натуральная кожа"
        },
        {
            id: 10,
            title: "Шарф кашемировый",
            description: "Шарф из двойного кашемира",
            price: 45000,
            sizes: ["Один размер"],
            season: "Зима",
            category: "Кашемир",
            imageUrl: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
            colors: ["Серый", "Кремовый", "Каштан"],
            inStock: true,
            rating: 4.8,
            material: "Двойной кашемир"
        }
    ]
};

// Информация о магазине
const STORE_INFO = {
    name: "AESTHETE",
    address: "г. Москва, ул. Тверская, д. 15",
    phone: "+7 (495) 123-45-67",
    email: "contact@aesthetestore.ru",
    hours: "Ежедневно 11:00 - 21:00",
    mapUrl: "https://yandex.ru/maps/?text=Москва, Тверская, 15",
    deliveryUrl: "https://aesthetestore.ru/delivery",
    returnUrl: "https://aesthetestore.ru/returns"
};

// Текущее состояние заказа
let currentOrder = {
    category: null,
    product: null,
    selectedSize: null,
    cart: [],
    totalPrice: 0
};

// Состояние чата
let isChatOpen = false;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log("🔄 Инициализация приложения AESTHETE");
    
    // Восстановление корзины из localStorage
    restoreCartFromStorage();
    
    // Инициализация кнопок категорий
    initializeCategoryButtons();
    
    // Инициализация чата
    initializeChat();
    
    // Инициализация кнопки "Новый заказ" на экране оформления
    document.querySelector('.new-order-btn')?.addEventListener('click', startNewOrder);
    
    // Проверка демо-режима
    if (!window.Telegram || !window.Telegram.WebApp) {
        console.log("📱 Приложение открыто в браузере, демо-режим активирован");
        showNotification("Демо-режим активирован. Запустите в Telegram для полного функционала.", "info");
    }
    
    // Обновляем иконку корзины
    updateCartIcon();
    
    console.log("✅ Приложение инициализировано. Товаров в корзине:", currentOrder.cart.length);
});

// Сохранить корзину в localStorage
function saveCartToStorage() {
    try {
        localStorage.setItem('aesthete_cart', JSON.stringify(currentOrder.cart));
        console.log("💾 Корзина сохранена:", currentOrder.cart);
    } catch (e) {
        console.error("❌ Ошибка сохранения корзины:", e);
    }
}

// Восстановить корзину из localStorage
function restoreCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('aesthete_cart');
        if (savedCart) {
            currentOrder.cart = JSON.parse(savedCart);
            console.log("📦 Корзина восстановлена из localStorage:", currentOrder.cart);
        }
    } catch (e) {
        console.error("❌ Ошибка восстановления корзины:", e);
        currentOrder.cart = [];
    }
}

// Инициализация кнопок категорий
function initializeCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const category = this.getAttribute('data-category');
            console.log("🎯 Выбрана категория:", category);
            
            if (category === 'info') {
                showStoreInfo();
            } else {
                selectCategory(category);
            }
        });
    });
}

// Инициализация чата
function initializeChat() {
    const chatToggle = document.getElementById('chatToggle');
    const closeChat = document.getElementById('closeChat');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const userInput = document.getElementById('userInput');
    
    if (chatToggle) chatToggle.addEventListener('click', toggleChat);
    if (closeChat) closeChat.addEventListener('click', toggleChat);
    if (sendMessageBtn) sendMessageBtn.addEventListener('click', sendMessage);
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
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
    
    if (!productsList || !screenTitle) {
        console.error("❌ Не найдены элементы для отображения товаров");
        return;
    }
    
    // Установка заголовка
    const categoryNames = {
        mens: 'Мужская коллекция',
        womens: 'Женская коллекция',
        winter: 'Зимняя коллекция',
        summer: 'Летняя коллекция',
        accessories: 'Аксессуары'
    };
    
    screenTitle.textContent = categoryNames[category] || 'Коллекция';
    
    // Очистка списка
    productsList.innerHTML = '';
    
    // Добавление товаров
    const products = PRODUCTS_DATA[category] || [];
    
    if (products.length === 0) {
        productsList.innerHTML = '<div class="empty-message">Товары временно отсутствуют</div>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.title}" 
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600'">
                <div class="product-badge">${product.category}</div>
            </div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-details">
                    <span class="product-price">${formatPrice(product.price)} руб.</span>
                    <span class="product-rating">★ ${product.rating}</span>
                </div>
                <div class="product-sizes">Размеры: ${product.sizes.join(', ')}</div>
                <button class="product-btn" onclick="selectProduct(${product.id})">Подробнее</button>
            </div>
        `;
        productsList.appendChild(productCard);
    });
}

// Форматирование цены с разделителями
function formatPrice(price) {
    return price.toLocaleString('ru-RU');
}

// Выбор товара
function selectProduct(productId) {
    console.log("🛍️ Выбор товара с ID:", productId);
    
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
        currentOrder.selectedSize = null; // Сбрасываем выбранный размер
        showProductDetails(selectedProduct);
        showScreen('detailScreen');
    } else {
        console.error('❌ Товар не найден');
        showNotification('Товар не найден', 'error');
    }
}

// Показать детали товара
function showProductDetails(product) {
    const productDetail = document.getElementById('productDetail');
    const sizesGrid = document.getElementById('sizesGrid');
    
    if (!productDetail || !sizesGrid) {
        console.error("❌ Не найдены элементы для отображения деталей товара");
        return;
    }
    
    // Обновление информации о товаре
    productDetail.innerHTML = `
        <div class="product-image-large">
            <img src="${product.imageUrl}" alt="${product.title}" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600'">
            <div class="product-badge-large">${product.category}</div>
        </div>
        <div class="product-info-large">
            <div class="product-header">
                <h3>${product.title}</h3>
                <div class="product-price-large">${formatPrice(product.price)} руб.</div>
            </div>
            <p class="product-description-large">${product.description}</p>
            <div class="product-meta">
                <div class="meta-item"><strong>Материал:</strong> ${product.material}</div>
                <div class="meta-item"><strong>Сезон:</strong> ${product.season}</div>
                <div class="meta-item"><strong>Цвета:</strong> ${product.colors.join(', ')}</div>
                <div class="meta-item"><strong>Рейтинг:</strong> ★ ${product.rating}</div>
                <div class="meta-item"><strong>Наличие:</strong> ${product.inStock ? 'В наличии' : 'Под заказ'}</div>
            </div>
        </div>
    `;
    
    // Очистка и заполнение сетки размеров
    sizesGrid.innerHTML = '';
    
    product.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = 'size-btn';
        sizeButton.textContent = size;
        sizeButton.type = 'button';
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
    document.getElementById('selectedPrice').textContent = formatPrice(product.price) + ' руб.';
    document.getElementById('selectedSize').textContent = 'Не выбран';
}

// Выбор размера
function selectSize(size) {
    currentOrder.selectedSize = size;
    document.getElementById('selectedSize').textContent = size;
}

// Добавить в корзину
function addToCart() {
    if (!currentOrder.selectedSize) {
        showNotification('Пожалуйста, выберите размер', 'error');
        return;
    }
    
    if (!currentOrder.product) {
        showNotification('Товар не выбран', 'error');
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
    const existingItemIndex = currentOrder.cart.findIndex(item => 
        item.id === cartItem.id && item.size === cartItem.size
    );
    
    if (existingItemIndex !== -1) {
        currentOrder.cart[existingItemIndex].quantity += 1;
        showNotification(`${currentOrder.product.title} (размер ${currentOrder.selectedSize}) обновлен`, 'success');
    } else {
        currentOrder.cart.push(cartItem);
        showNotification(`${currentOrder.product.title} добавлен в корзину`, 'success');
    }
    
    // Сохраняем в localStorage
    saveCartToStorage();
    
    // Обновляем иконку корзины
    updateCartIcon();
    
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
        showNotification('Пожалуйста, выберите размер', 'error');
        return;
    }
    
    // Добавить товар в корзину
    addToCart();
    
    // Перейти к корзине
    showScreen('cartScreen');
}

// Обновление отображения корзины
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !emptyCart || !cartCount || !cartTotal) {
        console.log("ℹ️ Элементы корзины не найдены на этом экране");
        return;
    }
    
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
                <img src="${item.image}" alt="${item.title}" 
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-header">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} руб.</div>
                </div>
                <div class="cart-item-details">
                    <div class="detail-item">
                        <span class="detail-label">Размер:</span>
                        <span class="detail-value">${item.size}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Цена:</span>
                        <span class="detail-value">${formatPrice(item.price)} руб.</span>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn minus" onclick="changeQuantity(${index}, -1)">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn plus" onclick="changeQuantity(${index}, 1)">+</button>
                    <div class="item-total">${formatPrice(item.price * item.quantity)} руб.</div>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        `;
        cartItems.appendChild(cartItem);
        
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });
    
    cartCount.textContent = itemCount;
    cartTotal.textContent = formatPrice(total);
}

// Изменение количества товара
function changeQuantity(index, delta) {
    if (index < 0 || index >= currentOrder.cart.length) return;
    
    const item = currentOrder.cart[index];
    const newQuantity = item.quantity + delta;
    
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    item.quantity = newQuantity;
    
    // Сохраняем в localStorage
    saveCartToStorage();
    
    updateCartDisplay();
    updateCartIcon();
    showNotification(`Количество изменено на ${newQuantity}`, 'info');
}

// Удалить из корзины
function removeFromCart(index) {
    if (index < 0 || index >= currentOrder.cart.length) return;
    
    currentOrder.cart.splice(index, 1);
    
    // Сохраняем в localStorage
    saveCartToStorage();
    
    updateCartDisplay();
    updateCartIcon();
    showNotification(`Товар удален`, 'warning');
}

// Оформить заказ
function checkout() {
    if (currentOrder.cart.length === 0) {
        showNotification('Корзина пуста', 'error');
        return;
    }
    
    showOrderConfirmation();
    showScreen('checkoutScreen');
}

// Показать подтверждение заказа
function showOrderConfirmation() {
    const orderDetails = document.getElementById('orderDetails');
    if (!orderDetails) {
        console.error("❌ Элемент orderDetails не найден");
        return;
    }
    
    let total = 0;
    let itemsCount = 0;
    
    let itemsHtml = '<div class="confirmation-header">';
    itemsHtml += '<h3>Заказ подтвержден</h3>';
    itemsHtml += `<div class="order-number">№ ${generateOrderId()}</div>`;
    itemsHtml += '</div>';
    
    currentOrder.cart.forEach(item => {
        itemsHtml += `
            <div class="order-item">
                <div class="order-item-header">
                    <strong>${item.title}</strong>
                    <span>${formatPrice(item.price * item.quantity)} руб.</span>
                </div>
                <div class="order-item-details">
                    <span>Размер: ${item.size}</span>
                    <span>Количество: ${item.quantity}</span>
                </div>
            </div>
        `;
        total += item.price * item.quantity;
        itemsCount += item.quantity;
    });
    
    itemsHtml += `
        <div class="order-summary-final">
            <div class="summary-row">
                <span>Товары (${itemsCount})</span>
                <span>${formatPrice(total)} руб.</span>
            </div>
            <div class="summary-row total">
                <span>Итого</span>
                <span>${formatPrice(total)} руб.</span>
            </div>
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
    } else {
        console.log("📤 Заказ оформлен (демо-режим):", orderData);
    }
    
    // Очищаем корзину после оформления
    currentOrder.cart = [];
    
    // Очищаем localStorage
    localStorage.removeItem('aesthete_cart');
    
    // Обновляем иконку корзины
    updateCartIcon();
}

// Начать новый заказ
function startNewOrder() {
    console.log("🔄 Начинаем новый заказ...");
    
    // Сброс текущего заказа
    currentOrder = {
        category: null,
        product: null,
        selectedSize: null,
        cart: [],
        totalPrice: 0
    };
    
    // Очищаем localStorage
    localStorage.removeItem('aesthete_cart');
    
    // Обновление отображения корзины
    updateCartDisplay();
    updateCartIcon();
    
    // Показать начальный экран
    showScreen('categoryScreen');
    
    showNotification('Новый заказ начат', 'success');
}

// Показать информацию о магазине
function showStoreInfo() {
    showScreen('infoScreen');
}

// Показать определенный экран
function showScreen(screenId) {
    console.log("📱 Переход на экран:", screenId);
    
    // Скрыть все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать нужный экран
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // Обновить отображение корзины если мы на экране корзины
        if (screenId === 'cartScreen') {
            updateCartDisplay();
        }
        
        // Закрыть чат при смене экрана
        if (isChatOpen) {
            toggleChat();
        }
        
        // Обновить иконку корзины
        updateCartIcon();
        
        // Прокрутка вверх
        window.scrollTo(0, 0);
    } else {
        console.error("❌ Экран не найден:", screenId);
    }
}

// Генерация ID заказа
function generateOrderId() {
    return 'AST-' + Date.now().toString().slice(-8);
}

// Обновить иконку корзины в хедере
function updateCartIcon() {
    const cartIcons = document.querySelectorAll('.cart-icon');
    const totalItems = currentOrder.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartIcons.forEach(icon => {
        const badge = icon.querySelector('.cart-badge');
        if (badge) {
            if (totalItems > 0) {
                badge.textContent = totalItems > 99 ? '99+' : totalItems;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    });
}

// Показать уведомление
function showNotification(message, type = 'info') {
    // Удаляем предыдущее уведомление
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Автоматическое удаление через 3 секунды
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Функции для чата с AI
async function getDeepSeekResponse(message) {
    const apiKey = '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';
    const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
    
    const requestData = {
        model: 'deepseek/deepseek-r1-0528-qwen3-8b:free',
        messages: [
            {
                role: 'system',
                content: `Ты консультант магазина одежды 'AESTHETE'. Отвечай кратко и полезно. Помогай с выбором одежды, размеров, стилей. Информация о магазине: Адрес: ${STORE_INFO.address}, Телефон: ${STORE_INFO.phone}, Время работы: ${STORE_INFO.hours}. Доступные категории: мужская коллекция, женская коллекция, зимняя коллекция, летняя коллекция, аксессуары.`
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
                'X-Title': 'AESTHETE Bot'
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
        console.error('❌ Ошибка AI чата:', error);
        return 'Ошибка соединения. Проверьте интернет и попробуйте еще раз.';
    }
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.getElementById('sendMessageBtn');
    
    if (!userInput || !chatMessages || !sendButton) return;
    
    const message = userInput.value.trim();
    if (message === '') return;
    
    sendButton.disabled = true;
    sendButton.innerHTML = '...';
    
    // Добавляем сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);
    
    // Очищаем поле ввода
    userInput.value = '';
    
    // Показываем индикатор набора
    showTypingIndicator();
    
    try {
        const aiResponse = await getDeepSeekResponse(message);
        removeTypingIndicator();
        
        // Добавляем ответ AI
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = aiResponse;
        chatMessages.appendChild(botMessage);
    } catch (error) {
        removeTypingIndicator();
        const errorMessage = document.createElement('div');
        errorMessage.className = 'message bot-message';
        errorMessage.textContent = 'Произошла ошибка. Пожалуйста, попробуйте позже.';
        chatMessages.appendChild(errorMessage);
    }
    
    sendButton.disabled = false;
    sendButton.innerHTML = '→';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
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

// Переключение чата
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatToggle = document.getElementById('chatToggle');
    
    if (!chatWindow || !chatToggle) return;
    
    isChatOpen = !isChatOpen;
    
    if (isChatOpen) {
        chatWindow.style.display = 'flex';
        chatToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
            </svg>
        `;
        // Фокус на поле ввода
        setTimeout(() => {
            const userInput = document.getElementById('userInput');
            if (userInput) userInput.focus();
        }, 100);
    } else {
        chatWindow.style.display = 'none';
        chatToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
        `;
    }
}

// Функция для навигации из корзины
function goBackFromCart() {
    if (currentOrder.product) {
        showScreen('detailScreen');
    } else if (currentOrder.category) {
        showScreen('productScreen');
    } else {
        showScreen('categoryScreen');
    }
}

// Глобальные функции для использования в HTML
window.selectCategory = selectCategory;
window.selectProduct = selectProduct;
window.showScreen = showScreen;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.checkout = checkout;
window.startNewOrder = startNewOrder;
window.showStoreInfo = showStoreInfo;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.sendMessage = sendMessage;
window.toggleChat = toggleChat;
window.goBackFromCart = goBackFromCart;
