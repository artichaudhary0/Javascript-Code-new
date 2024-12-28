const sampleData = [
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

class Products { 
  constructor(products) {
    this.products = products;
    this.render();
  }

  render() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = this.products
      .map(
        (product) => `<div class = "product">
      <img src=${product.image}>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button>Add to cart</button>
      </div>`
      )
      .join("");
  }
}

class NavBar {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById("navbar").innerHTML = `
    <nav>
        <h1>E-commerce Store</h1>
        <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Cart</a></li>
        </ul>
    </nav>
    
    `;
  }
}

class Footer {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById("footer").innerHTML = `
    <p>&copy; 2024 E-commerce Store. All rights are reserved</p>
    `;
  }
}

new NavBar();
new Footer();
new Products(sampleData);
