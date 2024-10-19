function fetchRandomQuote() {
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayQuote(data);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}

function displayQuote(quote) {
    const quoteContainer = document.getElementById('output');
    quoteContainer.innerHTML = `<blockquote>
                                    <h2>"${quote.content}"</h2>
                                </blockquote>`;
}
