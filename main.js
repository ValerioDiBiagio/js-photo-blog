// salvare in una variabile l'api

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// chiamata api

axios.get(endpoint)
    .then((response) => {
        // salvare in una variabile l'array di oggetti
        const element = response.data
        console.log(element);

})