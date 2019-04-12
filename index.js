let wins = 0;
let losses = 0;
let ties = 0;

// this function
// 1. returns "bear"/"hunter"/"ninja" based on a random integer
function computersMove() {
    let randInt = Math.floor(Math.random() * 3); // generates 0, 1, or 2
    if (randInt === 0) {
        return "bear";
    }
    if (randInt === 1) {
        return "hunter";
    }
    if (randInt === 2) {
        return "ninja";
    }
}

// this function
// 1. increments the wins/ties/losses depending on the result
// 2. updates the number of wins/ties/losses displayed on the website
function updateScore(result) {
    // result one of "won", "tied", or "lost"
    if (result === "won") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
    } else if (result === "tied") {
        ties += 1;
        document.getElementById("ties").innerHTML = ties;
    } else {
        losses += 1;
        document.getElementById("losses").innerHTML = losses;
    }
}

// this function
// 1. calls computersMove to get the computer's move
// 2. determines whether the user has "won"/"tied"/"lost" based on computer's move
// 3. calls updateScore and passes the result "won"/"tied"/"lost" as a parameter
// 4. alerts the user of the computers move and the results
function onClickBear() {
    let cm = computersMove();
    if (cm === "ninja") {
        updateScore("won");
        alert("You shredded the ninja! You have won :)");
    }
    if (cm === "bear") {
        updateScore("tied");
        alert("You've met your match with another bear! You have tied :|");
    }
    if (cm === "hunter") {
        updateScore("losses");
        alert("You were sniped by the hunter! You have lost :(");
    }
}

function onClickHunter() {
    let cm = computersMove();
    if (cm === "bear") {
        updateScore("won");
        alert("You sniped the bear! You have won :)");
    }
    if (cm === "hunter") {
        updateScore("tied");
        alert("You've met your match with another hunter! You have tied :|");
    }
    if (cm === "ninja") {
        updateScore("losses");
        alert("You were assassinated by the ninja! You have lost :(");
    }
}

function onClickNinja() {
    let cm = computersMove();
    if (cm === "hunter") {
        updateScore("won");
        alert("You assassinated the hunter! You have won :)");
    }
    if (cm === "ninja") {
        updateScore("tied");
        alert("You've met your match with another ninja! You have tied :|");
    }
    if (cm === "bear") {
        updateScore("losses");
        alert("You were shredded by the bear! You have lost :(");
    }
}

document.getElementById("bear").onclick = onClickBear;
document.getElementById("hunter").onclick = onClickHunter;
document.getElementById("ninja").onclick = onClickNinja;
