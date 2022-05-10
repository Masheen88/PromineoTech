const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";
//await calls MUST be inside an async function

const getHouses = async () => {
  const resp = await fetch(HOUSES_ENDPOINT);
  const json = await resp.json();
  console.log("Response Testing", resp);
  console.log("json Testing", json);
  //   fetch(HOUSES_ENDPOINT)
  //     .then((resp) => resp.json())
  //     .then((resp) => console.log(resp));
};

getHouses();
