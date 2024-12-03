const smapleProducts = [
  {
    name: "Product 1",
    description: "description of project 1",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Product 2",
    description: "description of project 2",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Product 3",
    description: "description of project 3",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Product 4",
    description: "description of project 4",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Product 5",
    description: "description of project 5",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Product 6",
    description: "description of project 6",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Product 7",
    description: "description of project 7",
    image: "https://placehold.co/300x300",
  },
];

// class for handling navigation.

class NavBar {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById("navbar").innerHTML = `
            <nav>
            <h1> Ecommerce-Store</h1>
            <ul class= "nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="cart.html">Cart(<span id="cart-count">0</span>)</a></li>
            </ul>
            </nav>    
        `;
  }

  updateCartCount(count) {
    document.getElementById("cart-count").textContent = count;
  }
}

class Products {
  constructor(products, cart) {
    this.products = products;
    this.cart = cart;
    this.render();
  }

  render() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = this.products
      .map(
        (product) => `
        <div class= "product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="cart.addTocart("${product.name}","${product.image}","${product.description}")>Add to cart</button>
        </div>
        `
      )
      .join("");
  }
}

class Footer {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById("footer").innerHTML = `
        <div class="footer-content">
            <h3>E-commerce</h3>

    `;
  }
}

new Footer();
new NavBar();
new Products(smapleProducts, []);
