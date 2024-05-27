const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("typing");
const quoteInputElement = document.getElementById("typing-input");
const errorsElement = document.querySelector(".errors span");
const wpmElement = document.querySelector(".cpm span");
const cpmElement = document.querySelector(".wpm span");

let gameRunning = true;
let errorCount = 0;
let typedCharactersCount = 0;
let startTime = null;
let timerInterval;

// Add event listener for input
quoteInputElement.addEventListener("input", () => {
    if (!startTime) {
        startTime = new Date();
    }
    checks();
    update();
    const correctCharacters = quoteDisplayElement.querySelectorAll("span.correct").length;
    const totalCharacters = quoteDisplayElement.querySelectorAll("span").length;
    if (correctCharacters === totalCharacters) {
        renderNewQuote();
    }
});

// Fetch a random quote WebDevSimplified 
function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then((response) => response.json())
        .then((data) => data.content);
}

// Render a new quote WebDevSimplified 
function renderNewQuote() {
    if (!gameRunning) return;
    getRandomQuote().then((quote) => {
        quoteDisplayElement.innerHTML = "";
        quote.split("").forEach((character) => {
            const characterSpan = document.createElement("span");
            characterSpan.innerText = character;
            quoteDisplayElement.appendChild(characterSpan);
        });
        quoteInputElement.value = "";
        quoteInputElement.focus();
    });
}

// Start the timer
function startTimer() {
    const countDownDuration = 60000;
    const countDownElement = document.getElementById("timer");
    countDownElement.textContent = "60";

    clearInterval(timerInterval);

    const endTime = Date.now() + countDownDuration;
    timerInterval = setInterval(() => {
        const remaining = endTime - Date.now();
        const secondsLeft = Math.round(remaining / 1000);
        countDownElement.textContent = secondsLeft;
        if (remaining <= 0) {
            clearInterval(timerInterval);
            countDownElement.textContent = "Time is up!";
            gameRunning = false;
        } else if (remaining <= 15000) {
            countDownElement.style.color = 'red';
        } else if (remaining <= 30000) {
            countDownElement.style.color = 'yellow';
        } else {
            countDownElement.style.color = 'white';
        }
    }, 1000);
}

// Start the game and timer when the site is loaded
document.addEventListener("DOMContentLoaded", () => {
    renderNewQuote();
    startTimer();
});

// Check for correct spelling
function checks() {
    const characters = quoteDisplayElement.querySelectorAll("span");
    const typedCharacters = quoteInputElement.value.split("");
    typedCharactersCount = typedCharacters.length;
    errorCount = 0;
    let correct = false;
    characters.forEach((charSpan, index) => {
        const character = typedCharacters[index];
        if (character == null) {
            charSpan.classList.remove("correct", "incorrect");
        } else if (character === charSpan.innerText) {
            charSpan.classList.add("correct");
            charSpan.classList.remove("incorrect");
            correct = true;
        } else {
            charSpan.classList.add("incorrect");
            charSpan.classList.remove("correct");
            errorCount++;
        }
    });
}

// Reset the counters
function reset() {
    typedCharactersCount = 0;
    errorCount = 0;
    errorsElement.textContent = 0;
    wpmElement.textContent = 0;
    cpmElement.textContent = 0;
}

// Update the WPM and CPM
function update() {
    const currentTime = new Date();
    const timeElapsed = (currentTime - startTime) / 1000 / 60;
    const wpm = Math.round(typedCharactersCount / 5 / timeElapsed);
    const cpm = Math.round(typedCharactersCount / timeElapsed);
    errorsElement.textContent = errorCount;
    wpmElement.textContent = wpm;
    cpmElement.textContent = cpm;
}

// Restart the game
function restart() {
    reset();
    startTimer();
    renderNewQuote();
}