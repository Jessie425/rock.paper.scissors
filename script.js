// let targetNum;

// targetNum = Math.floor((Math.random()*3)+0);

// let resultDisplay = document.getElementById('result');

// function choseMove(userChoice){
//     if (userChoice == targetNum){
//         resultDisplay.innerHTML = "It's a Tie"
//     }
//     else if (userChoice = 0 && targetNum = 1){
//         resultDisplay.innerHTML = "You win"
//     }
//      else if (userChoice = 0 && targetNum = 2){
//         resultDisplay.innerHTML = "You Lose"
//     }
//      else if (userChoice = 1 && targetNum = 0){
//         resultDisplay.innerHTML = "You win"
//     }
//      else if (userChoice = 1 && targetNum = 2){
//         resultDisplay.innerHTML = "You Lose"
//     }
//      else if (userChoice = 2 && targetNum = 0){
//         resultDisplay.innerHTML = "You Lose"
//     }
//      else if (userChoice = 2 && targetNum = 1){
//         resultDisplay.innerHTML = "You win"
//     }
// }
//let resultDisplay = document.getElementById('result');

function rng() {
    return Math.floor(Math.random()*3)
}

function checkRes(uChoice){
    
    let result = document.getElementById("result")
    
    let cChoice = rng()
    
    if (uChoice == cChoice) {
        result.innerHTML "Ya Tried"
    }
    else if ((uChoice == 0 && cChoice == 1) || (uChoice == 1 && cChoice == 2) ||(uChoice == 2 && cChoice == 0){
        result.innerHTML = "CPU beat u"
    }
     else if ((uChoice == 1 && cChoice == 0) || (uChoice == 0 && cChoice == 2) || (uChoice == 2 && cChoice == 1)){
        result.innerHTML = "U beat CPU"
     }
}