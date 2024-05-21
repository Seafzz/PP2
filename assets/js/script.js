/**Followed a guide and using their code for the Api fetch and quote generator */
const RANDOM_QUOUTE_API_URL = 'https://api.quotable.io/random';
const quoteDIsplayElement = document.getElementById('typing')
const quoteInputElement = document.getElementById('typing-input')

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
})

/**Fetch a random quote from the url */
function getRandomQuote(){
    return fetch(RANDOM_QUOUTE_API_URL)
    .then (response = response.json())
    .then (data => data.content);
}

/**Render a new quote and make every word into a span */
function renderNewQuote() {
    getRandomQuote().then(quote => {
        quoteDisplayElement.innerHTMl ='';
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
    const interval = setInterval(function(){
        const remaining = endTime - Date.now();
        const secondsLeft = Math.round(remaining / 1000);
        countDownElement.textContent = secondsLeft;
        if (remaining <= 0) {
         clearInterval(interval);
          countDownElement.textContent = 'Time is up!';
        }
    }, 1000);
}
document.addEventListener ('DOMContentLoaded', (event) =>{
    const countDownElement = document.getElementById('timer');
    const countDownDuration = 6000;
    startTimer(countDownDuration, countDownElement);
    

});
/** The functions checking for correct spelling and counting accordingly */

function checks(){
    const characters = typing_text.querySelectorAll('span');
    let typedCharacters = inputField.value.split('')[characterIndex];
    if(characters[characterIndex].innerText === typedCharacters)
        console.log('correct');
} else if{
    (characters[characterIndex].innerText != typedCharacters)
    console.log('incorrect');
    
}