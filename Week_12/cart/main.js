//Class to define what a House contains
class House {
  constructor(name, qty) {
    this.name = name;
    this.rooms = [];
    this.qty = qty;
  }

  //Method to add a new room.
  addRoom(name, area) {
    // console.log("addROom name:", name); //
    // console.log("addROom area:", area); //
    this.rooms.push(new Rooms(name, area));
  }
}

//Class to define what a Room in the House contains.
class Rooms {
  constructor(name, area, id) {
    this.name = name;
    this.area = area;
    this._id = id;
  }
}

//Class to define a house API / methods to view/update a house.
class ProductService {
  static houses = [];

  static crudcrud = "https://crudcrud.com/api/2b93bee9434242bc952c135a4e8a3277"; //Replace this URL if expired
  static url = `${this.crudcrud}/products`;

  //Method to returns all houses from the url -GET
  static getAllProducts() {
    const data = $.get(this.url);
    // console.log("getAllProducts data:", data); //
    return data;
  }

  //Method to return a specific house from the url -GET
  static getHouse(id) {
    return $.get(`${this.url}/${id}`);
  }

  //Method to takes an instance of the House class ie. (name,area) - POST
  static createProduct(house) {
    console.log("createProduct house =:", house); //
    const responsePromise = $.ajax({
      url: this.url,
      data: JSON.stringify(house),
      dataType: "json",
      type: "POST",
      contentType: "application/json",
      crossDomain: true,
    });
    console.log("responsePromise:", responsePromise);
    return responsePromise;
  }

  // Method to update an existing hosue - PUT
  static updateHouse(house) {
    console.log("ProductService updateHouse house =:", house);
    const id = house._id;
    delete house._id;
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      dataType: "json",
      data: JSON.stringify(house),
      contentType: "application/json",
      crossDomain: true,
      type: "PUT",
    });
    return responsePromise;
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
  static deleteAllProducts(id) {
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      type: "DELETE",
    });
    return responsePromise;
  }
}

//Re-Renders the DOM when creating a new class.

class DOMManager {
  static houses;

  //Method that gets all houses and then re-renders the DOM with the new response.
  static getAllProducts() {
    ProductService.getAllProducts().then((houses) => this.render(houses));
  }

  //Method to delete a specific House
  static deleteProduct(id) {
    console.log("DOMManager deleteProduct id =:", id);
    ProductService.deleteProduct(id)
      .then(() => {
        return ProductService.getAllProducts();
      })
      .then((houses) => this.render(houses));
  }

  //Method to create a House
  static createProduct(name, qty) {
    console.log("ProductService createProduct name =:", name);
    console.log("ProductService createProduct defaultQTY =:", qty);
    //Re-renders the DOM
    return ProductService.createProduct(new House(name, qty)).then(() => {
      ProductService.getAllProducts().then((houses) => this.render(houses)); //Re-renders the DOM
    });
  }

  //Method to add a room to a House
  static addRoom(id) {
    let i = 0;
    // console.log("addRoom house._Id:", id); //
    for (let house of this.houses) {
      // console.log("addRoom house:", house); //
      // console.log("addRoom this.houses:", this.houses); //
      if (house._id == id) {
        console.log("if house._id:", house._id);
        house.rooms.push(
          new Rooms(
            $(`#${house._id}-room-name`).val(),
            $(`#${house._id}-room-area`).val(),
            $(`#${i++}-room-area`).val()
          )
        );
        // console.log("addRoom house:", house); //
        // console.log("addRoom house.rooms:", house.rooms); //
        //Method to send an update request to the API
        //Re-renders the DOM
        ProductService.updateHouse(house).then(() => {
          return ProductService.getAllProducts().then((houses) =>
            this.render(houses)
          );
        });
      }
    }
  }

  //Method to delete a room from a House
  static deleteRoom(houseId, roomId) {
    // console.log("deleteRoom houseId:", houseId); //
    // console.log("deleteRoom roomId:", roomId); //
    for (let house of this.houses) {
      if (house._id == houseId) {
        // console.log("deleteRoom house._id:", house._id); //
        for (let room of house.rooms) {
          console.log("for roomId:", roomId); //
          console.log("for room:", room); //
          console.log("for house.rooms:", house.rooms); //
          console.log("for ._id:", house._id); //
          if ($(roomId) == 3) {
            // console.log("deleteRoom test"); //
            house.rooms.splice(house.rooms.indexOf(room), 1);
            //Re-renders the DOM
            ProductService.updateHouse(house).then(() => {
              return ProductService.getAllProducts().then((houses) =>
                this.render(houses)
              );
            });
          }
        }
      }
    }
  }

  //Renders various HTML elements to the DOM
  static render(houses) {
    console.log("DOMManger render houses:", houses); //
    this.houses = houses;
    $("#app").empty(); //References the div id #app in index.html
    for (let house of houses) {
      // console.log("render House._id", `${house._id}`); //
      console.log("render house:", house); //
      // console.log("render house.name:", house.name); //
      // console.log("render houseLength:", houses.length); //
      // console.log("render", $("#app")); //
      $("#productTable").prepend(
        `
          
            <div class="container col-sm-4">
            <div class="productContainer" id="${house._id}">
              <h2>${house.name}</h2>
              <button
                class="btn btn-danger"
                id="deleteProductBtn"
                onclick="DOMManager.deleteProduct('${house._id}')"
              >
                Remove Product
              </button>
              ${insertImg(house.name)}
              <div class=qtyInput>
              <h2>QTY</h2>
              <input type="text" id="qtyInput" maxlength="2" size="2" class="form-control" onchange="changeQTY('${house}')" />
              </div>
            </div>
          </div>
          <br />
        `
      );
      //For each room of the house append additional HTML elements.
      let i = 0;
      for (let room of house.rooms) {
        // console.log("render room:", room); //
        // console.log("render house._id:", house._id); //
        // console.log("render house._id:", room._id); //

        $(`#${house._id}`)
          .find(".card-body")
          .append(
            `
              <p id="roomId-${i++}">
                <span id="name-${i++}"
                  ><strong>Name: </strong> ${room.name}</span
                >
                <span id="area-${i++}"
                  ><strong>Area: </strong> ${room.area}</span
                >
                <button
                  class="btn btn-danger"
                  onclick="DOMManager.deleteRoom('${house._id}', '${i++}')"
                >
                  Delete Room
                </button>
              </p>
            `
          );
      }
    }
  }
}

function changeQTY(house) {
  let Qty = document.getElementById("qtyInput");
  Qty.value = Qty.value;
  // house.qty.push(Qty.value);
  ProductService.updateHouse(house).then(() => {
    return ProductService.getAllProducts().then((houses) =>
      this.render(houses)
    );
  });
}

// e.key is the modern way of detecting keys
// e.keyCode is deprecated (left here for for legacy browsers support)
// keyup is not compatible with Jquery select(), Keydown is.

function insertImg(productName) {
  console.log("productName =:", productName);
  if (productName == `Macchiato`) {
    return `<img class="productImage" src="./images/productImgmacchiato.jpg" />`;
  } else if (productName == `Iced Coffee`) {
    return `<img class="productImage" src="./images/productImgicedCoffee.jpg" />`;
  } else if (productName == `Cappuccino`) {
    return `<img class="productImage" src="./images/productImgcappuccino.jpg" />`;
  }
}

//Method to create a new house on click.
$("#addToCart").click(() => {
  var productMenu = document.getElementById("productSelectionMenu");
  // let table = $("#productTable");
  // console.log("productMenu =:", productMenu); //
  console.log(
    "productSelectionMenu",
    `${productMenu.options[productMenu.selectedIndex].text}`
  ); //

  DOMManager.createProduct(
    `${productMenu.options[productMenu.selectedIndex].text}`,
    0
  );
  // $("#new-house-name").val("");
});

//Test method to get all houses.
DOMManager.getAllProducts();
