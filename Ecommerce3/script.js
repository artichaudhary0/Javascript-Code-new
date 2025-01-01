const sampleProducts = [
  {
    name: "Product 1",
    description: "Description of product 1",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 2",
    description: "Description of product 2",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 3",
    description: "Description of product 3",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 4",
    description: "Description of product 4",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 5",
    description: "Description of product 5",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 6",
    description: "Description of product 6",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 7",
    description: "Description of product 7",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 8",
    description: "Description of product 8",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 9",
    description: "Description of product 9",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Product 10",
    description: "Description of product 10",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

class NavBar {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById("navbar").innerHTML = `
            <nav>
                <h1>E-commerce Website</h1>
                <ul class="nav-links">
                <li><a href="index.html"/>Home</li>
                <li><a href="cart.html">Cart(<span id="cart-count">0</span>)</a></li>
                </ul>   
            </nav>
        `;
  }
  updateCartCount(count) {
    document.getElementById("cart-count").textContent = count;
  }
}

class Footer {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById("footer").innerHTML = `
              <footer>
                  <p>&copy; 2025 E-commerce Website</p>
                  <ul class="footer-links">
                      <li><a href="privacy.html">Privacy Policy</a></li>
                      <li><a href="terms.html">Terms of Service</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                  </ul>
              </footer>
          `;
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
            <div class="product" style="background : green; width:200px; margin:20px;">
                <img src="${product.image}" alt="${product.name}" style="height:200px; width:200px;">
                <h3>${product.name}</h3>
                <p>${product.description}</p>

                <button onclick="cart.addToCart('${product.name}','${product.description}','${product.image}')">Add To Cart</button>
            </div>
            `
      )
      .join("");
  }
}

class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.updateCartDisplay();
  }

  addToCart(name, description, image) {
    this.items.push({ name, description, image });
    localStorage.setItem("cart", JSON.stringify(this.items));
    alert(`${name} has been added successfully to cart!!`);
  }

  updateCartDisplay() {
    const navbar = new NavBar();
    navbar.updateCartCount(this.items.length);
  }

  displayCartItems() {
    const cartItemContainer = document.getElementById("cart-items");

    console.log(this.items);

    if (this.items.length === 0) {
      cartItemContainer.innerHTML = `<p>Your cart is empty!</p>`;
    } else {
      cartItemContainer.innerHTML = this.items
        .map(
          (item) => `
            <div class="cart-item" style="background : green; width:200px; margin:20px;">
                <img src="${item.image}" alt="${item.name}" style="height:200px; width:200px;">
                <h3>${item.name}</h3>

                <button onclick="cart.removeFromCart('${item.name}')">Remove</button>
            </div>
            `
        )
        .join("");
    }
  }

  removeFromCart(name) {
    this.items = this.items.filter((item) => item.name !== name);

    localStorage.setItem("cart", JSON.stringify(this.items));
    this.displayCartItems();
    this.updateCartDisplay();
  }
}

const cart = new Cart();

if (document.getElementById("main-content")) {
  new NavBar();
  new Products(sampleProducts, cart);
}

if (document.getElementById("cart-items")) {
  new NavBar();
  cart.displayCartItems();
}
