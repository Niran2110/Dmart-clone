const products = [
  {
    id: 1,
    name: "Britannia Vita Marie Gold Biscuits : 900 g",
    image: "image/Biscuit1.jpg",
    mrp: 160,
    price: 140,
    discount: 20,
    weight: "900 g",
  },

  {
    id: 2,
    name: "Sunfeast Dark Fantasy Choco Fills Cookies : 460 g",
    image: "image/Biscuit2.jpg",
    mrp: 370,
    price: 183,
    discount: 187,
    weight: "460 g",
  },

  {
    id: 3,
    name: "Britannia Good Day Cashew Cookies : 526 g",
    image: "image/Biscuit3.jpg",
    mrp: 130,
    price: 77,
    discount: 53,
    weight: "526 g",
  },

  {
    id: 4,
    name: "Bisky Bites Cashew Cookies : 600 g",
    image: "image/Biscuit4.jpg",
    mrp: 107,
    price: 79,
    discount: 28,
    weight: "600 g",
  },

  {
    id: 5,
    name: "Britannia NutriChoice Digestive Hi-Fibre Biscuits : 960 g",
    image: "image/Biscuit5.jpg",
    mrp: 231,
    price: 142,
    discount: 89,
    weight: "960 g",
  },

  {
    id: 6,
    name: "Sunfeast Mom's Magic Cashew & Almond Cookies",
    image: "image/Biscuit6.jpg",
    mrp: 100,
    price: 70,
    discount: 30,
    weight: "200 g",
  },

  {
    id: 7,
    name: "Britannia Marie Gold Biscuits : 1 kg",
    image: "image/Biscuit7.jpg",
    mrp: 150,
    price: 118,
    discount: 32,
    weight: "1 kg",
  },

  {
    id: 8,
    name: "Parle-G Original Gluco Biscuits : 800 g",
    image: "image/Biscuit8.jpg",
    mrp: 100,
    price: 80,
    discount: 20,
    weight: "800 g",
  },

  {
    id: 9,
    name: "Parle Hide & Seek Chocolate Chip Cookies : 350 g",
    image: "image/Biscuit9.jpg",
    mrp: 100,
    price: 90,
    discount: 10,
    weight: "350 g",
  },

  {
    id: 10,
    name: "Parle-G Gold Biscuits : 1 kg",
    image: "image/Biscuit10.jpg",
    mrp: 150,
    price: 125,
    discount: 25,
    weight: "1 kg",
  },

  {
    id: 11,
    name: "Parle Monaco Classic Regular Salted Biscuit : 696 g",
    image: "image/Biscuit11.jpg",
    mrp: 135,
    price: 117,
    discount: 18,
    weight: "696 g",
  },

  {
    id: 12,
    name: "Britannia Bourbon Sandwich Flavoured Biscuits : 500 g",
    image: "image/Biscuit12.jpg",
    mrp: 100,
    price: 85,
    discount: 15,
    weight: "500 g",
  },

  {
    id: 13,
    name: "Cadbury Oreo Vanilla Creme Sandwich Biscuit : 125 g",
    image: "image/Biscuit13.jpg",
    mrp: 40,
    price: 36,
    discount: 4,
    weight: "125 g",
  },

  {
    id: 14,
    name: "Cadbury Oreo Choco Creme Sandwich Biscuits : 125 g",
    image: "image/Biscuit14.jpg",
    mrp: 40,
    price: 36,
    discount: 4,
    weight: "125 g",
  },

  {
    id: 15,
    name: "Britannia 50-50 Sweet & Salty Biscuits : 200 g",
    image: "image/Biscuit15.jpg",
    mrp: 40,
    price: 38,
    discount: 2,
    weight: "200 g",
  },

  {
    id: 16,
    name: "Britannia 50-50 Maska Chaska Biscuits : 114 g",
    image: "image/Biscuit16.jpg",
    mrp: 30,
    price: 28,
    discount: 2,
    weight: "114 g",
  },

  {
    id: 17,
    name: "Britannia Good Day Butter Cookies : 526 g",
    image: "image/Biscuit17.jpg",
    mrp: 110,
    price: 87,
    discount: 23,
    weight: "526 g",
  },

  {
    id: 18,
    name: "Britannia Good Day Chocochip Cookies : 444 g",
    image: "image/Biscuit8.jpg",
    mrp: 135,
    price: 86,
    discount: 49,
    weight: "444 g",
  },

  {
    id: 19,
    name: "Britannia Jim Jam Naughty Jam Biscuits : 138 g",
    image: "image/Biscuit19.jpg",
    mrp: 40,
    price: 38,
    discount: 2,
    weight: "138 g",
  },

  {
    id: 20,
    name: "Britannia Treat Choco Creme Biscuits : 50 g",
    image: "image/Biscuit20.jpg",
    mrp: 10,
    price: 10,
    discount: 0,
    weight: "50 g",
  },

  {
    id: 21,
    name: "Britannia Milk Bikis Biscuits : 200 g",
    image: "image/Biscuit1.jpg",
    mrp: 55,
    price: 52,
    discount: 3,
    weight: "200 g",
  },

  {
    id: 22,
    name: "Britannia Nice Time Biscuits : 150 g",
    image: "image/Biscuit2.jpg",
    mrp: 35,
    price: 32,
    discount: 3,
    weight: "150 g",
  },

  {
    id: 23,
    name: "Britannia Tiger Glucose Biscuits : 500 g",
    image: "image/Biscuit3.jpg",
    mrp: 70,
    price: 65,
    discount: 5,
    weight: "500 g",
  },

  {
    id: 24,
    name: "Britannia Little Hearts Biscuits : 75 g",
    image: "image/Biscuit4.jpg",
    mrp: 25,
    price: 23,
    discount: 2,
    weight: "75 g",
  },

  {
    id: 25,
    name: "Britannia NutriChoice 5 Grain Digestive Biscuits : 200 g",
    image: "image/Biscuit5.jpg",
    mrp: 65,
    price: 62,
    discount: 3,
    weight: "200 g",
  },

  {
    id: 26,
    name: "Britannia NutriChoice Sugar Free Cracker Biscuits : 295 g",
    image: "image/Biscuit6.jpg",
    mrp: 50,
    price: 47,
    discount: 3,
    weight: "295 g",
  },

  {
    id: 27,
    name: "Sunfeast Bounce Orange Creme Biscuits : 58 g",
    image: "image/Biscuit7.jpg",
    mrp: 10,
    price: 10,
    discount: 0,
    weight: "58 g",
  },

  {
    id: 28,
    name: "Sunfeast Bounce Pineapple Creme Biscuits : 58 g",
    image: "image/Biscuit8.jpg",
    mrp: 10,
    price: 10,
    discount: 0,
    weight: "58 g",
  },

  {
    id: 29,
    name: "Sunfeast Bounce Elaichi Creme Biscuits : 58 g",
    image: "image/Biscuit9.jpg",
    mrp: 10,
    price: 10,
    discount: 0,
    weight: "58 g",
  },

  {
    id: 30,
    name: "Sunfeast Vita Orange Marie Light Biscuits : 100 g",
    image: "image/Biscuit10.jpg",
    mrp: 15,
    price: 14,
    discount: 1,
    weight: "100 g",
  },

  {
    id: 31,
    name: "Sunfeast Dark Fantasy Dark Crunch Choco Creme : 79 g",
    image: "image/Biscuit11.jpg",
    mrp: 30,
    price: 15,
    discount: 15,
    weight: "79 g",
  },

  {
    id: 32,
    name: "Sunfeast Dark Fantasy Choco Nut Fills Cookies : 345 g",
    image: "image/Biscuit12.jpg",
    mrp: 160,
    price: 152,
    discount: 8,
    weight: "345 g",
  },

  {
    id: 33,
    name: "Sunfeast Mom's Magic Butter Biscuits : 58.4 g",
    image: "image/Biscuit13.jpg",
    mrp: 10,
    price: 10,
    discount: 0,
    weight: "58.4 g",
  },

  {
    id: 34,
    name: "Parle KrackJack Biscuits : 400 g",
    image: "image/Biscuit14.jpg",
    mrp: 70,
    price: 65,
    discount: 5,
    weight: "400 g",
  },

  {
    id: 35,
    name: "Parle 20-20 Butter Cookies : 200 g",
    image: "image/Biscuit15.jpg",
    mrp: 40,
    price: 37,
    discount: 3,
    weight: "200 g",
  },

  {
    id: 36,
    name: "Parle 20-20 Cashew Almond Cookies : 200 g",
    image: "image/Biscuit16.jpg",
    mrp: 45,
    price: 42,
    discount: 3,
    weight: "200 g",
  },

  {
    id: 37,
    name: "Parle Platina Hide & Seek Choco Chip : 125 g",
    image: "image/Biscuit17.jpg",
    mrp: 40,
    price: 33,
    discount: 7,
    weight: "125 g",
  },

  {
    id: 38,
    name: "Parle Platina Hide & Seek Milano : 200 g",
    image: "image/Biscuit18.jpg",
    mrp: 170,
    price: 92,
    discount: 78,
    weight: "200 g",
  },

  {
    id: 39,
    name: "Parle Platina Nutricrunch Digestive Cookies : 1 kg",
    image: "image/Biscuit19.jpg",
    mrp: 320,
    price: 182,
    discount: 138,
    weight: "1 kg",
  },

  {
    id: 40,
    name: "Unibic Fruit & Nut Cookies : 75 g",
    image: "image/Biscuit20.jpg",
    mrp: 30,
    price: 28,
    discount: 2,
    weight: "75 g",
  },

  {
    id: 41,
    name: "Unibic Choco Chip Cookies : 75 g",
    image: "image/Biscuit1.jpg",
    mrp: 30,
    price: 28,
    discount: 2,
    weight: "75 g",
  },

  {
    id: 42,
    name: "Unibic Cashew Cookies : 75 g",
    image: "image/Biscuit2.jpg",
    mrp: 30,
    price: 28,
    discount: 2,
    weight: "75 g",
  },

  {
    id: 43,
    name: "Unibic Biscot Caramel Flavoured Biscuits : 250 g",
    image: "image/Biscuit3.jpg",
    mrp: 140,
    price: 99,
    discount: 41,
    weight: "250 g",
  },

  {
    id: 44,
    name: "McVitie's Digestive Creams Vanilla Biscuits : 400 g",
    image: "image/Biscuit4.jpg",
    mrp: 160,
    price: 128,
    discount: 32,
    weight: "400 g",
  },

  {
    id: 45,
    name: "Cremica Bourbon Biscuits : 150 g",
    image: "image/Biscuit5.jpg",
    mrp: 40,
    price: 36,
    discount: 4,
    weight: "150 g",
  },

  {
    id: 46,
    name: "Cremica Nice Biscuits : 150 g",
    image: "image/Biscuit6.jpg",
    mrp: 35,
    price: 32,
    discount: 3,
    weight: "150 g",
  },

  {
    id: 47,
    name: "Bisk Farm Marie Biscuits : 200 g",
    image: "image/Biscuit7.jpg",
    mrp: 40,
    price: 36,
    discount: 4,
    weight: "200 g",
  },

  {
    id: 48,
    name: "Bisk Farm Bourbon Biscuits : 150 g",
    image: "image/Biscuit8.jpg",
    mrp: 40,
    price: 35,
    discount: 5,
    weight: "150 g",
  },

  {
    id: 49,
    name: "Patanjali Doodh Biscuits : 200 g",
    image: "image/Biscuit9.jpg",
    mrp: 50,
    price: 45,
    discount: 5,
    weight: "200 g",
  },

  {
    id: 50,
    name: "Patanjali Coconut Biscuits : 200 g",
    image: "image/Biscuit10.jpg",
    mrp: 50,
    price: 45,
    discount: 5,
    weight: "200 g",
  },
];

let cart = [];

const productGrid = document.getElementById("productGrid");

function displayProducts(productList) {
  productGrid.innerHTML = "";

  productList.forEach(function (product) {
    const cartItem = cart.find(function (item) {
      return item.id === product.id;
    });

    const quantity = cartItem ? cartItem.quantity : 0;

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/300x250/ffffff/333333?text=Product+Image'">

                <div class="product-badge">
                    <i class="fa-solid fa-leaf"></i>
                </div>

            </div>


            <div class="product-name">
                ${product.name}
            </div>


            <div class="price-row">

                <div class="price-details">

                    <div>

                        <span class="mrp">
                            MRP ₹${product.mrp}
                        </span>

                        <span class="dmart-label">
                            DMart
                        </span>

                    </div>

                    <div class="dmart-price">
                        ₹${product.price}
                    </div>

                    <div class="tax">
                        (Inclusive of all taxes)
                    </div>

                </div>


                <div class="discount">

                    <strong>
                        ₹${product.discount}
                    </strong>

                    <span>
                        OFF
                    </span>

                </div>

            </div>


            <select
                class="variant-select"
                id="variant-${product.id}">

                <option value="${product.price}">
                    ${product.weight}
                </option>

            </select>


            ${
              quantity === 0
                ? `
                    <button
                        class="add-cart-button"
                        onclick="addToCart(${product.id})">

                        <i class="fa-solid fa-cart-shopping"></i>

                        ADD TO CART

                    </button>
                `
                : `
                    <div class="quantity-controller">

                        <button
                            class="delete-button"
                            onclick="removeOne(${product.id})">

                            ${
                              quantity === 1
                                ? '<i class="fa-solid fa-trash"></i>'
                                : "-"
                            }

                        </button>


                        <div class="quantity-number">
                            ${quantity}
                        </div>


                        <button
                            onclick="increaseQuantity(${product.id})">
                            +
                        </button>

                    </div>
                `
            }

        `;

    productGrid.appendChild(card);
  });
}


function addToCart(productId) {
  const product = products.find(function (product) {
    return product.id === productId;
  });

  if (!product) {
    return;
  }

  const existingItem = cart.find(function (item) {
    return item.id === productId;
  });

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,

      name: product.name,

      image: product.image,

      price: product.price,

      mrp: product.mrp,

      discount: product.discount,

      weight: product.weight,

      quantity: 1,
    });
  }

  updateCart();
}


function increaseQuantity(productId) {
  const item = cart.find(function (item) {
    return item.id === productId;
  });

  if (item) {
    item.quantity++;
  }

  updateCart();
}


function removeOne(productId) {
  const item = cart.find(function (item) {
    return item.id === productId;
  });

  if (!item) {
    return;
  }

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter(function (cartItem) {
      return cartItem.id !== productId;
    });
  }

  updateCart();
}



function removeFromCart(productId) {
  cart = cart.filter(function (item) {
    return item.id !== productId;
  });

  updateCart();
}



function updateCart() {
  displayProducts(products);

  updateHeaderCart();

  updateCartDrawer();
}



function updateHeaderCart() {
  let totalQuantity = 0;

  let totalPrice = 0;

  cart.forEach(function (item) {
    totalQuantity += item.quantity;

    totalPrice += item.price * item.quantity;
  });

  document.getElementById("cartCount").textContent = totalQuantity;

  document.getElementById("cartPrice").textContent = "₹" + totalPrice;
}


const cartItems = document.getElementById("cartItems");

const cartEmpty = document.getElementById("cartEmpty");

const cartBottom = document.getElementById("cartBottom");

function updateCartDrawer() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartEmpty.style.display = "flex";

    cartItems.style.display = "none";

    cartBottom.style.display = "none";

    return;
  }

  cartEmpty.style.display = "none";

  cartItems.style.display = "block";

  cartBottom.style.display = "grid";

  let total = 0;

  let totalMrp = 0;

  let totalQuantity = 0;

  cart.forEach(function (item) {
    total += item.price * item.quantity;

    totalMrp += item.mrp * item.quantity;

    totalQuantity += item.quantity;

    const cartItem = document.createElement("div");

    cartItem.className = "cart-item";

    cartItem.innerHTML = `

            <img
                src="${item.image}"
                class="cart-item-image"
                alt="${item.name}"
                onerror="this.src='https://placehold.co/150x150/ffffff/333333?text=Image'">


            <div class="cart-item-details">

                <div class="cart-item-name">
                    ${item.name}
                </div>


                <div class="cart-item-price">

                    You Pay
                    ₹${item.price * item.quantity}

                    <span class="cart-item-saving">

                        You Save
                        ₹${item.discount * item.quantity}

                    </span>

                </div>


                <div class="cart-item-bottom">

                    <span class="variant-text">

                        Variant:
                        <strong>
                            ${item.weight}
                        </strong>

                    </span>


                    <div class="drawer-quantity">

                        <button
                            onclick="removeOne(${item.id})">

                            ${
                              item.quantity === 1
                                ? '<i class="fa-solid fa-trash"></i>'
                                : "-"
                            }

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="increaseQuantity(${item.id})">

                            +

                        </button>

                    </div>


                    <button
                        class="cart-delete"
                        onclick="removeFromCart(${item.id})">

                        ×

                    </button>

                </div>

            </div>

        `;

    cartItems.appendChild(cartItem);
  });

  const saved = totalMrp - total;

  document.getElementById("savedAmount").textContent = "₹" + saved.toFixed(1);

  document.getElementById("drawerCartTotal").textContent = "₹" + total;

  document.getElementById("drawerCartCount").textContent =
    totalQuantity + " Item(s)";
}



const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchProducts);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchProducts();
  }
});

function searchProducts() {
  const value = searchInput.value.trim().toLowerCase();

  if (value === "") {
    displayProducts(products);

    return;
  }

  const filtered = products.filter(function (product) {
    return product.name.toLowerCase().includes(value);
  });

  displayProducts(filtered);
}



const locationButton = document.getElementById("locationButton");

const locationOverlay = document.getElementById("locationOverlay");

const closeLocation = document.getElementById("closeLocation");

locationButton.addEventListener("click", function () {
  closeAllPanels();

  locationOverlay.classList.add("active");
});

closeLocation.addEventListener("click", function () {
  locationOverlay.classList.remove("active");
});

locationOverlay.addEventListener("click", function (event) {
  if (event.target === locationOverlay) {
    locationOverlay.classList.remove("active");
  }
});



const signinButton = document.getElementById("signinButton");

const loginOverlay = document.getElementById("loginOverlay");

const closeLogin = document.getElementById("closeLogin");

signinButton.addEventListener("click", function () {
  closeAllPanels();

  loginOverlay.classList.add("active");
});

closeLogin.addEventListener("click", function () {
  loginOverlay.classList.remove("active");
});

loginOverlay.addEventListener("click", function (event) {
  if (event.target === loginOverlay) {
    loginOverlay.classList.remove("active");
  }
});


const mobileNumber = document.getElementById("mobileNumber");

const continueButton = document.getElementById("continueButton");

mobileNumber.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");

  if (this.value.length === 10) {
    continueButton.disabled = false;

    continueButton.style.backgroundColor = "#20a944";

    continueButton.style.color = "white";

    continueButton.style.cursor = "pointer";
  } else {
    continueButton.disabled = true;

    continueButton.style.backgroundColor = "#d5d5d5";

    continueButton.style.color = "#999";

    continueButton.style.cursor = "not-allowed";
  }
});

continueButton.addEventListener("click", function () {
  if (mobileNumber.value.length === 10) {
    alert("OTP will be sent to +91 " + mobileNumber.value);
  }
});



const notificationButton = document.getElementById("notificationButton");

const notificationDrawer = document.getElementById("notificationDrawer");

const closeNotification = document.getElementById("closeNotification");

notificationButton.addEventListener("click", function () {
  closeAllPanels();

  commonOverlay.classList.add("active");

  notificationDrawer.classList.add("active");
});

closeNotification.addEventListener("click", closeDrawer);



const cartButton = document.getElementById("cartButton");

const cartDrawer = document.getElementById("cartDrawer");

const closeCart = document.getElementById("closeCart");

const commonOverlay = document.getElementById("commonOverlay");

cartButton.addEventListener("click", function () {
  closeAllPanels();

  commonOverlay.classList.add("active");

  cartDrawer.classList.add("active");

  updateCartDrawer();
});

closeCart.addEventListener("click", closeDrawer);

commonOverlay.addEventListener("click", closeDrawer);



function closeDrawer() {
  notificationDrawer.classList.remove("active");

  cartDrawer.classList.remove("active");

  commonOverlay.classList.remove("active");
}



function closeAllPanels() {
  locationOverlay.classList.remove("active");

  loginOverlay.classList.remove("active");

  notificationDrawer.classList.remove("active");

  cartDrawer.classList.remove("active");

  commonOverlay.classList.remove("active");
}


document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeAllPanels();
  }
});


displayProducts(products);

updateHeaderCart();

updateCartDrawer();
