/**Followed a guide and using their code for the Api fetch and quote generator */
const RANDOM_QUOUTE_API_URL = 'http://api.quotable.io/random';
/**The code from below is from the guide */

/**Fetch a random quote from the url */
function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
    .then (response = response.json())
    .then (repsone => data.content);
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
const countDownDuration = 6000;
const endTime = Date.now() + countDownDuration;
const countDonwElement = document.getElementById('timer');
const interval = setInterval(function(){
    const remaining = endTime - Date.now();
    const secondsLeft = Math.round(remaining/1000);
    countDownELement.textContent = secondsLeft + 'seconds remaining';
    if (remaining <= 0){
        clearInterval(interval);
        countDownELement.textContent = 'Time is up!';
    }
}, 1000);