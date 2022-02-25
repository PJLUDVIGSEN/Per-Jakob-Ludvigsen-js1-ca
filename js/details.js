const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const countryName = params.get("ThreeLetterSymbol");

const title = document.querySelector("title");

const key =
  "/?rapidapi-key=b665035877msh195e70b6c9d4064p16ccc6jsn3c1189e52fee/";

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

async function fetchCountry() {
  try {
    const response = await fetch(api, options);
    const result = await response.json();
    detailContainer.innerHTML = "";
    const details = result[0];
    title.innerHTML += `${details.name}`;
    whatCountry(details);
    for (let i = 0; i <= result.length; i++) {
      detailContainer.innerHTML += `<div class="country">
                                      <h4>State/province: ${result[i].province}</h4>
                                      <p>Current cases: ${result[i].active}</p>
                                      <p>Total cases: ${result[i].confirmed}</p>
                                      </div>`;
      if (i === 2) {
        break;
      }
    }
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML += `<div class="error">An error has occured: ${error}</div>`;
  }
}

fetchCountry();

function whatCountry(details) {
  detailContainer.innerHTML += `<h1>${details.name}</h1>`;
}
