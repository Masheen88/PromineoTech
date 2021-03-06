const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HouseApi {
  //Send Request
  get = async () => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log("Oh no! There was an error with fetchHouses.", error);
    }
  };

  //Update request
  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with updating Houses.", error);
    }
  };

  //Update request
  putTest = async (houseId, house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ _id: houseId, name: house }),
      });
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with updating Houses.", error);
    }
  };

  //Post request
  post = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: house }),
      });
      console.log("resp", resp);
      return await resp.json();
    } catch (error) {
      console.log("Oh no! There was an error with adding a house.", error);
    }
  };
}

//A new instance must be create and can then import that to other components
export const housesApi = new HouseApi();
