


let close = document.querySelector('.close');
let bodyGallery = document.querySelector('.body-gallery');


// faire apparaitre et disparaitre la pop up gallery
function popUp(path) {
    console.log(path);
    const idPhotographer = window.location.search.slice(4);

    // console.log(data.media);

    if (bodyGallery.style.display === "none") {
        bodyGallery.style.display = "block";

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
// function increase() {
//     let h4 = document.querySelector('.singleLike');
//     h4.innerHTML = ++h4.innerHTML;

// }

// let coeur = document.querySelector(".fa-heart");
// console.log(coeur);


// let h4 = document.querySelector('.singleLike');
// coeur.onclick = function () {
//     h4.innerHTML = ++;
//     //     displayLikes(++totalLike);
//     //     // h4.textContent = h4;
// }

