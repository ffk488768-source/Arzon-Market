// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Iltimos, login va parolni kiriting!");
            return;
        }

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
    });
}

function showPassword() {
    const password = document.getElementById("password");

    password.type =
        password.type === "password" ? "text" : "password";
}


// ================= MAHSULOTLAR =================

const products = [
    {
        id: 1,
        name: "Olma",
        category: "food",
        categoryName: "Oziq-ovqat",
        price: 14000,
        unit: "kg",
        icon: "🍎",
        image: "images/olma.jpg"
    },

    {
        id: 2,
        name: "Banan",
        category: "food",
        categoryName: "Oziq-ovqat",
        price: 22000,
        unit: "kg",
        icon: "🍌",
        image: "images/banan.jpg"
    },

    {
        id: 3,
        name: "Marojni",
        category: "sweet",
        categoryName: "Muzqaymoq",
        price: 6000,
        unit: "",
        icon: "🍦",
        image: "images/marojni.jpg"
    },

    {
        id: 4,
        name: "Marojni Plomber",
        category: "sweet",
        categoryName: "Muzqaymoq",
        price: 7000,
        unit: "",
        icon: "🍨",
        image: "images/plomber.jpg"
    },

    {
        id: 5,
        name: "Buxanka non",
        category: "food",
        categoryName: "Non mahsulotlari",
        price: 4000,
        unit: "",
        icon: "🍞",
        image: "images/buxanka.jpg"
    },

    {
        id: 6,
        name: "Non",
        category: "food",
        categoryName: "Non mahsulotlari",
        price: 6000,
        unit: "",
        icon: "🥖",
        image: "images/non.jpg"
    },

    {
        id: 7,
        name: "Sut",
        category: "food",
        categoryName: "Sut mahsulotlari",
        price: 20000,
        unit: "",
        icon: "🥛",
        image: "images/sut.jpg"
    },

    {
        id: 8,
        name: "Coca-Cola 1.5L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 16000,
        unit: "",
        icon: "🥤",
        image: "images/cola15.jpg"
    },

    {
        id: 9,
        name: "Coca-Cola 1.0L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 12000,
        unit: "",
        icon: "🥤",
        image: "images/cola10.jpg"
    },

    {
        id: 10,
        name: "Coca-Cola 0.5L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 9000,
        unit: "",
        icon: "🥤",
        image: "images/cola05.jpg"
    },

    {
        id: 11,
        name: "Pepsi 1.5L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 16000,
        unit: "",
        icon: "🥤",
        image: "images/pepsi15.jpg"
    },

    {
        id: 12,
        name: "Pepsi 1.0L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 12000,
        unit: "",
        icon: "🥤",
        image: "images/pepsi10.jpg"
    },

    {
        id: 13,
        name: "Pepsi 0.5L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 9000,
        unit: "",
        icon: "🥤",
        image: "images/pepsi05.jpg"
    },

    {
        id: 14,
        name: "Suv 1.0L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 6000,
        unit: "",
        icon: "💧",
        image: "images/suv10.jpg"
    },

    {
        id: 15,
        name: "Suv 0.5L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 4000,
        unit: "",
        icon: "💧",
        image: "images/suv05.jpg"
    },

    {
        id: 16,
        name: "Suv 1.5L",
        category: "drink",
        categoryName: "Ichimlik",
        price: 7000,
        unit: "",
        icon: "💧",
        image: "images/suv15.jpg"
    },

    {
        id: 17,
        name: "Plitka shokolad",
        category: "sweet",
        categoryName: "Shirinlik",
        price: 19000,
        unit: "",
        icon: "🍫",
        image: "images/shokolad.jpg"
    },

    {
        id: 18,
        name: "Alpen Gold",
        category: "sweet",
        categoryName: "Shirinlik",
        price: 18000,
        unit: "",
        icon: "🍫",
        image: "images/alpengold.jpg"
    },

    {
        id: 19,
        name: "Nestle Plitka",
        category: "sweet",
        categoryName: "Shirinlik",
        price: 17500,
        unit: "",
        icon: "🍫",
        image: "images/nestle.jpg"
    },

    {
        id: 20,
        name: "Sok Apelsin",
        category: "drink",
        categoryName: "Sharbat",
        price: 20000,
        unit: "",
        icon: "🧃",
        image: "images/sok-apelsin.jpg"
    },

    {
        id: 21,
        name: "Sok Anor",
        category: "drink",
        categoryName: "Sharbat",
        price: 21000,
        unit: "",
        icon: "🧃",
        image: "images/sok-anor.jpg"
    },

    {
        id: 22,
        name: "Sok Detskiy",
        category: "drink",
        categoryName: "Sharbat",
        price: 5000,
        unit: "",
        icon: "🧃",
        image: "images/sok-detskiy.jpg"
    }
];


// ================= SAVAT =================

let cart = [];

function formatPrice(price) {
    return price.toLocaleString("uz-UZ") + " so'm";
}


// ================= MAHSULOTLARNI CHIQARISH =================

function displayProducts(list = products) {

    const container = document.getElementById("products");

    if (!container) return;

    if (list.length === 0) {

        container.innerHTML = `
            <div class="not-found">
                <div style="font-size:60px;">🔍</div>
                <h3>Mahsulot topilmadi</h3>
                <p>Boshqa mahsulot nomini qidirib ko‘ring.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = list.map(product => {

        const unitText = product.unit
            ? " / " + product.unit
            : "";

        return `
            <div class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                    >

                    <span class="emoji-fallback">
                        ${product.icon}
                    </span>

                </div>

                <h3>${product.name}</h3>

                <div class="product-category">
                    ${product.categoryName}
                </div>

                <div class="prices">

                    <span class="new-price">
                        ${formatPrice(product.price)}${unitText}
                    </span>

                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Savatga qo‘shish
                </button>

            </div>
        `;

    }).join("");
}


// ================= SAVATGA QO‘SHISH =================

function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

    showMessage("✅ Mahsulot savatga qo‘shildi!");
}


// ================= SAVATNI YANGILASH =================

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    let total = 0;
    let count = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        count += item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-icon">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        onerror="this.style.display='none';"
                    >

                    <span>${item.icon}</span>

                </div>

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <small>
                        ${formatPrice(item.price)}
                    </small>

                    <div class="quantity">

                        <button
                            onclick="decreaseQuantity(${item.id})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${item.id})"
                        >
                            +
                        </button>

                    </div>

                    <p>
                        ${formatPrice(itemTotal)}
                    </p>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    ×
                </button>

            </div>

        `;
    });


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div style="
                text-align:center;
                padding:50px 10px;
                color:#8993a5;
            ">

                <div style="font-size:50px;">
                    🛒
                </div>

                <p>
                    Savat hozircha bo‘sh
                </p>

            </div>

        `;
    }


    if (cartCount) {

        cartCount.textContent = count;

    }


    if (totalPrice) {

        totalPrice.textContent =
            formatPrice(total);

    }

}


// ================= MIQDOR =================

function increaseQuantity(id) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    item.quantity++;

    updateCart();
}


function decreaseQuantity(id) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(item => item.id !== id);

    }

    updateCart();
}


// ================= O‘CHIRISH =================

function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    updateCart();

    showMessage(
        "🗑️ Mahsulot savatdan olib tashlandi"
    );
}


// ================= SAVAT OCHISH =================

function openCart() {

    const modal =
        document.getElementById("cartModal");

    if (modal) {

        modal.style.display = "flex";

    }

}


function closeCart() {

    const modal =
        document.getElementById("cartModal");

    if (modal) {

        modal.style.display = "none";

    }

}


// ================= KATEGORIYA =================

function filterProducts(category, button) {

    const buttons =
        document.querySelectorAll(".category");

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });

    if (button) {

        button.classList.add("active");

    }


    if (category === "all") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(
                product =>
                    product.category === category
            );

        displayProducts(filtered);

    }

}


// ================= QIDIRUV =================

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const text =
                this.value
                    .toLowerCase()
                    .trim();

            const filtered =
                products.filter(product =>

                    product.name
                        .toLowerCase()
                        .includes(text)

                    ||

                    product.categoryName
                        .toLowerCase()
                        .includes(text)

                );

            displayProducts(filtered);

        }
    );

}


// ================= BUYURTMA =================

function checkout() {

    if (cart.length === 0) {

        alert("🛒 Savat bo‘sh!");

        return;

    }


    const orderModal =
        document.getElementById("orderModal");

    if (orderModal) {

        const total =
            cart.reduce(
                (sum, item) =>
                    sum +
                    item.price *
                    item.quantity,
                0
            );

        document.getElementById(
            "orderTotal"
        ).textContent =
            formatPrice(total);

        orderModal.style.display = "flex";

    }

}


function closeOrder() {

    const orderModal =
        document.getElementById("orderModal");

    if (orderModal) {

        orderModal.style.display = "none";

    }

}


// ================= BUYURTMA FORMASI =================

const orderForm =
    document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                document
                    .getElementById("orderName")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("orderPhone")
                    .value
                    .trim();

            const address =
                document
                    .getElementById("orderAddress")
                    .value
                    .trim();

            const payment =
                document.querySelector(
                    'input[name="payment"]:checked'
                );


            if (
                !name ||
                !phone ||
                !address ||
                !payment
            ) {

                alert(
                    "⚠️ Iltimos, barcha ma’lumotlarni kiriting!"
                );

                return;

            }


            const total =
                cart.reduce(
                    (sum, item) =>
                        sum +
                        item.price *
                        item.quantity,
                    0
                );


            alert(
                "🎉 Buyurtma muvaffaqiyatli qabul qilindi!\n\n" +

                "👤 Ism: " +
                name +

                "\n📞 Telefon: " +
                phone +

                "\n📍 Manzil: " +
                address +

                "\n💳 To‘lov: " +
                payment.value +

                "\n💰 Jami: " +
                formatPrice(total)
            );


            cart = [];

            updateCart();

            closeOrder();

            closeCart();

            orderForm.reset();

        }
    );

}


// ================= XABAR =================

function showMessage(message) {

    const oldMessage =
        document.querySelector(
            ".success-message"
        );

    if (oldMessage) {

        oldMessage.remove();

    }


    const div =
        document.createElement("div");

    div.className =
        "success-message";

    div.textContent =
        message;

    document.body.appendChild(div);


    setTimeout(() => {

        div.remove();

    }, 2500);

}


// ================= BOSHLASH =================

displayProducts();

updateCart();
function displayProducts(list = products) {
    const container = document.getElementById("products");

    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="not-found">
                <div style="font-size:60px;">🔍</div>
                <h3>Mahsulot topilmadi</h3>
                <p>Boshqa mahsulot nomini qidirib ko‘ring.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(product => `
        <div class="product-card">

            <div class="animated-product">
                <div class="product-emoji">
                    ${product.icon}
                </div>
                <div class="shine"></div>
            </div>

            <h3>${product.name}</h3>

            <div class="product-category">
                ${product.categoryName}
            </div>

            <div class="prices">
                <span class="new-price">
                    ${formatPrice(product.price)}
                    ${product.unit ? " / " + product.unit : ""}
                </span>
            </div>

            <button
                class="add-btn"
                onclick="addToCart(${product.id})"
            >
                🛒 Savatga qo‘shish
            </button>

        </div>
    `).join("");
}