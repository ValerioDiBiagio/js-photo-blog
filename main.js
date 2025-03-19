// salvare in una variabile l'api
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// chiamata api
axios.get(endpoint)
    .then((response) => {
        console.log(response);
        // salvare in una variabile l'array di oggetti
        const element = response.data

        // fare un ciclo for per iterare l'array
        for (let i = 0; i < element.length; i++) {
            // salvare in una variabile l'oggetto singolo dell'array
            const currentApiElement = element[i];
            console.log(currentApiElement);
            // salvare in una variabile l'elemento row html
            const rowElement = document.querySelector('.row');
            // richiamare la funzione per l'elemento html
            rowElement.innerHTML += generateHtmlElement(currentApiElement);
        }

        // richiamare elemento html
        const imgElement = document.querySelectorAll('.card');
        console.log(imgElement);

        // creare un ciclo for per salvare le card singole
        for (let i = 0; i < imgElement.length; i++) {
            const currentImg = imgElement[i];
            console.log(currentImg);
            const currentElement = element[i];
            console.log(currentElement);

            // mettere evento delle card al click
            currentImg.addEventListener('click', function () {
                overlayElement.innerHTML = '';
                overlayElement.appendChild(btnElement);
                overlayElement.innerHTML += createElementImg(currentElement);
                overlayElement.classList.remove("dnone");

                // aggiungere evento bottone

                const buttonElement = document.querySelector('.btn');
                
                buttonElement.addEventListener("click", function() {
                    
                    overlayElement.classList.add("dnone");
                })
            })
        }
       
    })
    // se ci sono errori genero il messaggio di alert
    .catch(error => {
        console.log(alert("L'indirizzo non è corretto"));
    })


// elementi html

// bottone
const btnElement = document.createElement('button');
console.log(btnElement);
btnElement.innerHTML = 'Chiudi';
btnElement.classList.add('btn');

// overlay
const overlayElement = document.querySelector('.overlay');
console.log(overlayElement);

overlayElement.classList.add("dnone");


// funzioni

// creazione delle card
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

// creazione delle immagini
function createElementImg (item) {

    return `<img class="imgover" src="${item.url}" alt="${item.title}"> `

}