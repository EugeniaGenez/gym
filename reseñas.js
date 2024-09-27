//Funcion que genera un numero aleatorio que se usa como indice para obtener los datos de la api rest.
let numeroRandom = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

// Funcion que realiza una peticion ajax a una url dada como parametro y actualiza los elementos recibidos, todo esto lo realiza de forma asincronica sin bloquear la pagina mientras se espera la respuesta de la misma.
function getReview(url, reviewSelector, authorSelector, photoSelector) {
    $.ajax({
        method: 'GET',
        url: url,
        contentType: 'application/json',
        success: function (result) {
            let quote = document.querySelector(reviewSelector);
            let author = document.querySelector(authorSelector);
            let photo = document.querySelector(photoSelector);
            quote.innerHTML = result.reseñas;
            author.innerHTML = result.autor;
            photo.src = result.foto;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

// Url para las peticiones ajax agregando la funcion numeroRandom para generar aleatoriamente las distintas reseñas.
let reviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;
let firstReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;
let secondReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;
let thirdReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;

// Se utiliza la funcion getReview para acutalizar los nodos 
getReview(reviewUrl, '.review', '.author', '.photo');
getReview(firstReviewUrl, '.first-review', '.first-author', '.first-photo');
getReview(secondReviewUrl, '.second-review', '.second-author', '.second-photo');
getReview(thirdReviewUrl, '.third-review', '.third-author', '.third-photo');

//Funcion encargada de actualizar los datos una vez que se llega al ultimo slide.
function updateReview() {
    let reviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;
    let firstReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;
    let secondReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;
    let thirdReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 32)}.json`;

    getReview(reviewUrl, '.review', '.author', '.photo');
    getReview(firstReviewUrl, '.first-review', '.first-author', '.first-photo');
    getReview(secondReviewUrl, '.second-review', '.second-author', '.second-photo');
    getReview(thirdReviewUrl, '.third-review', '.third-author', '.third-photo');
}
// La funcion Slices se encarga de proporcionarle un traslado en X hacia la derecha, esto es gracias al operador "-".
let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".slider-test");
let contador = 1
let tamanoWidth = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function () {
    tamanoWidth = sliderIndividual[0].clientWidth;
})

setInterval(function tiempo() {
    slices();
}, intervalo);

function slices() {
    slider.style.transform = 'translate(' + (- tamanoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if (contador == sliderIndividual.length) {
        contador = 0;
        setTimeout(function () {

            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 1s';
            updateReview();
        }, intervalo)
    }
}





