
let numeroRandom = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;


function getReview(url, reviewSelector, authorSelector, photoSelector) {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let quote = document.querySelector(reviewSelector);
            let author = document.querySelector(authorSelector);
            let photo = document.querySelector(photoSelector);
            quote.innerHTML = result.reseñas;
            author.innerHTML = result.autor;
            photo.src = result.foto;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


let reviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;
let firstReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;
let secondReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;
let thirdReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;



getReview(reviewUrl, '.review', '.author', '.photo');
getReview(firstReviewUrl, '.first-review', '.first-author', '.first-photo');
getReview(secondReviewUrl, '.second-review', '.second-author', '.second-photo');
getReview(thirdReviewUrl, '.third-review', '.third-author', '.third-photo');


function updateReview() {
    let reviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;
    let firstReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;
    let secondReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;
    let thirdReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 61)}.json`;

    getReview(reviewUrl, '.review', '.author', '.photo');
    getReview(firstReviewUrl, '.first-review', '.first-author', '.first-photo');
    getReview(secondReviewUrl, '.second-review', '.second-author', '.second-photo');
    getReview(thirdReviewUrl, '.third-review', '.third-author', '.third-photo');
}

let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".slider-test");
let contador = 1
let tamanoWidth = sliderIndividual[0].clientWidth;
let intervalo = 9000;


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





