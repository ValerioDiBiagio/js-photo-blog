// salvare in una variabile l'api

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// chiamata api

axios.get(endpoint)
    .then((response) => {
        // salvare in una variabile l'array di oggetti
        const element = response.data
        console.log(element);

        // fare un ciclo for per iterare l'array
        for (let i = 0; i < element.length; i++) {
            // salvare in una variabile l'oggetto singolo dell'array
            const currentElement = element[i]
            console.log(currentElement);
            // salvare in una variabile l'url dell'immagine presente nell'oggetto
            const { url: imgUrl } = currentElement;
        }

    })
    // se ci sono errori genero il messaggio di alert
    .catch(error => {
        console.log(alert('Errore'));
    })