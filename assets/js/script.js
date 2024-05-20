/**Followed a guide and using their code for the Api fetch and quote generator */
const RANDOM_QUOUTE_API_URL = 'http://api.quotable.io/random';
const quoteDIsplayElement = document.getElementById('typing');
const quoteInputElement = documnet.GetElementById('typing-input');
/**The code from below is from the guide */

/**Fetch a random quote from the url */
function getRandomQuote(){
    return fetch(RANDOM_QUOUTE_API_URL)
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
const countDownDuration = 60000;
const endTime = Date.now() + countDownDuration;
const countDownElement = document.getElementById('timer');
const interval = setInterval(function(){
    const remaining = endTime - Date.now();
    const secondsLeft = Math.round(remaining/1000);
    countDownElement.textContent = secondsLeft + 'seconds remaining';
    if (remaining <= 0){
        clearInterval(interval);
        countDownElement.textContent = 'Time is up!';
    }
}, 1000);