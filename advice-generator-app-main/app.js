function fetchedQuote() {

    document.getElementById('roll-dice').addEventListener('click', function () {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => {

                const fetchQuote = `"${data.slip.advice}"`
                const quoteID = `#${data.slip.id}`

                const parahraphID = document.querySelector('.quotes');
                parahraphID.innerHTML = fetchQuote;

                const petko = document.querySelector('.id-tag');
                petko.innerHTML = quoteID;

            })
            .catch(err => {
                console.error('Error fetching quote:', err);
            });
    })
}
fetchedQuote()
