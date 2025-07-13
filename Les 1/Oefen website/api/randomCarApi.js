const randomCarButton = document.getElementById("random-car-button");

async function getRandomPassengerCarMakeWithModels() {
  try {
    const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/passenger%20car?format=json");
    const data = await response.json();

    const makes = data.Results.map(make => make.MakeName);

    const randomIndex = Math.floor(Math.random() * makes.length);
    const randomMake = makes[randomIndex];

    const randomCarDiv = document.getElementById("random-car");
    randomCarDiv.innerHTML = "";

    // Haal modellen van dit merk op
    const modelResponse = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${randomMake}?format=json`);
    const modelData = await modelResponse.json();
    const models = modelData.Results.map(model => model.Model_Name);

    if (models.length === 0) {
      const noModels = document.createElement("p");
      noModels.textContent = "Geen modellen gevonden";
      randomCarDiv.appendChild(noModels);
    } else {
      const randomModelIndex = Math.floor(Math.random() * models.length);
      const randomModel = models[randomModelIndex];

      const carParagraph = document.createElement("p");
      carParagraph.textContent = `${randomMake} ${randomModel}`;
      randomCarDiv.appendChild(carParagraph);
    }

  } catch (error) {
    console.error("Fout bij ophalen random merk en model:", error);
  }
}

randomCarButton.addEventListener("click", getRandomPassengerCarMakeWithModels);