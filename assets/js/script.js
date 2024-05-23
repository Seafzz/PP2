/**Followed a guide and using their code for the Api fetch and quote generator */
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('typing')
const quoteInputElement = document.getElementById('typing-input')
let gameRunning = true;
let errorCount = 0;
let typedCharactersCount = 0;

quoteInputElement.addEventListener('input',checks);

/**Fetch a random quote from the url */
function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content);
}

/**Render a new quote and make every word into a span */
function renderNewQuote() {
    if (!gameRunning) return;
    getRandomQuote().then(quote => {
        quoteDisplayElement.innerHTML ='';
        quote.split('').forEach(character =>{
            const characterSpan = document.createElement('span');
            characterSpan.innerText = character;
            quoteDisplayElement.appendChild(characterSpan);
        });
        quoteInputElement.value='';
        quoteInputElement.focus();
    })
}
/** Timer function */
function startTimer(){
    const countDownDuration = 60000;
    const endTime = Date.now() + countDownDuration;
    const countDownElement = document.getElementById('timer');
    const interval = setInterval(function() {
        const remaining = endTime - Date.now();
        const secondsLeft = Math.round(remaining / 1000);
        countDownElement.textContent = secondsLeft;
        if (remaining <= 0) {
         clearInterval(interval);
          countDownElement.textContent = 'Time is up!';
          gameRunning = false;
          calculateResults();
        }
    }, 1000);
}
/** Start the game and timer when the site is loaded */
document.addEventListener ('DOMContentLoaded', (event) => {
    startTimer();
    renderNewQuote();
    /**calls a new quote when all chars are typed correctly */
    quoteInputElement.addEventListener ('input', () => {
        const correctCharacters = quoteDisplayElement.querrySelectorAll('span.correct').length;
        const totalCharacters = quoteDisplayElement.querrySelectorAll('span').length;
        if (correctCharacters === totalCharacters){
            renderNewQuote();
        }
    })
});

/** The functions checking for correct spelling */

function checks(){
    const characters = quoteDisplayElement.querySelectorAll('span');
    let typedCharacters = quoteInputElement.value.split('');
    let correct = true;
    characters.forEach((charSpan, index ) => {
    const character = typedCharacters[index];
    if (character == null){
        charSpan.classList.remove('correct', 'incorrect');
        correct = false;
    } else if (character === charSpan.innerText){
        charSpan.classList.add('correct');
        charSpan.classList.remove('incorrect');
    }else{
        charSpan.classList.add('incorrect');
        charSpan.classList.remove('correct');
        errorCount++;
    }
});
}
/**resets the counters */
function reset(){
    typedCharacters = 0;
    errorCount = 0;
    document.querySelector('.erros span').textContent = 0;
    document.querySelector('.cpm span').textContent = 0;
    document.querySelector('.wpm span').textContent = 0;
}
function update(){
    const timeElapsed = (currentTime - startTime) / 1000 / 60;
    const currentTime = new Date ();
    const wpm = Math.round((typedCharactersCount/5)/ TimeElapsed);
    const cpm = Math.round(typedCharactersCount/timeElapsed);
    document.querrySelector('.errors span').textContent = errorsCount;
    document.querrySelector('.wpm span').textContent = wpm;
    document.querrySelector('.cpm span').textContent = cpm;
    
}