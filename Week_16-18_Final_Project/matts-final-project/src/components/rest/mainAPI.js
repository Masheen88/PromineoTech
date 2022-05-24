const COMMENTS_ENDPOINT =
  "https://6283f68ba48bd3c40b6933a7.mockapi.io/api/v1/comments";

class CommentsAPI {
  //Send Request
  get = async () => {
    try {
      const resp = await fetch(COMMENTS_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log("Oh no! There was an error with fetchHouses.", error);
    }
  };

  //Update request
  put = async (comment) => {
    try {
      const resp = await fetch(`${COMMENTS_ENDPOINT}/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with updating Comments.", error);
    }
  };

  //Update request
  apiEdit = async (commentId, comment) => {
    try {
      const resp = await fetch(`${COMMENTS_ENDPOINT}/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ _id: commentId, name: comment }),
      });
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with updating Houses.", error);
    }
  };

  //Post request
  post = async (comment) => {
    try {
      const response = await fetch(`${COMMENTS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: comment }),
      });
      console.log("mainAPI postResponse:", response);
      return await response.json();
    } catch (error) {
      console.log("Oh no! There was an error with adding a house.", error);
    }
  };

  //Delete request
  apiDelete = async (reviewId) => {
    try {
      const resp = await fetch(`${COMMENTS_ENDPOINT}/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(reviewId),
      });
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with deleting a review.", error);
    }
  };
}

//A new instance must be create and can then import that to other components
export const commentsAPI = new CommentsAPI();
