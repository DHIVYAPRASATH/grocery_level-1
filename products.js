const medicalProducts = [
    { id: 1, name: "Cetirizine 10mg", price: 16.10, quantity: "10 Tablets", imgUrl: "https://i.imgur.com/QWMkLQ6.jpg" },
    { id: 2, name: "CUFRIL-D Cough Syrup", price: 88, quantity: "1 Bottle", imgUrl: "https://i.imgur.com/t3jlpYD.jpg" },
    { id: 3, name: "Cheston Cold", price: 34, quantity: "10 Tablets", imgUrl: "https://i.imgur.com/KqTyIOv.png" },
    { id: 4, name: "Dolo 650", price: 24.75, quantity: "15 Tablets", imgUrl: "https://i.imgur.com/ZgxivW4.jpg" },
    { id: 5, name: "Metolar XR 50", price: 77.66, quantity: "15 Tablets", imgUrl: "https://i.imgur.com/VfI11ZP.png" },
    { id: 6, name: "Gelusil Chewable Tablets", price: 15.92, quantity: "10 Tablets", imgUrl: "https://i.imgur.com/v7EIJzM.jpg" }
];

const gardeningProducts = [
    { id: 1, name: "Gardening Gloves", price: 160, quantity: "1 Pair", imgUrl: "https://i.imgur.com/dBujtOd.jpg" },
    { id: 2, name: "Watering Can", price: 249, quantity: "1", imgUrl: "https://i.imgur.com/tB2zQj8.jpg" },
    { id: 3, name: "Unigrow Manure", price: 196, quantity: "900 g", imgUrl: "https://i.imgur.com/xguc80f.jpg" }
];

const babyCareProducts = [
    { id: 1, name: "Johnson's Baby Oil", price: 425, quantity: "500 ml", imgUrl: "https://i.imgur.com/0LKWxiJ.jpg" },
    { id: 2, name: "Little's Baby Wipes", price: 95, quantity: "80 Wipes", imgUrl: "https://i.imgur.com/6rlktPI.jpg" },
    { id: 3, name: "Mama Earth Baby Moisturizer", price: 339.15, quantity: "400 ml", imgUrl: "https://i.imgur.com/DEONooZ.jpg" },
    { id: 4, name: "Himalaya Baby Shampoo", price: 230, quantity: "400 ml", imgUrl: "https://i.imgur.com/fuAMCYN.jpg" },
    { id: 5, name: "Johnson's Baby Powder", price: 155, quantity: "200 g", imgUrl: "https://i.imgur.com/HsECirZ.jpg" },
    { id: 6, name: "Pampers Baby Pants", price: 699, quantity: "58 Pants", imgUrl: "https://i.imgur.com/97mm2rX.jpg" }
];

const fruitsAndVeggies = [
    { id: 1, name: "Apple", price: 100, quantity: "1 KG", imgUrl: "https://i.imgur.com/vUJ2JKU.png" },
    { id: 2, name: "Chili", price: 80, quantity: "1 KG", imgUrl: "https://i.imgur.com/rFhSMZN.png" },
    { id: 3, name: "Onion", price: 50, quantity: "1 KG", imgUrl: "https://i.imgur.com/sGLggWL.jpg" },
    { id: 4, name: "Potato", price: 60, quantity: "1 KG", imgUrl: "https://i.imgur.com/WFjH6ui.png" },
    { id: 5, name: "Oranges", price: 80, quantity: "1 KG", imgUrl: "https://i.imgur.com/5nFAIJ8.jpg" },
    { id: 6, name: "Tomato", price: 80, quantity: "1 KG", imgUrl: "https://i.imgur.com/8l5hDhS.png" }
];

const officeProducts = [
    { id: 1, name: "Kangaroo Stapler No.-10", price: 210, quantity: "5", imgUrl: "https://i.imgur.com/mZtkksq.jpg" },
    { id: 2, name: "Kangaroo Punching Machine", price: 142, quantity: "1", imgUrl: "https://i.imgur.com/KkYKE2x.jpg" },
    { id: 3, name: "Natraj HB Pencils", price: 300, quantity: "Pack of 10", imgUrl: "https://i.imgur.com/fFUTngw.jpg" },
    { id: 4, name: "Natraj Ball Pens", price: 167, quantity: "Pack of 10", imgUrl: "https://i.imgur.com/yl5NWbN.jpg" },
    { id: 5, name: "Post It Sticky Notes", price: 358, quantity: "Pack of 6", imgUrl: "https://i.imgur.com/tHqNkY2.jpg" },
    { id: 6, name: "Kangaroo Stapler Pins No.-10", price: 237, quantity: "Pack of 5", imgUrl: "https://i.imgur.com/BZfAFQm.jpg" }
];

const beautyProducts = [
    { id: 1, name: "Lakme Blush and Glow Face Wash", price: 144, quantity: "100 g", imgUrl: "https://i.imgur.com/RulBeyf.jpg" },
    { id: 2, name: "Ponds Men Pollution Out Facewash", price: 159, quantity: "100 g", imgUrl: "https://i.imgur.com/azJYLRo.jpg" },
    { id: 3, name: "Nivea Body Milk", price: 178, quantity: "200 ml", imgUrl: "https://i.imgur.com/XroaNlX.jpg" },
    { id: 4, name: "Nivea Lip Balm", price: 151, quantity: "1", imgUrl: "https://i.imgur.com/0eK7qXj.jpg" },
    { id: 5, name: "Berado Hair Growth Oil", price: 585, quantity: "50 ml", imgUrl: "https://i.imgur.com/qnTjfBG.jpg" },
    { id: 6, name: "Olay Total Effects Day Cream", price: 749, quantity: "50 g", imgUrl: "https://i.imgur.com/Hmo66oR.jpg" }
];

function displayProducts(products) {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = ''; // Clear the container first

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        productBox.innerHTML = `
            <img alt="${product.name}" src="${product.imgUrl}">
            <strong>${product.name}</strong>
            <span class="quantity">${product.quantity}</span>
            <span class="price">Rs. ${product.price}</span>
            <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
                <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
            <a class="like-btn">
                <i class="far fa-heart"></i>
            </a>
        `;
        productContainer.appendChild(productBox);
    });

    // Add event listeners to all the "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to handle adding products to the cart
function addToCart(event) {
    const productElement = event.target.closest('.product-box');
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));
    const productQuantity = productElement.getAttribute('data-quantity');

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        count: 1
    };

    // Get the cart from localStorage or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
        // If product already exists in the cart, increase the count
        cart[existingProductIndex].count++;
    } else {
        // Otherwise, add new product to the cart
        cart.push(product);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to the cart!`);
}

// Function to determine which category to display based on the page name
window.addEventListener('load', () => {
    const pageName = window.location.pathname.split('/').pop();

    if (pageName === "Medicine Category Page HTML.html") {
        displayProducts(medicalProducts);
    } else if (pageName === "Gardening Category Page HTML.html") {
        displayProducts(gardeningProducts);
    } else if (pageName === "Baby Care Category Page HTML.html") {
        displayProducts(babyCareProducts);
    } else if (pageName === "Fruits Category Page HTML.html") {
        displayProducts(fruitsAndVeggies);
    } else if (pageName === "Office Category Page HTML.html") {
        displayProducts(officeProducts);
    } else if (pageName === "Beauty Category Page HTML.html") {
        displayProducts(beautyProducts);
    }
});

// // Array to store product details
// const medicalProduct = [
//     {
//         id: 1,
//         name: "Cetirizine 10mg",
//         price: 16.10,
//         quantity: "10 Tablets",
//         imgUrl: "https://i.imgur.com/QWMkLQ6.jpg"
//     },
//     {
//         id: 2,
//         name: "CUFRIL-D Cough Syrup",
//         price: 88,
//         quantity: "1 Bottle",
//         imgUrl: "https://i.imgur.com/t3jlpYD.jpg"
//     },
//     {
//         id: 3,
//         name: "Cheston Cold",
//         price: 34,
//         quantity: "10 Tablets",
//         imgUrl: "https://i.imgur.com/KqTyIOv.png"
//     },
//     {
//         id: 4,
//         name: "Dolo 650",
//         price: 24.75,
//         quantity: "15 Tablets",
//         imgUrl: "https://i.imgur.com/ZgxivW4.jpg"
//     },
//     {
//         id: 5,
//         name: "Metolar XR 50",
//         price: 77.66,
//         quantity: "15 Tablets",
//         imgUrl: "https://i.imgur.com/VfI11ZP.png"
//     },
//     {
//         id: 6,
//         name: "Gelusil Chewable Tablets",
//         price: 15.92,
//         quantity: "10 Tablets",
//         imgUrl: "https://i.imgur.com/v7EIJzM.jpg"
//     }
// ];

// // Function to dynamically add products to the page
// function displayProducts() {
//     const productContainer = document.querySelector('.product-container');
//     products.forEach(medicalProduct => {
//         const productBox = document.createElement('div');
//         productBox.classList.add('product-box');
//         productBox.innerHTML = `
//             <img alt="${product.name}" src="${product.imgUrl}">
//             <strong>${product.name}</strong>
//             <span class="quantity">${product.quantity}</span>
//             <span class="price">Rs. ${product.price}</span>
//             <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
//                 <i class="fas fa-shopping-bag"></i> Add to Cart
//             </button>
//             <a class="like-btn">
//                 <i class="far fa-heart"></i>
//             </a>
//         `;
//         productContainer.appendChild(productBox);
//     });

//     // Add event listeners to all the "Add to Cart" buttons
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', addToCart);
//     });
// }

// // Function to add product to the cart
// function addToCart(event) {
//     const productElement = event.target.closest('.product-box');
//     const productId = productElement.getAttribute('data-id');
//     const productName = productElement.getAttribute('data-name');
//     const productPrice = parseFloat(productElement.getAttribute('data-price'));
//     const productQuantity = productElement.getAttribute('data-quantity');

//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: productQuantity,
//         count: 1 // Default quantity added is 1
//     };

//     // Get the cart from localStorage or initialize it as an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === productId);
//     if (existingProductIndex !== -1) {
//         // If product already exists in the cart, increase the count
//         cart[existingProductIndex].count++;
//     } else {
//         // Otherwise, add new product to the cart
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} has been added to the cart!`);
// }

// // Run the displayProducts function on page load
// window.onload = displayProducts;


// // Array of gardening products
// const gardeningProducts = [
//     {
//         id: 1,
//         name: "Gardening Gloves",
//         price: 160,
//         quantity: "1 Pair",
//         imgUrl: "https://i.imgur.com/dBujtOd.jpg"
//     },
//     {
//         id: 2,
//         name: "Watering Can",
//         price: 249,
//         quantity: "1",
//         imgUrl: "https://i.imgur.com/tB2zQj8.jpg"
//     },
//     {
//         id: 3,
//         name: "Unigrow Manure",
//         price: 196,
//         quantity: "900 g",
//         imgUrl: "https://i.imgur.com/xguc80f.jpg"
//     }
// ];

// // Function to dynamically display the gardening products
// function displayGardeningProducts() {
//     const productContainer = document.querySelector('.product-container');
//     gardeningProducts.forEach(product => {
//         const productBox = document.createElement('div');
//         productBox.classList.add('product-box');
//         productBox.innerHTML = `
//             <img alt="${product.name}" src="${product.imgUrl}">
//             <strong>${product.name}</strong>
//             <span class="quantity">${product.quantity}</span>
//             <span class="price">Rs. ${product.price}</span>
//             <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
//                 <i class="fas fa-shopping-bag"></i> Add to Cart
//             </button>
//             <a class="like-btn">
//                 <i class="far fa-heart"></i>
//             </a>
//         `;
//         productContainer.appendChild(productBox);
//     });

//     // Add event listeners to all the "Add to Cart" buttons
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', addToCart);
//     });
// }

// // Function to add a product to the cart
// function addToCart(event) {
//     const productElement = event.target.closest('.product-box');
//     const productId = productElement.getAttribute('data-id');
//     const productName = productElement.getAttribute('data-name');
//     const productPrice = parseFloat(productElement.getAttribute('data-price'));
//     const productQuantity = productElement.getAttribute('data-quantity');

//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: productQuantity,
//         count: 1 // Default quantity added is 1
//     };

//     // Get the cart from localStorage or initialize it as an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === productId);
//     if (existingProductIndex !== -1) {
//         // If product already exists in the cart, increase the count
//         cart[existingProductIndex].count++;
//     } else {
//         // Otherwise, add new product to the cart
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} has been added to the cart!`);
// }

// // Run the displayGardeningProducts function when the page loads
// window.onload = displayGardeningProducts;

// // Array of baby care products
// const babyCareProducts = [
//     {
//         id: 1,
//         name: "Johnson's Baby Oil",
//         price: 425,
//         quantity: "500 ml",
//         imgUrl: "https://i.imgur.com/0LKWxiJ.jpg"
//     },
//     {
//         id: 2,
//         name: "Little's Baby Wipes",
//         price: 95,
//         quantity: "80 Wipes",
//         imgUrl: "https://i.imgur.com/6rlktPI.jpg"
//     },
//     {
//         id: 3,
//         name: "Mama Earth Baby Moisturizer",
//         price: 339.15,
//         quantity: "400 ml",
//         imgUrl: "https://i.imgur.com/DEONooZ.jpg"
//     },
//     {
//         id: 4,
//         name: "Himalaya Baby Shampoo",
//         price: 230,
//         quantity: "400 ml",
//         imgUrl: "https://i.imgur.com/fuAMCYN.jpg"
//     },
//     {
//         id: 5,
//         name: "Johnson's Baby Powder",
//         price: 155,
//         quantity: "200 g",
//         imgUrl: "https://i.imgur.com/HsECirZ.jpg"
//     },
//     {
//         id: 6,
//         name: "Pampers Baby Pants",
//         price: 699,
//         quantity: "58 Pants",
//         imgUrl: "https://i.imgur.com/97mm2rX.jpg"
//     }
// ];

// // Function to dynamically display the baby care products
// function displayBabyCareProducts() {
//     const productContainer = document.querySelector('.product-container');
//     babyCareProducts.forEach(product => {
//         const productBox = document.createElement('div');
//         productBox.classList.add('product-box');
//         productBox.innerHTML = `
//             <img alt="${product.name}" src="${product.imgUrl}">
//             <strong>${product.name}</strong>
//             <span class="quantity">${product.quantity}</span>
//             <span class="price">Rs. ${product.price}</span>
//             <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
//                 <i class="fas fa-shopping-bag"></i> Add to Cart
//             </button>
//             <a class="like-btn">
//                 <i class="far fa-heart"></i>
//             </a>
//         `;
//         productContainer.appendChild(productBox);
//     });

//     // Add event listeners to all the "Add to Cart" buttons
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', addToCart);
//     });
// }

// // Function to add a product to the cart
// function addToCart(event) {
//     const productElement = event.target.closest('.product-box');
//     const productId = productElement.getAttribute('data-id');
//     const productName = productElement.getAttribute('data-name');
//     const productPrice = parseFloat(productElement.getAttribute('data-price'));
//     const productQuantity = productElement.getAttribute('data-quantity');

//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: productQuantity,
//         count: 1 // Default quantity added is 1
//     };

//     // Get the cart from localStorage or initialize it as an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === productId);
//     if (existingProductIndex !== -1) {
//         // If product already exists in the cart, increase the count
//         cart[existingProductIndex].count++;
//     } else {
//         // Otherwise, add new product to the cart
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} has been added to the cart!`);
// }

// // Run the displayBabyCareProducts function when the page loads
// // window.onload = displayBabyCareProducts;


// // Array of fruits and vegetables
// const fruitsAndVeggies = [
//     {
//         id: 1,
//         name: "Apple",
//         price: 100,
//         quantity: "1 KG",
//         imgUrl: "https://i.imgur.com/vUJ2JKU.png"
//     },
//     {
//         id: 2,
//         name: "Chili",
//         price: 80,
//         quantity: "1 KG",
//         imgUrl: "https://i.imgur.com/rFhSMZN.png"
//     },
//     {
//         id: 3,
//         name: "Onion",
//         price: 50,
//         quantity: "1 KG",
//         imgUrl: "https://i.imgur.com/sGLggWL.jpg"
//     },
//     {
//         id: 4,
//         name: "Potato",
//         price: 60,
//         quantity: "1 KG",
//         imgUrl: "https://i.imgur.com/WFjH6ui.png"
//     },
//     {
//         id: 5,
//         name: "Oranges",
//         price: 80,
//         quantity: "1 KG",
//         imgUrl: "https://i.imgur.com/5nFAIJ8.jpg"
//     },
//     {
//         id: 6,
//         name: "Tomato",
//         price: 80,
//         quantity: "1 KG",
//         imgUrl: "https://i.imgur.com/8l5hDhS.png"
//     }
// ];

// // Function to dynamically display the fruits and vegetables
// function displayFruitsAndVeggies() {
//     const productContainer = document.querySelector('.product-container');
//     fruitsAndVeggies.forEach(product => {
//         const productBox = document.createElement('div');
//         productBox.classList.add('product-box');
//         productBox.innerHTML = `
//             <img alt="${product.name}" src="${product.imgUrl}">
//             <strong>${product.name}</strong>
//             <span class="quantity">${product.quantity}</span>
//             <span class="price">Rs. ${product.price}</span>
//             <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
//                 <i class="fas fa-shopping-bag"></i> Add to Cart
//             </button>
//             <a class="like-btn">
//                 <i class="far fa-heart"></i>
//             </a>
//         `;
//         productContainer.appendChild(productBox);
//     });

//     // Add event listeners to all the "Add to Cart" buttons
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', addToCart);
//     });
// }

// // Function to add a product to the cart
// function addToCart(event) {
//     const productElement = event.target.closest('.product-box');
//     const productId = productElement.getAttribute('data-id');
//     const productName = productElement.getAttribute('data-name');
//     const productPrice = parseFloat(productElement.getAttribute('data-price'));
//     const productQuantity = productElement.getAttribute('data-quantity');

//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: productQuantity,
//         count: 1 // Default quantity added is 1
//     };

//     // Get the cart from localStorage or initialize it as an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === productId);
//     if (existingProductIndex !== -1) {
//         // If product already exists in the cart, increase the count
//         cart[existingProductIndex].count++;
//     } else {
//         // Otherwise, add new product to the cart
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} has been added to the cart!`);
// }

// // Run the displayFruitsAndVeggies function when the page loads
// // window.onload = displayFruitsAndVeggies;


// // Array of office products
// const officeProducts = [
//     {
//         id: 1,
//         name: "Kangaroo Stapler No.-10",
//         price: 210,
//         quantity: "5",
//         imgUrl: "https://i.imgur.com/mZtkksq.jpg"
//     },
//     {
//         id: 2,
//         name: "Kangaroo Punching Machine",
//         price: 142,
//         quantity: "1",
//         imgUrl: "https://i.imgur.com/KkYKE2x.jpg"
//     },
//     {
//         id: 3,
//         name: "Natraj HB Pencils",
//         price: 300,
//         quantity: "Pack of 10",
//         imgUrl: "https://i.imgur.com/fFUTngw.jpg"
//     },
//     {
//         id: 4,
//         name: "Natraj Ball Pens",
//         price: 167,
//         quantity: "Pack of 10",
//         imgUrl: "https://i.imgur.com/yl5NWbN.jpg"
//     },
//     {
//         id: 5,
//         name: "Post It Sticky Notes",
//         price: 358,
//         quantity: "Pack of 6",
//         imgUrl: "https://i.imgur.com/tHqNkY2.jpg"
//     },
//     {
//         id: 6,
//         name: "Kangaroo Stapler Pins No.-10",
//         price: 237,
//         quantity: "Pack of 5",
//         imgUrl: "https://i.imgur.com/BZfAFQm.jpg"
//     }
// ];

// // Function to dynamically display the office products
// function displayOfficeProducts() {
//     const productContainer = document.querySelector('.product-container');
//     officeProducts.forEach(product => {
//         const productBox = document.createElement('div');
//         productBox.classList.add('product-box');
//         productBox.innerHTML = `
//             <img alt="${product.name}" src="${product.imgUrl}">
//             <strong>${product.name}</strong>
//             <span class="quantity">${product.quantity}</span>
//             <span class="price">Rs. ${product.price}</span>
//             <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
//                 <i class="fas fa-shopping-bag"></i> Add to Cart
//             </button>
//             <a class="like-btn">
//                 <i class="far fa-heart"></i>
//             </a>
//         `;
//         productContainer.appendChild(productBox);
//     });

//     // Add event listeners to all the "Add to Cart" buttons
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', addToCart);
//     });
// }

// // Function to add a product to the cart
// function addToCart(event) {
//     const productElement = event.target.closest('.product-box');
//     const productId = productElement.getAttribute('data-id');
//     const productName = productElement.getAttribute('data-name');
//     const productPrice = parseFloat(productElement.getAttribute('data-price'));
//     const productQuantity = productElement.getAttribute('data-quantity');

//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: productQuantity,
//         count: 1 // Default quantity added is 1
//     };

//     // Get the cart from localStorage or initialize it as an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === productId);
//     if (existingProductIndex !== -1) {
//         // If product already exists in the cart, increase the count
//         cart[existingProductIndex].count++;
//     } else {
//         // Otherwise, add new product to the cart
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} has been added to the cart!`);
// }

// // Run the displayOfficeProducts function when the page loads
// // window.onload = displayOfficeProducts;


// // Array of beauty products
// const beautyProducts = [
//     {
//         id: 1,
//         name: "Lakme Blush and Glow Face Wash",
//         price: 144,
//         quantity: "100 g",
//         imgUrl: "https://i.imgur.com/RulBeyf.jpg"
//     },
//     {
//         id: 2,
//         name: "Ponds Men Pollution Out Facewash",
//         price: 159,
//         quantity: "100 g",
//         imgUrl: "https://i.imgur.com/azJYLRo.jpg"
//     },
//     {
//         id: 3,
//         name: "Nivea Body Milk",
//         price: 178,
//         quantity: "200 ml",
//         imgUrl: "https://i.imgur.com/XroaNlX.jpg"
//     },
//     {
//         id: 4,
//         name: "Nivea Lip Balm",
//         price: 151,
//         quantity: "1",
//         imgUrl: "https://i.imgur.com/0eK7qXj.jpg"
//     },
//     {
//         id: 5,
//         name: "Berado Hair Growth Oil",
//         price: 585,
//         quantity: "50 ml",
//         imgUrl: "https://i.imgur.com/qnTjfBG.jpg"
//     },
//     {
//         id: 6,
//         name: "Olay Total Effects Day Cream",
//         price: 749,
//         quantity: "50 g",
//         imgUrl: "https://i.imgur.com/Hmo66oR.jpg"
//     }
// ];

// // Function to dynamically display the beauty products
// function displayBeautyProducts() {
//     const productContainer = document.querySelector('.product-container');
//     beautyProducts.forEach(product => {
//         const productBox = document.createElement('div');
//         productBox.classList.add('product-box');
//         productBox.innerHTML = `
//             <img alt="${product.name}" src="${product.imgUrl}">
//             <strong>${product.name}</strong>
//             <span class="quantity">${product.quantity}</span>
//             <span class="price">Rs. ${product.price}</span>
//             <button class="cart-btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-quantity="${product.quantity}">
//                 <i class="fas fa-shopping-bag"></i> Add to Cart
//             </button>
//             <a class="like-btn">
//                 <i class="far fa-heart"></i>
//             </a>
//         `;
//         productContainer.appendChild(productBox);
//     });

//     // Add event listeners to all the "Add to Cart" buttons
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', addToCart);
//     });
// }

// // Function to add a product to the cart
// function addToCart(event) {
//     const productElement = event.target.closest('.product-box');
//     const productId = productElement.getAttribute('data-id');
//     const productName = productElement.getAttribute('data-name');
//     const productPrice = parseFloat(productElement.getAttribute('data-price'));
//     const productQuantity = productElement.getAttribute('data-quantity');

//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: productQuantity,
//         count: 1 // Default quantity added is 1
//     };

//     // Get the cart from localStorage or initialize it as an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === productId);
//     if (existingProductIndex !== -1) {
//         // If product already exists in the cart, increase the count
//         cart[existingProductIndex].count++;
//     } else {
//         // Otherwise, add new product to the cart
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} has been added to the cart!`);
// }

// // Run the displayBeautyProducts function when the page loads
// window.onload = displayBeautyProducts , displayOfficeProducts , displayFruitsAndVeggies , displayBabyCareProducts;



