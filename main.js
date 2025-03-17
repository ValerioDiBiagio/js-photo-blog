// salvare in una variabile l'api
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// chiamata api
axios.get(endpoint)
    .then((response) => {
        // salvare in una variabile l'array di oggetti
        const element = response.data

        // fare un ciclo for per iterare l'array
        for (let i = 0; i < element.length; i++) {
            // salvare in una variabile l'oggetto singolo dell'array
            const currentElement = element[i]
            // salvare in una variabile l'url dell'immagine presente nell'oggetto
            const { url: imgUrl, date: dates, title: titles } = currentElement;
            // salvare in una variabile l'elemento row html
            const rowElement = document.querySelector('.row');
            // richiamare la funzione per l'elemento html
            rowElement.innerHTML += generateHtmlElement(currentElement)
        }

        // richiamare elemento html
        const imgElement = document.querySelectorAll('.card');
        console.log(imgElement);

        // creare un ciclo for per salvare le card singole
        for (let i = 0; i < imgElement.length; i++) {
            const currentImg = imgElement[i];
            console.log(currentImg);
            // mettere evento delle card al click
            currentImg.addEventListener('click', function () {
            overlayElement.classList.remove("dnone");
            })
        }

        // mettere evento del bottone al click
        buttonElement.addEventListener('click', function () {
            overlayElement.classList.add('dnone')
        })
    })
    // se ci sono errori genero il messaggio di alert
    .catch(error => {
        console.log(alert('Errore'));
    })


// elementi html
const buttonElement = document.getElementById('btn');
console.log(buttonElement);

const overlayElement = document.querySelector('.overlay');
console.log(overlayElement);

// overlay
overlayElement.classList.add("dnone");








// funzione
function generateHtmlElement(item) {
return `<div class="card">
                    <img class="pin" src="img/pin.svg" alt="Puntina">
                    <div class="card-pic">
                        <img src="${item.url}" alt="${item.title}">
                    </div>
                    <div class="card-text">
                        <p>${item.date}</p>
                        <h2>${item.title}</h2>
                    </div>`
}
