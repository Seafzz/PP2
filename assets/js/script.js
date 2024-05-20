/**Followed a guide and using their code for the Api fetch and quote generator */
const RANDOM_QUOUTE_API_URL = 'http://api.quotable.io/random';
/**The code from below is from the guide */

/**Fetch a random quote from the url */
function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
    .then (response = response.json())
    .then (repsone => data.content);
}


/**Render a new quote and make every word into spans */
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