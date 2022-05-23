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
      console.log("Oh no! There was an error with updating Houses.", error);
    }
  };

  //Update request
  putTest = async (commentId, comment) => {
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
      const resp = await fetch(`${COMMENTS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: comment }),
      });
      console.log("resp", resp);
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with adding a house.", error);
    }
  };
}

//A new instance must be create and can then import that to other components
export const commentsAPI = new CommentsAPI();
