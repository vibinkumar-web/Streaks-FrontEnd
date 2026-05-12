// ── STATE ──
let cart = [];

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// ── MODALS ──
function openModal(id) {
    document.getElementById(id + 'Modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id + 'Modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('openLogin').addEventListener('click', () => openModal('login'));
document.getElementById('openRegister').addEventListener('click', () => openModal('register'));

document.getElementById('mobileOpenLogin').addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    openModal('login');
});
document.getElementById('mobileOpenRegister').addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    openModal('register');
});

document.getElementById('closeLogin').addEventListener('click', () => closeModal('login'));
document.getElementById('closeRegister').addEventListener('click', () => closeModal('register'));

document.getElementById('loginModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('login');
});
document.getElementById('registerModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('register');
});

document.getElementById('switchToRegister').addEventListener('click', e => {
    e.preventDefault();
    closeModal('login');
    setTimeout(() => openModal('register'), 200);
});
document.getElementById('switchToLogin').addEventListener('click', e => {
    e.preventDefault();
    closeModal('register');
    setTimeout(() => openModal('login'), 200);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal('login');
        closeModal('register');
        closeCart();
    }
});

// ── FORM HANDLERS ──
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('Welcome back to STREAKS!');
    closeModal('login');
    e.target.reset();
});

document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const pw = document.getElementById('regPassword').value;
    const cf = document.getElementById('regConfirm').value;
    if (pw !== cf) {
        showToast('Passwords do not match!');
        document.getElementById('regConfirm').style.borderColor = '#e53e3e';
        return;
    }
    document.getElementById('regConfirm').style.borderColor = '';
    showToast('Account created! Welcome to STREAKS!');
    closeModal('register');
    e.target.reset();
});

// ── CART ──
function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
document.getElementById('continueShop').addEventListener('click', closeCart);

function addToCart(name, price, img) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price: parseFloat(price), img, qty: 1 });
    }
    renderCart();
    showToast(name + ' added to cart!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

    const countEl = document.getElementById('cartCount');
    countEl.textContent = count;
    countEl.classList.toggle('visible', count > 0);

    document.getElementById('cartItemCount').textContent = count;
    document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);

    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');

    if (cart.length === 0) {
        itemsEl.innerHTML = `
            <div class="cart-empty">
                <p>Your cart is empty</p>
                <a href="#footwear" class="continue-shopping" id="continueShop2">Continue Shopping</a>
            </div>`;
        document.getElementById('continueShop2').addEventListener('click', closeCart);
        footerEl.style.display = 'none';
    } else {
        itemsEl.innerHTML = cart.map((item, i) => `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.img}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} &times; ${item.qty}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${i})">&times;</button>
            </div>`).join('');
        footerEl.style.display = 'block';
    }
}

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        addToCart(btn.dataset.name, btn.dataset.price, btn.dataset.img);
    });
});

// ── TOAST ──
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── CHECKOUT ──
let checkoutStep = 1;

function openCheckout() {
    closeCart();
    buildOrderSummary();
    goToStep(1);
    openModal('checkout');
}

function closeCheckout() {
    closeModal('checkout');
}

function goToStep(n) {
    checkoutStep = n;
    [1, 2, 3].forEach(i => {
        const el = document.getElementById('checkoutStep' + i);
        const dot = document.getElementById('step-dot-' + i);
        el.style.display = i === n ? 'block' : 'none';
        dot.classList.toggle('active', i === n);
        dot.classList.toggle('done', i < n);
    });
    document.querySelectorAll('.step-line').forEach((line, idx) => {
        line.classList.toggle('done', idx < n - 1);
    });
}

function buildOrderSummary() {
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = total >= 100 ? 0 : 9.99;
    const grand = total + shipping;
    const el = document.getElementById('orderSummary');
    el.innerHTML = cart.map(item => `
        <div class="order-summary-item">
            <span>${item.name} &times; ${item.qty}</span>
            <span>$${(item.price * item.qty).toFixed(2)}</span>
        </div>`).join('') + `
        <div class="order-summary-item">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
        </div>
        <div class="order-summary-item total">
            <span>Total</span>
            <span>$${grand.toFixed(2)}</span>
        </div>`;
}

document.getElementById('closeCheckout').addEventListener('click', closeCheckout);
document.getElementById('checkoutModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCheckout();
});

document.querySelector('.btn-checkout').addEventListener('click', () => {
    if (cart.length === 0) { showToast('Your cart is empty!'); return; }
    openCheckout();
});

document.getElementById('shippingForm').addEventListener('submit', e => {
    e.preventDefault();
    goToStep(2);
});

document.getElementById('backToShipping').addEventListener('click', () => goToStep(1));

// Card number formatting
document.getElementById('cardNumber').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 16);
    this.value = v.match(/.{1,4}/g)?.join(' ') || v;
});

// Expiry formatting
document.getElementById('cardExpiry').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + ' / ' + v.slice(2);
    this.value = v;
});

document.getElementById('paymentForm').addEventListener('submit', e => {
    e.preventDefault();

    const num = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const exp = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCVV').value;

    if (num.length < 16) { showToast('Enter a valid 16-digit card number.'); return; }
    if (exp.length < 7)  { showToast('Enter a valid expiry date (MM / YY).'); return; }
    if (cvv.length < 3)  { showToast('Enter a valid CVV.'); return; }

    // Show processing
    const overlay = document.getElementById('processingOverlay');
    overlay.style.display = 'flex';

    setTimeout(() => {
        overlay.style.display = 'none';

        // Populate success screen
        const orderId = 'SK-' + Math.floor(100000 + Math.random() * 900000);
        const delivery = new Date();
        delivery.setDate(delivery.getDate() + 5 + Math.floor(Math.random() * 3));
        const dateStr = delivery.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

        document.getElementById('orderNumber').textContent = '#' + orderId;
        document.getElementById('deliveryDate').textContent = dateStr;
        document.getElementById('confirmEmail').textContent = document.getElementById('shipEmail').value || 'your email';

        goToStep(3);
    }, 2200);
});

document.getElementById('continueShopping').addEventListener('click', () => {
    closeCheckout();
    cart = [];
    renderCart();
    document.getElementById('shippingForm').reset();
    document.getElementById('paymentForm').reset();
    showToast('Thank you for shopping with STREAKS!');
});

// ── NEWSLETTER ──
document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('Subscribed! Check your email for 10% off.');
    e.target.reset();
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.product-card, .stat, .section-title, .newsletter-content, .footer-brand, .footer-col').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
