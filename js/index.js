const container = document.querySelector(".container");

var options = {
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "x-rapidapi-key": "b665035877msh195e70b6c9d4064p16ccc6jsn3c1189e52fee",
  },
};

const api =
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";

async function fetchCountry() {
  try {
    const response = await fetch(api, options);
    const json = await response.json();
    const covidInfo = json;
    container.innerHTML = "";
    for (let i = 0; i <= covidInfo.length; i++) {
      if (
        covidInfo[i].Country === "World" ||
        covidInfo[i].Country === "Total:"
      ) {
        continue;
      }
      container.innerHTML += `<div class="country">
                              <h4>Country: ${covidInfo[i].Country}</h4>
                              <p>Continent: ${covidInfo[i].Continent}</p> 
                              <p>Current cases: ${covidInfo[i].ActiveCases}</p>
                              <a class="button" href="details.html?ThreeLetterSymbol=${covidInfo[i].ThreeLetterSymbol}">More info</a>
                              </div>`;
      if (i === 10) {
        break;
      }
    }
  } catch (error) {
    console.log("The error is: " + error);
    container.innerHTML += `<div class="error">An error has occured: ${error}</div>`;
  }
}
fetchCountry();
