const randomBrandButton = document.getElementById("random-brand-button");

async function getRandomPassengerCarMakeWithModels() {
  try {
    const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/passenger%20car?format=json");
    const data = await response.json();

    const makes = data.Results.map(make => make.MakeName);

    // Kies random merk
    const randomIndex = Math.floor(Math.random() * makes.length);
    const randomMake = makes[randomIndex];

    const randomBrandDiv = document.getElementById("random-brand");
    randomBrandDiv.innerHTML = ""; // leegmaken

    // Toon het merk als titel
    const makeTitle = document.createElement("h2");
    makeTitle.textContent = `Merk: ${randomMake}`;
    randomBrandDiv.appendChild(makeTitle);

    // Haal modellen van dit merk op
    const modelResponse = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${randomMake}?format=json`);
    const modelData = await modelResponse.json();
    const models = modelData.Results.map(model => model.Model_Name);

    if (models.length === 0) {
      const noModels = document.createElement("p");
      noModels.textContent = "Geen modellen gevonden";
      randomBrandDiv.appendChild(noModels);
    } else {
      // Maak een lijst van modellen
      const ul = document.createElement("ul");
      models.forEach(modelName => {
        const li = document.createElement("li");
        li.textContent = modelName;
        ul.appendChild(li);
      });
      randomBrandDiv.appendChild(ul);
    }

  } catch (error) {
    console.error("Fout bij ophalen random merk en modellen:", error);
  }
}

// Voeg event listener toe aan de button
randomBrandButton.addEventListener("click", getRandomPassengerCarMakeWithModels);