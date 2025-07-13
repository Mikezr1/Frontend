//
const carSearchInput = document.querySelector("#car-search-input");
const carSearchButton = document.querySelector("#car-search-button");
const carModelSearchInput = document.querySelector("#model-search-input");
const carModelSearchButton = document.querySelector("#model-search-button");
const searchResults = document.querySelector("#search-results");
// console.log(fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json"))
// .then(res=> console.log(res))

//failsafe maken als er geen data is

//maak een async functie met een constructor voor Response
async function carSearch() {
  // Lees de waarde van het inputveld
  const make = carSearchInput.value.trim();
  console.log("Input waarde:", make);
  console.log("Status button:", carSearchButton);
//   console.log("Deze merken laad hij in:", models)
//   console.log("Deze merken laad hij in:", modelNames)

  if (!make) {
        searchResults.textContent = "Voer een merk in";
        return;
    }


  try {
    // Haal data op
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
    const data = await response.json();

    const models = data.Results;

    if (models.length === 0) {
      searchResults.textContent = `Geen modellen gevonden voor merk: ${make}`;
      return;
    }

    // Maak de lijst met resultaten
    const ul = document.createElement("ul");

    models.forEach(model => {
      const li = document.createElement("li");
      li.textContent = model.Model_Name;
      ul.appendChild(li);
    });

    searchResults.innerHTML = "";
    searchResults.appendChild(ul);

   

  } catch (error) {
    console.error(error);
    searchResults.textContent = "Er is iets misgegaan bij het ophalen van de data.";
  }
}

// Voeg event listener toe
carSearchButton.addEventListener("click", carSearch);

carSearchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    carSearch();
  }
});


// async function modelSearch() {
//   const model = carModelSearchInput.value.trim();

//   if (!model) {
//     searchResults.textContent = "Voer een modelnaam in";
//     return;
//   }

//   // Wis eerst de huidige resultaten (dus ook de merk-lijst!)
//   searchResults.innerHTML = "";

//   // Zet een bericht of doe verdere logica
//   searchResults.textContent = `Model gezocht: ${model}`;

//   // --> Hier kun je later eventueel een fetch doen als je daar nog data wilt ophalen
// }

// carModelSearchButton.addEventListener("click", modelSearch);