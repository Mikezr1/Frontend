// console.log("Hier komt een log van Javascript");
// console.log(document);
// console.log(document.body);
// console.log(document.querySelector("input"));

// input veld

//elementen aanmaken
// const myDiv = document.createElement("div");
// myDiv.classlist = "color-red";

// myDiv.appendChild(myParagraph);

// document.body.appendChild(myDiv);

//elementen ophalen

// const inputGuess = document.getElementById("input-guess");
// object aanmaken van dit element
const inputGuess = document.querySelector("#input-guess");
const inputSubmit = document.querySelector("#input-submit");

inputSubmit.onclick = function () {
    // console.log("hallo????");
    const getal = 17;
    const guess = inputGuess.value;

    if(guess == getal) {
        console.log("goed geraden");
    } else if (guess < getal) {
        console.log("hoger");
    } else {
        console.log("lager");
    }
}

console.log(inputGuess.value);