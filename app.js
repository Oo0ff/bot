// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
if (tg && tg.initData) {
    tg.expand();
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
            category: "Wool collection",
            imageUrl: "https://st-cdn.tsum.com/sig/61f3559dfb56211bb60a4973ff85f68a/width/800/i/79/2a/39/b9/50b5b016-b727-49ed-8c8c-0fe9193bac27.jpg",
            colors: ["Черный", "Темно-синий", "Шампань"],
            inStock: true,
            rating: 4.9,
            material: "Шерсть 90%, Кашемир 10%"
        },
        {
            id: 2,
            title: "Джинсы",
            description: "Джинсы из японского денима с ручной отделкой",
            price: 45000,
            sizes: ["48", "50", "52", "54"],
            season: "Демисезон",
            category: "Denim collection",
            imageUrl: "https://n.cdn.cdek.shopping/images/shopping/27ZkAWSk5GMAexA5.jpg?v=1",
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
            imageUrl: "https://st-cdn.tsum.com/sig/497ec40eeec08abe8300654bf8bae85e/width/800/i/7a/22/86/97/1f03693b-6a22-11f0-b80d-b4969139ea48.jpg",
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
            imageUrl: "https://avatars.mds.yandex.net/get-mpic/6409980/2a0000019649898b696e15c194e3ac83bb4a/orig",
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
            category: "Mountain collection",
            imageUrl: "https://cs2.livemaster.ru/storage/e5/dc/451a551aac0e0ca0a6f5ba5d65rx--odezhda-zimnee-uteplennoe-palto-s-kapyushonom-i-mehom.jpg",
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
            imageUrl: "https://st-cdn.tsum.com/sig/9111dd74de028c035796e7094785172d/width/800/i/fc/4d/b5/fa/f1c3af4e-937f-43fd-8f94-7cffb33ec36a.jpg",
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
            imageUrl: "https://st-cdn.tsum.com/sig/b95c0e89d036a70c492a15dc45d74ccc/width/800/i/6f/58/2d/a9/638fa7da-0efb-44d4-a1ce-4166ca33c70e.jpg",
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
            category: "Linen collection",
            imageUrl: "https://st-cdn.tsum.com/sig/071bc0df3e6b684ae6e555a629e8ba25/width/800/i/2d/d1/32/eb/ed0c4e25-3ae7-11f0-b80d-b4969139ea48.jpg",
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
            category: "Leather accessories",
            imageUrl: "https://katunoff.ru/wp-content/uploads/2020/02/%D0%9A%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D1%8C-%D1%81-%D0%BF%D1%80%D1%8F%D0%B6%D0%BA%D0%BE%D0%B9-%D0%B8%D0%B7-%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%B0-925-Made-by-Katunoff.jpg",
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
            category: "Cashmere",
            imageUrl: "https://st-cdn.tsum.com/sig/191c3691fe20b8abb15ac174f8d6500b/width/800/i/29/b5/cb/11/cabf3b11-be80-4109-8ed9-778de4f0f934.jpg",
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
    totalPrice: 0,
    customerInfo: null
};

// Цены доставки
const DELIVERY_PRICES = {
    courier: 500,
    pickup: 0,
    post: 300
};

// Состояние чата
let isChatOpen = false;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeCategoryButtons();
    updateCartDisplay();
    updateCartIcon();
    
    // Инициализация чата
    document.getElementById('chatToggle').addEventListener('click', toggleChat);
    document.getElementById('closeChat').addEventListener('click', toggleChat);
    
    // Инициализация отправки сообщения
    document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Инициализация формы оформления заказа
    initializeCheckoutForm();
    
    // Проверка, если открыто на ПК (без Telegram WebApp)
    if (!window.Telegram || !window.Telegram.WebApp) {
        console.log("Приложение открыто в браузере, демо-режим активирован");
        showNotification("Демо-режим активирован. Запустите в Telegram для полного функционала.", "info");
    }
});

// Инициализация кнопок категорий
function initializeCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const category = this.getAttribute('data-category');
            if (category === 'info') {
                showStoreInfo();
            } else {
                selectCategory(category);
            }
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
        mens: 'Мужская коллекция',
        womens: 'Женская коллекция',
        winter: 'Зимняя коллекция',
        summer: 'Летняя коллекция',
        accessories: 'Аксессуары'
    };
    
    screenTitle.textContent = categoryNames[category];
    
    // Очистка списка
    productsList.innerHTML = '';
    
    // Добавление товаров
    const products = PRODUCTS_DATA[category];
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', product.id);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600'">
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
                <button class="product-btn">Подробнее</button>
            </div>
        `;
        
        // Добавляем обработчик клика на карточку
        const productBtn = productCard.querySelector('.product-btn');
        productBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            selectProduct(product.id);
        });
        
        // Также делаем кликабельной всю карточку
        productCard.addEventListener('click', function(e) {
            // Проверяем, что клик не по кнопке
            if (!e.target.closest('.product-btn')) {
                selectProduct(product.id);
            }
        });
        
        productsList.appendChild(productCard);
    });
}

// Форматирование цены с разделителями
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Выбор товара
function selectProduct(productId) {
    console.log('Выбор товара с ID:', productId);
    
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
    } else {
        console.error('Товар не найден');
        showNotification('Товар не найден', 'error');
    }
}

// Показать детали товара
function showProductDetails(product) {
    const productDetail = document.getElementById('productDetail');
    const sizesGrid = document.getElementById('sizesGrid');
    
    // Обновление информации о товаре
    productDetail.innerHTML = `
        <div class="product-image-large">
            <img src="${product.imageUrl}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600'">
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
    
    // Очистка сетки размеров
    sizesGrid.innerHTML = '';
    
    // Добавление размеров
    product.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = 'size-btn';
        sizeButton.textContent = size;
        sizeButton.type = 'button';
        sizeButton.addEventListener('click', function() {
            selectSize(size);
            // Сброс выделения у всех кнопок
            document.querySelectorAll('.size-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            // Выделение текущей кнопки
            this.classList.add('selected');
        });
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
        showNotification(`${currentOrder.product.title} (размер ${currentOrder.selectedSize}) обновлен`, 'success');
    } else {
        currentOrder.cart.push(cartItem);
        showNotification(`${currentOrder.product.title} добавлен в корзину`, 'success');
    }
    
    updateCartDisplay();
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
    
    // Перейти к оформлению заказа
    setTimeout(() => {
        showCheckoutForm();
    }, 800);
}

// Обновление отображения корзины
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    // Очистка корзины (кроме элемента emptyCart)
    cartItems.innerHTML = '';
    
    if (currentOrder.cart.length === 0) {
        emptyCart.style.display = 'flex';
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
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600'">
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
                    <button class="quantity-btn minus" type="button">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn plus" type="button">+</button>
                    <div class="item-total">${formatPrice(item.price * item.quantity)} руб.</div>
                </div>
            </div>
            <button class="remove-item-btn" type="button">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        `;
        
        // Добавляем обработчики для кнопок количества
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');
        const removeBtn = cartItem.querySelector('.remove-item-btn');
        
        minusBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            changeQuantity(index, -1);
        });
        
        plusBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            changeQuantity(index, 1);
        });
        
        removeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            removeFromCart(index);
        });
        
        cartItems.appendChild(cartItem);
        
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });
    
    cartCount.textContent = itemCount;
    cartTotal.textContent = formatPrice(total);
}

// Изменение количества товара
function changeQuantity(index, delta) {
    const item = currentOrder.cart[index];
    const newQuantity = item.quantity + delta;
    
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    item.quantity = newQuantity;
    updateCartDisplay();
    updateCartIcon();
    showNotification(`Количество изменено на ${newQuantity}`, 'info');
}

// Удалить из корзины
function removeFromCart(index) {
    const item = currentOrder.cart[index];
    currentOrder.cart.splice(index, 1);
    updateCartDisplay();
    updateCartIcon();
    showNotification(`Товар удален`, 'warning');
}

// Инициализация формы оформления заказа
function initializeCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    const deliveryType = document.getElementById('deliveryType');
    
    // Обновляем цены при загрузке формы
    updateCheckoutSummary();
    
    // Слушаем изменение типа доставки
    deliveryType.addEventListener('change', updateCheckoutSummary);
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        processCheckoutForm();
    });
}

// Обновление итогов в форме оформления заказа
function updateCheckoutSummary() {
    const itemsCount = document.getElementById('checkoutItemsCount');
    const itemsPrice = document.getElementById('checkoutItemsPrice');
    const deliveryPrice = document.getElementById('deliveryPrice');
    const totalWithDelivery = document.getElementById('totalWithDelivery');
    
    // Рассчитываем общую стоимость товаров
    let total = 0;
    let itemCount = 0;
    
    currentOrder.cart.forEach(item => {
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });
    
    // Получаем стоимость доставки
    const deliveryType = document.getElementById('deliveryType').value;
    const deliveryCost = DELIVERY_PRICES[deliveryType] || 0;
    
    // Обновляем значения
    itemsCount.textContent = itemCount;
    itemsPrice.textContent = formatPrice(total);
    deliveryPrice.textContent = formatPrice(deliveryCost);
    totalWithDelivery.textContent = formatPrice(total + deliveryCost);
}

// Показать форму оформления заказа
function showCheckoutForm() {
    if (currentOrder.cart.length === 0) {
        showNotification('Корзина пуста', 'error');
        return;
    }
    
    // Заполняем информацию о заказе в форме
    updateCheckoutSummary();
    
    // Показываем форму
    showScreen('checkoutFormScreen');
}

// Обработка формы оформления заказа
function processCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    
    // Собираем данные формы
    const formData = new FormData(form);
    const customerInfo = {
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        city: formData.get('city'),
        street: formData.get('street'),
        house: formData.get('house'),
        apartment: formData.get('apartment'),
        postalCode: formData.get('postalCode'),
        deliveryType: formData.get('deliveryType'),
        paymentMethod: formData.get('paymentMethod'),
        comment: formData.get('comment')
    };
    
    // Сохраняем информацию о клиенте
    currentOrder.customerInfo = customerInfo;
    
    // Показываем подтверждение заказа
    showOrderConfirmation();
}

// Показать подтверждение заказа
function showOrderConfirmation() {
    const orderDetails = document.getElementById('orderDetails');
    const customerInfo = document.getElementById('customerInfo');
    let total = 0;
    let itemsCount = 0;
    
    // Рассчитываем стоимость доставки
    const deliveryType = currentOrder.customerInfo.deliveryType;
    const deliveryCost = DELIVERY_PRICES[deliveryType] || 0;
    
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
    
    // Добавляем доставку в итог
    itemsHtml += `
        <div class="order-summary-final">
            <div class="summary-row">
                <span>Товары (${itemsCount})</span>
                <span>${formatPrice(total)} руб.</span>
            </div>
            <div class="summary-row">
                <span>Доставка (${getDeliveryTypeText(deliveryType)})</span>
                <span>${formatPrice(deliveryCost)} руб.</span>
            </div>
            <div class="summary-row total">
                <span>Итого</span>
                <span>${formatPrice(total + deliveryCost)} руб.</span>
            </div>
        </div>
    `;
    
    orderDetails.innerHTML = itemsHtml;
    
    // Отображаем информацию о покупателе
    const deliveryTypes = {
        'courier': 'Курьерская доставка',
        'pickup': 'Самовывоз',
        'post': 'Почта России'
    };
    
    const paymentMethods = {
        'card_online': 'Картой онлайн',
        'card_delivery': 'Картой при получении',
        'cash_delivery': 'Наличными при получении'
    };
    
    let customerHtml = `
        <div class="info-row">
            <div class="info-label">ФИО:</div>
            <div class="info-value">${currentOrder.customerInfo.fullName}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Телефон:</div>
            <div class="info-value">${currentOrder.customerInfo.phone}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Email:</div>
            <div class="info-value">${currentOrder.customerInfo.email}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Адрес:</div>
            <div class="info-value">${formatAddress(currentOrder.customerInfo)}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Способ доставки:</div>
            <div class="info-value">${deliveryTypes[currentOrder.customerInfo.deliveryType]}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Способ оплаты:</div>
            <div class="info-value">${paymentMethods[currentOrder.customerInfo.paymentMethod]}</div>
        </div>
    `;
    
    if (currentOrder.customerInfo.comment) {
        customerHtml += `
            <div class="info-row">
                <div class="info-label">Комментарий:</div>
                <div class="info-value">${currentOrder.customerInfo.comment}</div>
            </div>
        `;
    }
    
    customerInfo.innerHTML = customerHtml;
    
    // Отправка данных в Telegram бота
    const orderData = {
        action: 'order_created',
        order_details: {
            order_id: generateOrderId(),
            items_count: itemsCount,
            total_price: total + deliveryCost,
            delivery_cost: deliveryCost,
            items: currentOrder.cart,
            customer_info: currentOrder.customerInfo
        }
    };
    
    // Отправляем данные в Telegram бота
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(orderData));
    } else {
        console.log("Заказ оформлен (демо-режим):", orderData);
    }
    
    // Очищаем корзину после оформления
    currentOrder.cart = [];
    updateCartDisplay();
    updateCartIcon();
    
    // Показываем экран подтверждения
    showScreen('checkoutScreen');
}

// Форматирование адреса
function formatAddress(customerInfo) {
    let address = `${customerInfo.city}, ул. ${customerInfo.street}, д. ${customerInfo.house}`;
    
    if (customerInfo.apartment) {
        address += `, кв. ${customerInfo.apartment}`;
    }
    
    if (customerInfo.postalCode) {
        address += `, ${customerInfo.postalCode}`;
    }
    
    return address;
}

// Получение текста типа доставки
function getDeliveryTypeText(type) {
    const types = {
        'courier': 'Курьерская доставка',
        'pickup': 'Самовывоз',
        'post': 'Почта России'
    };
    
    return types[type] || 'Не указано';
}

// Начать новый заказ
function startNewOrder() {
    console.log('Начинаем новый заказ');
    
    // Сброс текущего заказа
    currentOrder = {
        category: null,
        product: null,
        selectedSize: null,
        cart: [],
        totalPrice: 0,
        customerInfo: null
    };
    
    // Сброс формы
    const form = document.getElementById('checkoutForm');
    form.reset();
    
    // Обновление отображения корзины
    updateCartDisplay();
    updateCartIcon();
    
    // Показать начальный экран
    showScreen('categoryScreen');
    
    // Прокрутка вверх
    window.scrollTo(0, 0);
    
    // Показать уведомление
    showNotification('Начинаем новый заказ', 'info');
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
    
    // Обновить иконку корзины при смене экрана
    updateCartIcon();
    
    // Закрыть чат при смене экрана
    if (isChatOpen) {
        toggleChat();
    }
    
    // Прокрутка вверх
    window.scrollTo(0, 0);
}

// Генерация ID заказа
function generateOrderId() {
    return Math.floor(1000 + Math.random() * 9000);
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
        return 'Ошибка соединения. Проверьте интернет и попробуйте еще раз.';
    }
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.getElementById('sendMessageBtn');
    
    if (userInput.value.trim() === '') return;
    
    sendButton.disabled = true;
    sendButton.innerHTML = '...';
    
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
    sendButton.innerHTML = '→';
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

// Переключение чата
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatToggle = document.getElementById('chatToggle');
    
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
            document.getElementById('userInput').focus();
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

// Глобальные функции для использования в HTML
window.selectCategory = selectCategory;
window.selectProduct = selectProduct;
window.showScreen = showScreen;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.showCheckoutForm = showCheckoutForm;
window.startNewOrder = startNewOrder;
window.showStoreInfo = showStoreInfo;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.sendMessage = sendMessage;
window.toggleChat = toggleChat;

// Функция для навигации из корзины
window.goBackFromCart = function() {
    if (currentOrder.product) {
        showScreen('detailScreen');
    } else if (currentOrder.category) {
        showScreen('productScreen');
    } else {
        showScreen('categoryScreen');
    }
};
