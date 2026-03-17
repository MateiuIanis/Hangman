words = ["house", "mother", "cat", "welcome", "father", "tree", "apple", "car", "police", "happy"]
correctWord = getWord()
noLives = 7

window.onload = function() {
    generateWordPreview();
};

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function generateWordPreview() {
    let wordPreviewTable = document.getElementById("wordPreviewTable");
    let wordPreviewLine = wordPreviewTable.insertRow();
    for (let i = 0; i < correctWord.length; ++i) {
        wordPreviewLine.insertCell().innerHTML = "_";
    }
}

function revealGuessedLetters() {
    let guessedLetter = document.getElementById("inputId").value;
    let wordPreviewTable = document.getElementById("wordPreviewTable");
    let wordPreviewLine = wordPreviewTable.getElementsByTagName("tr");
    let letterFound = false, noLettersRevealed = 0;
    for (let i = 0; i < correctWord.length; ++i) {
        if (correctWord[i] == guessedLetter) {
            wordPreviewLine[0].getElementsByTagName("td")[i].innerHTML = guessedLetter;
            letterFound = true;
        }
        if (wordPreviewLine[0].getElementsByTagName("td")[i].innerHTML != '_') {
            ++noLettersRevealed;
        }
    }
    if (letterFound == false) {
        updateLivesTable();
    }
    if (noLettersRevealed == correctWord.length) {
        printOutcome("Congrats! You have guessed the word.")
    }
}

function updateLivesTable() {
    let livesTable = document.getElementById("livesTable");
    let livesTableLine = livesTable.getElementsByTagName("tr");
    livesTableLine[0].getElementsByTagName("td")[noLives - 1].style.backgroundColor = "white";
    --noLives;
    if (noLives == 0) {
        printOutcome("Out of lives! The word was \"" + correctWord + "\".");
    }
}

function printOutcome(outcomeMessage) {
    let outcomeDiv = document.createElement("div");
    outcomeDiv.innerHTML = outcomeMessage;
    document.body.append(outcomeDiv);
}
