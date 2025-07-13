const nieuwprijsInput = document.getElementById("Nieuwprijs");
const kortingInput = document.getElementById("Korting"); //const beschermt de data, omdat je hem niet nog een keer gaat assignen dan moet je let.
const resultaatP = document.getElementById("resultaat"); //haalt een bestaand element op
const button = document.getElementById("bereken"); // variabelen -> object/int/string

//var . methode
button.addEventListener("click", () => { // inline notatie van code, lambda bijv.
    const prijs = parseFloat(nieuwprijsInput.value); //scope van de methode, in de methode krijgt voorang
    const korting = parseFloat(kortingInput.value); //parse= we maken van een string iets anders

    if (isNaN(prijs) || isNaN(korting)) { //is not a number methode
        resultaatP.textContent = "Voer geldige getallen in!";
        return;
    }

    const verkoopprijs = prijs / 100 * (100 - korting);

    resultaatP.textContent = "Verkoopprijs: €" + verkoopprijs.toFixed(2);
});



