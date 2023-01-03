

let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let close = document.querySelector('.close');
let bodyGallery = document.querySelector('.body-gallery');


// faire apparaitre et disparaitre la pop up gallery
function popUp() {
    // let myRequest = new Request("./data/photographers.json");
    // let fetchdata = fetch(myRequest)
    //     // 1ER then sert a convertir nos donnée qui ne sont toujours pas comprisent par le navigateur
    //     .then(res => res.json())
    //     .then(data);
    const idPhotographer = window.location.search.slice(4);

    // console.log(data.media);

    if (bodyGallery.style.display === "none") {
        bodyGallery.style.display = "block";
        // pour faire apparaitre la photo sur laquelle on a cliqué
        let imageAlone = document.querySelector("#img-alone");
        // let path = `assets/SamplePhotos/${this._photographer.photographerId}/${this._photographer.image}`;

        let path = `./assets/SamplePhotos/${idPhotographer}/${imageAlone}`;

        // creé un tableau
        imageAlone.setAttribute('src', path);
        console.log(path);
        let middle = document.querySelector('.middle');
        imageAlone.middle;
        // middle.appendChild(imageAlone);
    }
    else {
        bodyGallery.style.display = "none";
    }
}

// fermer la popup


close.addEventListener('click', () => {
    if (bodyGallery.style.display === "none") {
        bodyGallery.style.display = "block";
    }
    else {
        bodyGallery.style.display = "none";
    }
})










// SELECT 

const dropdowns = document.querySelectorAll('.dropdown');
// selection tous les dropdown

// pour chaque dropdowns
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');

    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    console.log(dropdown);
    // au clique sur le select tu m'ouvre le menu si je reclique dessus tu le ferme
    select.addEventListener('click', () => {


        menu.classList.toggle('menu-open');

    });
    // pour chaque option sur lequel tu vas cliquer tu me remplace par son nom dans le selected
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;


            menu.classList.remove('menu-open');


        });
    });
});
// let date = document.querySelector("#date");


// let photographerimg = document.querySelectorAll("img-gallery");
// console.log(photographerimg);
  // let date = document.querySelector("#date");
        // console.log(data);
        // date.addEventListener('click', () => {
        //     alert('ok');
        // })



