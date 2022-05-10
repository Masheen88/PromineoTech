const ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";
//CRUD using http fetch requests

//Fetch always returns a promise - used the .then() method to handle the return.

//GET request
//Get Fetch
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((response) => {
    console.log("my repsonse:", response);
    for (let i = 0; i < response.length; i++) {
      response.forEach((house) =>
        document.write(response[i].rooms[i].name + "<br>")
      ); //Returns a list of houses
      //response.forEach((house) => document.write(response[i].rooms[0].name + "<br>")); //Returns a list of houses
    }
  });

//POST request - 62715fcd470297001719eaf0
fetch(ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Testing House",
  }),
});

//DELETE request
fetch(`${ENDPOINT}/62715899470297001719eaed`, {
  method: "DELETE",
  headerse: {
    "Content-Type": "application/json",
  },
});

//PUT request
fetch(`${ENDPOINT}/62715fcd470297001719eaf0`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Testing House",
    rooms: [
      { name: "Living Room", area: 250 },
      { name: "Kitchen", area: 225 },
    ],
  }),
});
