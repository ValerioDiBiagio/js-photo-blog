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
            const { url: imgUrl, date: dates, title: titles } = currentElement;
            // salvare in una variabile l'elemento row html
            const rowElement = document.querySelector('.row');
            // appendere alla row l'elemento html per generare la card dell'immagine
            rowElement.innerHTML += `<div class="card">
                    <img class="pin" src="img/pin.svg" alt="Puntina">
                    <div class="card-pic">
                        <img src="${imgUrl}" alt="#">
                    </div>
                    <div class="card-text">
                        <p>${dates}</p>
                        <h2>${titles}</h2>
                    </div>`
        }
    })
    // se ci sono errori genero il messaggio di alert
    .catch(error => {
        console.log(alert('Errore'));
    })