const mainImage = document.querySelector('#image');
const images = ['pick1.jpg','pick2.jpg','pick3.jpg','pick4.jpg'];

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    mainImage.src = 'images/' + images[randomIndex];
}