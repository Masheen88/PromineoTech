const COMMENTS_ENDPOINT =
  "https://62cc7a298042b16aa7d0144e.mockapi.io/Promineo_Tech_API/comments";

class CommentsAPI {
  //Send Request
  get = async () => {
    try {
      const resp = await fetch(COMMENTS_ENDPOINT);
      const data = await resp.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
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
      "mainAPI apiEdit productURL:",
      `${COMMENTS_ENDPOINT}/${commentIdArr[0].slice(5)}`
    );
    console.log("mainAPI apiEdit commentId:", commentIdArr[0].slice(5));
    console.log("mainAPI apiEdit commentData:", commentData[0].slice(9));
    try {
      const resp = await fetch(
        `${COMMENTS_ENDPOINT}/${commentIdArr[0].slice(5)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            comment: commentData[0],
          }),
        }
      );
      await resp.json();
      return (window.location = "/reviews");
    } catch (error) {
      console.log("Oh no! There was an error with editing your review.", error);
    }
  };

  //Post request
  post = async (comment) => {
    console.log("mainAPI post:", comment);
    try {
      const response = await fetch(`${COMMENTS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: comment[0],
          product: comment[1],
          comment: comment[2],
        }),
      });
      console.log("mainAPI postResponse:", response);
      await response.json();
      // (window.location = "/reviews");
      return (window.location = "/reviews");
    } catch (error) {
      console.log("Oh no! There was an error with adding a review.", error);
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
      await resp.json();
      return (window.location = "/reviews");
    } catch (error) {
      console.log("Oh no! There was an error with deleting a review.", error);
    }
  };
}

//A new instance must be create and can then import that to other components
export const commentsAPI = new CommentsAPI();
