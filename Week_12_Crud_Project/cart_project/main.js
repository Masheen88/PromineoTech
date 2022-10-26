//Class to define what a product contains
class Product {
  constructor(name, qty) {
    this.name = name;
    this.qty = qty;
  }
}

//Class to define a product API / methods to view/update a product.
class ProductService {
  static products = [];

  static crudcrud = "https://crudcrud.com/api/b155fd177e634cb9894c17427ccc48f7"; //Replace this URL if expired
  static url = `${this.crudcrud}/products`;

  //Method to returns all products from the url -GET
  static getAllProducts() {
    const data = $.get(this.url);
    return data;
  }

  //Method to return a specific product from the url -GET
  static getproduct(id) {
    return $.get(`${this.url}/${id}`);
  }

  //Method to takes an instance of the product class ie. (name,area) - POST
  static createProduct(product) {
    const responsePromise = $.ajax({
      url: this.url,
      data: JSON.stringify(product),
      dataType: "json",
      type: "POST",
      contentType: "application/json",
      crossDomain: true,
    });
    location.reload();
    return responsePromise;
  }

  // Method to update an existing hosue - PUT
  static updateproduct(product) {
    const id = product._id;
    delete product._id;
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      data: JSON.parse(product),
      contentType: "application/json",
      crossDomain: true,
      type: "PUT",
    });
    return responsePromise;
  }

  static updateProductQty(productId, productName, qty) {
    const id = `${this.url}/${productId}`;
    if (`${this.url}/${productId}` == `${this.url}/${productId}`) {
      const responsePromise = $.ajax({
        url: id,
        type: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({ name: productName, qty: parseInt(qty) }),
        crossDomain: true,
      });
      return responsePromise;
    }
    // delete productId;
  }

  //Method to delete a specific product form the cart - DELETE
  static deleteProduct(id) {
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      type: "DELETE",
    });
    location.reload();
    return responsePromise;
  }

  //Method to delete all products in the cart - DELETE
  static deleteAllProducts() {
    const responsePromise = $.ajax({
      url: `${this.url}`,
      type: "DELETE",
    });
    return responsePromise;
  }
}

//Re-Renders the DOM when creating a new class.
class DOMManager {
  static products;

  //Method that gets all products and then re-renders the DOM with the new response.
  static getAllProducts() {
    ProductService.getAllProducts()
      .then((products) => this.render(products))
      .then(() => location.reload);
  }

  //Method to delete a specific product
  static deleteProduct(id) {
    ProductService.deleteProduct(id)
      .then(() => {
        return ProductService.getAllProducts();
      })
      .then((products) => this.render(products));
  }

  //Method to create a product
  static createProduct(name, qty) {
    //Re-renders the DOM
    return ProductService.createProduct(new Product(name, qty)).then(() => {
      ProductService.getAllProducts().then((products) => this.render(products)); //Re-renders the DOM
    });
  }

  //Renders various HTML elements to the DOM
  static render(products) {
    this.products = products;
    $("#app").empty(); //References the div id #app in index.html
    for (let product of products) {
      $("#productTable").append(
        `
          
            <div class="container col-sm-4">
            <div class="productContainer" id="${product._id}">
              <h2>${product.name}</h2>
              <button
                class="btn btn-danger"
                id="deleteProductBtn"
                onclick="removeProduct('${
                  product._id
                }');DOMManager.deleteProduct('${product._id}')"
              >
                Remove Product
              </button>
              ${insertImg(product.name)}
              <div class=qtyInput>
              <h2>QTY</h2>
              <input type="text" id="qtyInput qtyInput-${
                product._id
              }" maxlength="2" size="2" class="form-control" style="text-align: center;" onchange="changeQTY(
                '${product._id}','${product.name}',${product.qty})" value="${
          product.qty
        }" />
              </div>
            </div>
          </div>
          <br />
        `
      );
    }
  }
}

function changeQTY(productId, productName, productQty) {
  let Qty = document.getElementById(`qtyInput qtyInput-${productId}`);
  Qty.append(`value=${Qty}`);
  Qty.value = Qty.value;
  ProductService.updateProductQty(productId, productName, Qty.value).then(
    () => {
      return ProductService.getAllProducts().then((products) =>
        this.render(products)
      );
    }
  );
  return Qty;
}

function removeProduct(id) {
  let product = document.getElementById(id);
  product.remove();
}

function insertImg(productName) {
  if (productName == `Macchiato`) {
    return `<img class="productImage" src="./images/productImgmacchiato.jpg" />`;
  } else if (productName == `Iced Coffee`) {
    return `<img class="productImage" src="./images/productImgicedCoffee.jpg" />`;
  } else if (productName == `Cappuccino`) {
    return `<img class="productImage" src="./images/productImgcappuccino.jpg" />`;
  }
}

//Method to create a new product on click.
$("#addToCart").click(() => {
  var productMenu = document.getElementById("productSelectionMenu");

  DOMManager.createProduct(
    `${productMenu.options[productMenu.selectedIndex].text}`,
    1
  );
});

//Test method to get all products.
DOMManager.getAllProducts();
