let game = ['H', 'T'];
let value = document.querySelector("#value");
let generator;
let score = document.getElementById("score");
let score2 = document.getElementById("score2");
let scoreUpdation = 1;
let scoreUpdation2 = 1;
let range = +prompt("Enter Score Range: ");


function button() {
    generator = game[Math.floor(Math.random() * game.length)];
    value.innerHTML = generator;
    if (generator === 'H') {
        score.innerHTML = "Hat's: " + scoreUpdation++;
        if (scoreUpdation>range) {
            alert(`Hat's winner with a score of : ${scoreUpdation-1}`)
        }
        else if (scoreUpdation===scoreUpdation2){
            alert("Draw")
        }

    }
    else if(generator==="T"){
        score2.innerHTML = "Tail's: " + scoreUpdation2++;

        if (scoreUpdation2>range) {
            alert(`Tails winner with a score of : ${scoreUpdation2-1}`)
        }
        else if (scoreUpdation===scoreUpdation2){
            alert("Draw")
        }


    }
}
function reset(){
    scoreUpdation = 0
    score.innerHTML = "Hat's: " + scoreUpdation;
    scoreUpdation2 = 0
    score2.innerHTML = "Hat's: " + scoreUpdation2;
}


// let userInput = prompt("Enter H for Hat's or T for Tail's").toUpperCase();
// let game = ["H","T"];
// let generator = Math.round(Math.floor(Math.random() * game.length));
// console.log(generator)
// if (userInput === "H" || userInput=== "T") {
//    if (generator===userInput) {
//      alert("User Winner");
//    } else {
//     alert("Computer Winner");
//    }
// } 
// else {
//     alert("Wrong value Inputted")
// }



























