// const steen = document.querySelector("#input-quess-steen");
// const papier = document.querySelector("#input-quess-papier");
// const schaar = document.querySelector("#input-quess-schaar");

// //event
// const opties = ["steen", "papier", "schaar"];

// function makeChoice(e) {
//     console.log(e);
//     const guess = inputGuess.value;
//     const randomOptie = Math.floor(Math.random() * opties.length);
//     const keuze = opties[randomIndex];

//     if( guess == opties[randomIndex])
//     {
//             console.log("Goed geraden, u wint 20% korting op eerst volgende APK beurt");
//     } else {
//         console.log("Probeer het nog een keer...");
//     }
// }

// steen.onclick = makeChoice

const steen = document.querySelector("#input-guess-steen");
const papier = document.querySelector("#input-guess-papier");
const schaar = document.querySelector("#input-quess-schaar");
// debugger;

// Zet opties
const opties = ["steen", "papier", "schaar"];

// Random keuze van computer
function getRandomOptie() {
  const randomIndex = Math.floor(Math.random() * opties.length);
  return opties[randomIndex];
}

// Functie om te controleren
function check(guess) {
  const keuze = getRandomOptie();

  console.log("Jouw keuze: " + guess);
  console.log("Computer kiest: " + keuze);

  if (guess === keuze) {
    console.log("Goed geraden, u wint 20% korting op de eerstvolgende APK-beurt!");
  } else {
    console.log("Probeer het nog een keer...");
  }
}

// Events
steen.onclick = function () {
  check("steen");
};

papier.onclick = function () {
  check("papier");
};

schaar.onclick = function () {
  check("schaar");
};