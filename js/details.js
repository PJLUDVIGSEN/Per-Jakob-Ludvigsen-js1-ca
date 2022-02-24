const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const countryName = params.get("ThreeLetterSymbol");

const key =
  "/?rapidapi-key=b665035877msh195e70b6c9d4064p16ccc6jsn3c1189e52fee/";

console.log(countryName);

var options = {
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "x-rapidapi-key": "b665035877msh195e70b6c9d4064p16ccc6jsn3c1189e52fee",
  },
};

const api =
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/" +
  countryName +
  key;

console.log(api);

async function fetchCountry() {
  try {
    const response = await fetch(api, options);
    const result = await response.json();
    console.log(result);
    detailContainer.innerHTML = "";
    const details = result[0];
    console.log(details);
    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

fetchCountry();

function createHtml(details) {
  detailContainer.innerHTML += `<h1>${details.name}</h1`;
}
