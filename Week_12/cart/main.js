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

  static crudcrud = "https://crudcrud.com/api/a27feab9015f419d9b26207626d148a2"; //Replace this URL if expired
  static url = `${this.crudcrud}/products`;

  //Method to returns all products from the url -GET
  static getAllProducts() {
    const data = $.get(this.url);
    console.log("getAllProducts data:", data); //
    return data;
  }

  //Method to return a specific product from the url -GET
  static getproduct(id) {
    return $.get(`${this.url}/${id}`);
  }

  //Method to takes an instance of the product class ie. (name,area) - POST
  static createProduct(product) {
    console.log("createProduct product =:", product); //
    const responsePromise = $.ajax({
      url: this.url,
      data: JSON.stringify(product),
      dataType: "json",
      type: "POST",
      contentType: "application/json",
      crossDomain: true,
    });
    console.log("responsePromise:", responsePromise); //
    return responsePromise;
  }

  // Method to update an existing hosue - PUT
  static updateproduct(product) {
    console.log("ProductService updateproduct product =:", product); //
    const id = product._id;
    delete product._id;
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      data: JSON.stringify(product),
      contentType: "application/json",
      crossDomain: true,
      type: "PUT",
    });
    return responsePromise;
  }

  static updateProductQty(productId, qty) {
    const id = `${this.url}/${productId}`;
    console.log("testing", this.url);
    console.log("ProductService updateproduct product =:", productId); //
    console.log("ProductService product.qty =:", qty); //
    if (`${this.url}/${productId}` == `${this.url}/${productId}`) {
      const responsePromise = $.ajax({
        url: id,
        type: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({ qty: qty }),
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
    ProductService.getAllProducts().then((products) => this.render(products));
  }

  //Method to delete a specific product
  static deleteProduct(id) {
    console.log("DOMManager deleteProduct id =:", id); //
    ProductService.deleteProduct(id)
      .then(() => {
        return ProductService.getAllProducts();
      })
      .then((products) => this.render(products));
  }

  //Method to create a product
  static createProduct(name, qty) {
    // console.log("ProductService createProduct name =:", name); //
    // console.log("ProductService createProduct defaultQTY =:", qty); //
    //Re-renders the DOM
    return ProductService.createProduct(new Product(name, qty)).then(() => {
      ProductService.getAllProducts().then((products) => this.render(products)); //Re-renders the DOM
    });
  }

  //Renders various HTML elements to the DOM
  static render(products) {
    console.log("DOMManger render products:", products); //
    this.products = products;
    $("#app").empty(); //References the div id #app in index.html
    for (let product of products) {
      // console.log("render product._id", `${product._id}`); //
      console.log("render product:", product); //
      // console.log("render product.name:", product.name); //
      // console.log("render productLength:", products.length); //
      // console.log("render", $("#app")); //
      $("#productTable").append(
        `
          
            <div class="container col-sm-4">
            <div class="productContainer" id="${product._id}">
              <h2>${product.name}</h2>
              <button
                class="btn btn-danger"
                id="deleteProductBtn"
                onclick="DOMManager.deleteProduct('${
                  product._id
                }'); removeProduct('${product._id}')"
              >
                Remove Product
              </button>
              ${insertImg(product.name)}
              <div class=qtyInput>
              <h2>QTY</h2>
              <input type="text" id="qtyInput qtyInput-${
                product._id
              }" maxlength="2" size="2" class="form-control" onchange="changeQTY(
                '${product._id}','${product.qty}')" value="${product.qty}" />
              </div>
            </div>
          </div>
          <br />
        `
      );
    }
  }
}

function changeQTY(productId, productQty) {
  console.log("changeQTY productId =:", productId); //
  console.log("changeQTY productQty =:", productQty); //
  let Qty = document.getElementById(`qtyInput qtyInput-${productId}`);
  Qty.append(`value=${Qty}`);
  console.log(Qty);
  Qty.value = Qty.value;
  console.log("changeQTY Qty.value =:", Qty.value); //
  // product.qty.push(Qty.value);

  ProductService.updateProductQty(productId, Qty.value).then(() => {
    return ProductService.getAllProducts().then((products) =>
      this.render(products)
    );
  });
  return Qty;
}

function removeProduct(id) {
  let product = document.getElementById(id);
  product.remove();
}

// e.key is the modern way of detecting keys
// e.keyCode is deprecated (left here for for legacy browsers support)
// keyup is not compatible with Jquery select(), Keydown is.

function insertImg(productName) {
  // console.log("productName =:", productName); //
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
  // let table = $("#productTable");
  // console.log("productMenu =:", productMenu); //
  // console.log(
  //   "productSelectionMenu",
  //   `${productMenu.options[productMenu.selectedIndex].text}`
  // ); //

  DOMManager.createProduct(
    `${productMenu.options[productMenu.selectedIndex].text}`,
    1
  );
  // $("#new-product-name").val("");
});

//Test method to get all products.
DOMManager.getAllProducts();
