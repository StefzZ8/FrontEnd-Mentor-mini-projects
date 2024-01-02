function fetchedQuote() {

    document.getElementById('roll-dice').addEventListener('click', function () {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => {

                const fetchQuote = `"${data.slip.advice}"`
                const quoteID = `#${data.slip.id}`

                const getQuotes = document.querySelector('.quotes');
                getQuotes.innerHTML = fetchQuote;

                const getID = document.querySelector('.id-tag');
                getID.innerHTML = quoteID;

            })
            .catch(err => {
                console.error('Error fetching quote:', err);
            });
    })
}
fetchedQuote()
