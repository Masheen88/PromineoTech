//This file is for testing at the moment and is not using on the final project

const PRODUCTS_ENDPOINT =
  "https://62cc7a298042b16aa7d0144e.mockapi.io/Promineo_Tech_API/products";

class ProductAPI {
  //Send Request
  get = async () => {
    try {
      const resp = await fetch(PRODUCTS_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
    }
  };

  //Update request
  put = async (comment) => {
    try {
      const resp = await fetch(`${PRODUCTS_ENDPOINT}/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      return await resp.json();
    } catch (error) {
      console.log(
        "Oh no! There was an error with updating your review.",
        error
      );
    }
  };

  //Update request
  apiEdit = async (commentId, commentData) => {
    let commentIdArr = commentId;
    console.log(
      "productsAPI apiEdit productURL:",
      `${PRODUCTS_ENDPOINT}/${commentIdArr[0].slice(5)}`
    );
    console.log("productsAPI apiEdit commentId:", commentIdArr[0].slice(5));
    console.log("productsAPI apiEdit commentData:", commentData[0].slice(9));
    try {
      const resp = await fetch(
        `${PRODUCTS_ENDPOINT}/${commentIdArr[0].slice(5)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            productQty: commentData[0],
          }),
        }
      );
      await resp.json();
      return (window.location = "/cart");
    } catch (error) {
      console.log("Oh no! There was an error with editing your review.", error);
    }
  };

  //Post request
  post = async (productData) => {
    console.log("productsAPI post:", productData);
    try {
      const response = await fetch(`${PRODUCTS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: productData[0],
          productImg: productData[3],
          productQty: productData[1],
          productPrice: productData[2],
        }),
      });
      console.log("productsAPI postResponse:", response);
      await response.json();
    } catch (error) {
      console.log("Oh no! There was an error with adding a review.", error);
    }
  };

  //Delete request
  apiDelete = async (productId) => {
    try {
      const resp = await fetch(`${PRODUCTS_ENDPOINT}/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(reviewId),
      });
      await resp.json();
      return (window.location = "/cart");
    } catch (error) {
      console.log("Oh no! There was an error with deleting a review.", error);
    }
  };

  apiDeleteAll = async () => {
    try {
      const resp = await fetch(
        `https://6283f68ba48bd3c40b6933a7.mockapi.io/api/v1/products/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(reviewId),
        }
      );
      await resp.json();
      return (window.location = "/cart");
    } catch (error) {
      console.log("Oh no! There was an error with deleting a review.", error);
    }
  };
}

//A new instance must be create and can then import that to other components
export const productsAPI = new ProductAPI();
