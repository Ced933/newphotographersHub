// la page d'accueil 
class App {
    constructor() {
        this.PhotographersWrapper = document.querySelector('#photographer_section');
        this.photographerApi = new PhotographersApi('data/photographers.json');

    }

    async mainAllPhotographers() {

        const photographersData = await this.photographerApi.getPhotographers();


        photographersData.photographers.map(photographe => new Photographers(photographe))
            .forEach(photographe => {

                const Template = new PhotographersCard(photographe);

                this.PhotographersWrapper.appendChild(Template.createPhotographerCard());

            });

    }

}


// la page du photographe sur laquel on a cliqué 
class AppTwo {
    constructor() {

        this.photographerApi = new PhotographersApi('data/photographers.json');
        this.sectionHeader = document.querySelector('#section-header');
        this.sectionCards = document.querySelector("#container-gallery");
        this.body = document.querySelector('#body');
    }

    async personalPagePhotographer() {
        // les données json 
        const photographerHeader = await this.photographerApi.getPhotographers();
        // l'id du photographe
        const idPhotographer = window.location.search.slice(4);

        // pour afficher le header du photographe dans l'encadré 
        photographerHeader.photographers.forEach(photographe => {
            if (idPhotographer == photographe.id) {
                const Template = new PhotographersCard(photographe);
                this.sectionHeader.appendChild(Template.createHeaderPhotgrapher());
                // sticky price 
                this.body.appendChild(Template.stickyFunction());
            }
        });

        let date = document.querySelector("#date");
        let popular = document.querySelector("#likes");
        let title = document.querySelector("#title");


        title.classList.add('d-block');
        popular.classList.add('d-block');
        date.classList.add('d-none');

        // Pour afficher toutes les images de la gallery du photographe 
        // filtre les 59images pour ne garder que les image avec le même id 
        let ArrSameId = photographerHeader.media.filter(media => idPhotographer == media.photographerId);

        // boucle le tableau ArrSameId  
        ArrSameId.map(media => {
            // pour chaque carte 
            // donné json du photographe 
            let cardTemplate = new PhotographersCard(media);
            // les link dans les quelles ils vont etre contenu 
            let figureCard = cardTemplate.allCardsOfPhotographers();



            // container gallery 
            this.sectionCards.appendChild(figureCard);
            // je vais créer mon ficaption avec coeur, titre et nomre de like
            let figcaption = document.createElement('figcaption');

            // ficaption je vais lui attribuer la class figcaption-describe
            figcaption.classList.add('figcaption-describe');
            // h3 
            let h3 = document.createElement('h3');
            h3.innerHTML += media.title;
            h3.classList.add("h3-figcaption");
            // h4 
            let h4 = document.createElement('h4');
            h4.innerHTML += media.likes;
            h4.classList.add("singleLike");


            // coeur 
            let coeur = document.createElement('i');
            coeur.setAttribute("class", 'fa-solid fa-heart');
            coeur.setAttribute("aria-label", "likes");

            // A chaque clique sur le coeur d'un carte j'augmente son nombre de like de +1 
            // ainsi que son nombre total de like toutes cartes confondu de +1
            coeur.onclick = function () {
                h4.innerHTML = ++media.likes;
                displayLikes(++totalLike);
            };
            // avant cette fonction createDivHeart tout ce que j'ai creé etait abstrait 
            // Maintenant je cree la div ou apparraitra tout les enlement que j'ai créer a part l'image que j'ai créer via une méthode
            function createDivHeart() {
                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);

                const divHeart = document.createElement('div');
                figcaption.appendChild(divHeart);
                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);
            }
            createDivHeart();
        });



        // mettre le totalLike en dehors de la fonction pour qui soit accessible à tous 
        var totalLike = 0;

        function displayLikes() {
            // on prend tous les likes du dom 
            const nbrLikes = document.querySelectorAll(".singleLike");
            // la balise ou s'affichera le nombre total de likes 
            const displayLikeCounter = document.querySelector("#total-likes");

            //    Chaque like dans le dom en string  
            let likesText = 0;
            // le tableau dans le quelle on va mettre chaque like 
            let arrayLikes = [];
            nbrLikes.forEach((like) => {
                // pour chaque like prit on va le transformer en number 
                likesText = parseInt(
                    // l'interieur d'un like 
                    like.textContent
                ); // Transforme en nombre le texte à côté de l'input (label = nombre de like) 
                arrayLikes.push(
                    likesText
                );
                /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
                totalLike = arrayLikes.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                }, 0); /** Calcule la somme du tableau */

                return (displayLikeCounter.innerHTML =
                    totalLike); /** Met à jour le total des likes du photographe */
            });

        }
        displayLikes();

        let containerGallery = document.querySelector("#container-gallery");


        // lorsqu'on clique sur l'option date dans le select 
        date.addEventListener('click', () => {


            title.classList.add('d-block');
            popular.classList.add('d-block');
            date.classList.remove('d-block');
            date.classList.add('d-none');

            containerGallery.innerHTML = "";

            ArrSameId.sort((a, b) => {
                // par ordre alphabétique pour les chaine de caractère
                if (a.date < b.date) {
                    return -1;
                }
            }).map(media => {

                let cardTemplate = new PhotographersCard(media);
                let figureCard = cardTemplate.allCardsOfPhotographers();



                // mettre tt ca dans une fonction 
                this.sectionCards.appendChild(figureCard);

                let coeur = document.createElement('i');
                let h4 = document.createElement('h4');
                let h3 = document.createElement('h3');
                let figcaption = document.createElement('figcaption');

                figcaption.classList.add('figcaption-describe');
                h3.innerHTML += media.title;

                h3.classList.add("h3-figcaption");

                // rajoutez les coeurs 
                h4.innerHTML += media.likes;
                h4.classList.add("singleLike");



                coeur.setAttribute("class", 'fa-solid fa-heart');
                coeur.setAttribute("aria-label", "likes");
                coeur.onclick = function () {
                    h4.innerHTML = ++media.likes;
                    displayLikes(++totalLike);
                };

                const divHeart = document.createElement('div');
                // const Figurecaption = document.querySelector('.figcaption-describe');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);
            });

            displayLikes();
            lightboxclicked();

        });

        date.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {

                title.classList.add('d-block');
                popular.classList.add('d-block');
                date.classList.remove('d-block');
                date.classList.add('d-none');

                containerGallery.innerHTML = "";

                ArrSameId.sort((a, b) => {
                    // par ordre alphabétique pour les chaine de caractère
                    if (a.date < b.date) {
                        return -1;
                    }
                }).map(media => {

                    let cardTemplate = new PhotographersCard(media);
                    let figureCard = cardTemplate.allCardsOfPhotographers();



                    // mettre tt ca dans une fonction 
                    this.sectionCards.appendChild(figureCard);

                    let coeur = document.createElement('i');
                    let h4 = document.createElement('h4');
                    let h3 = document.createElement('h3');
                    let figcaption = document.createElement('figcaption');

                    figcaption.classList.add('figcaption-describe');
                    h3.innerHTML += media.title;

                    h3.classList.add("h3-figcaption");

                    // rajoutez les coeurs 
                    h4.innerHTML += media.likes;
                    h4.classList.add("singleLike");



                    coeur.setAttribute("class", 'fa-solid fa-heart');
                    coeur.setAttribute("aria-label", "likes");
                    coeur.onclick = function () {
                        h4.innerHTML = ++media.likes;
                        displayLikes(++totalLike);
                    };

                    const divHeart = document.createElement('div');


                    figureCard.appendChild(figcaption);
                    figcaption.appendChild(h3);
                    figcaption.appendChild(divHeart);

                    divHeart.appendChild(h4);
                    divHeart.appendChild(coeur);
                });

                displayLikes();
                lightboxclicked();
                function closeDropDown() {

                    const selected = document.querySelector('.selected');

                    const caret = document.querySelector('#caret');
                    const menu = document.querySelector('.menu');

                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    selected.innerText = "Date";
                }
                closeDropDown();

            } containerGallery.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    bodyGallery.style.display = "none";
                }
            })

        });
        // lorsqu'on clique sur l'option populaire dans le select 
        popular.addEventListener('click', () => {
            title.classList.add('d-block');
            popular.classList.remove('d-block');
            popular.classList.add('d-none');
            date.classList.add('d-block');

            containerGallery.innerHTML = "";
            // du plus grand au plus petit  
            ArrSameId.sort((a, b) => {
                return b.likes - a.likes;
            }).map(media => {

                let cardTemplate = new PhotographersCard(media);
                let figureCard = cardTemplate.allCardsOfPhotographers();


                this.sectionCards.appendChild(figureCard);
                let coeur = document.createElement('i');
                let h4 = document.createElement('h4');
                let h3 = document.createElement('h3');
                let figcaption = document.createElement('figcaption');

                figcaption.classList.add('figcaption-describe');
                h3.innerHTML += media.title;

                h3.classList.add("h3-figcaption");

                // rajoutez les coeurs 
                h4.innerHTML += media.likes;
                h4.classList.add("singleLike");



                coeur.setAttribute("class", 'fa-solid fa-heart');
                coeur.setAttribute("aria-label", "likes");
                coeur.onclick = function () {
                    h4.innerHTML = ++media.likes;
                    displayLikes(++totalLike);
                };

                const divHeart = document.createElement('div');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);

            });
            displayLikes();
            lightboxclicked();
        });



        popular.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                title.classList.add('d-block');
                popular.classList.remove('d-block');
                popular.classList.add('d-none');
                date.classList.add('d-block');

                containerGallery.innerHTML = "";
                // du plus grand au plus petit  
                ArrSameId.sort((a, b) => {
                    return b.likes - a.likes;
                }).map(media => {

                    let cardTemplate = new PhotographersCard(media);
                    let figureCard = cardTemplate.allCardsOfPhotographers();


                    this.sectionCards.appendChild(figureCard);
                    let coeur = document.createElement('i');
                    let h4 = document.createElement('h4');
                    let h3 = document.createElement('h3');
                    let figcaption = document.createElement('figcaption');

                    figcaption.classList.add('figcaption-describe');
                    h3.innerHTML += media.title;

                    h3.classList.add("h3-figcaption");

                    // rajoutez les coeurs 
                    h4.innerHTML += media.likes;
                    h4.classList.add("singleLike");



                    coeur.setAttribute("class", 'fa-solid fa-heart');
                    coeur.setAttribute("aria-label", "likes");
                    coeur.onclick = function () {
                        h4.innerHTML = ++media.likes;
                        displayLikes(++totalLike);
                    };

                    const divHeart = document.createElement('div');


                    figureCard.appendChild(figcaption);
                    figcaption.appendChild(h3);
                    figcaption.appendChild(divHeart);

                    divHeart.appendChild(h4);
                    divHeart.appendChild(coeur);

                });
                displayLikes();
                lightboxclicked();
                // fermer la pop up lorqu'on a appuyé sur entrer sur une option
                function closeDropDown() {

                    const selected = document.querySelector('.selected');

                    const caret = document.querySelector('#caret');
                    const menu = document.querySelector('.menu');

                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    selected.innerText = "Populaire";
                }
                closeDropDown();
            } containerGallery.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    bodyGallery.style.display = "none";
                }
            })
        });








        // lorsqu'on clique sur l'option titre dans le select 
        title.addEventListener('click', () => {
            title.classList.add('d-none');
            title.classList.remove('d-block');
            popular.classList.add('d-block');
            date.classList.add('d-block');

            containerGallery.innerHTML = "";
            // par ordre alphabétique pour les chaine de caractère
            ArrSameId.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }

            }).map(media => {

                let cardTemplate = new PhotographersCard(media);
                let figureCard = cardTemplate.allCardsOfPhotographers();


                this.sectionCards.appendChild(figureCard);
                let coeur = document.createElement('i');
                let h4 = document.createElement('h4');
                let h3 = document.createElement('h3');
                let figcaption = document.createElement('figcaption');

                figcaption.classList.add('figcaption-describe');
                h3.innerHTML += media.title;

                h3.classList.add("h3-figcaption");

                // rajoutez les coeurs 
                h4.innerHTML += media.likes;
                h4.classList.add("singleLike");



                coeur.setAttribute("class", 'fa-solid fa-heart');
                coeur.setAttribute("aria-label", "likes");
                coeur.onclick = function () {
                    h4.innerHTML = ++media.likes;
                    displayLikes(++totalLike);
                };

                const divHeart = document.createElement('div');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);

            });
            displayLikes();
            lightboxclicked();
        });

        title.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                title.classList.add('d-none');
                title.classList.remove('d-block');
                popular.classList.add('d-block');
                date.classList.add('d-block');

                containerGallery.innerHTML = "";
                // par ordre alphabétique pour les chaine de caractère
                ArrSameId.sort((a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }

                }).map(media => {

                    let cardTemplate = new PhotographersCard(media);
                    let figureCard = cardTemplate.allCardsOfPhotographers();


                    this.sectionCards.appendChild(figureCard);
                    let coeur = document.createElement('i');
                    let h4 = document.createElement('h4');
                    let h3 = document.createElement('h3');
                    let figcaption = document.createElement('figcaption');

                    figcaption.classList.add('figcaption-describe');
                    h3.innerHTML += media.title;

                    h3.classList.add("h3-figcaption");

                    // rajoutez les coeurs 
                    h4.innerHTML += media.likes;
                    h4.classList.add("singleLike");



                    coeur.setAttribute("class", 'fa-solid fa-heart');
                    coeur.setAttribute("aria-label", "likes");
                    coeur.onclick = function () {
                        h4.innerHTML = ++media.likes;
                        displayLikes(++totalLike);
                    };

                    const divHeart = document.createElement('div');


                    figureCard.appendChild(figcaption);
                    figcaption.appendChild(h3);
                    figcaption.appendChild(divHeart);

                    divHeart.appendChild(h4);
                    divHeart.appendChild(coeur);

                });
                displayLikes();
                lightboxclicked();


                function closeDropDown() {

                    const selected = document.querySelector('.selected');

                    const caret = document.querySelector('#caret');
                    const menu = document.querySelector('.menu');

                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    selected.innerText = "Titre";
                }
                closeDropDown();
                // la touche escape nous fait sortir de la gallery
            } containerGallery.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {

                    bodyGallery.style.display = "none";
                }
            })
        });

        function lightboxclicked() {
            let imageAlone = document.querySelector(".gallery-active");
            let videoAlone = document.querySelector("#video-alone");
            let title = document.querySelector('#h5gallery');

            const lightbox = document.querySelector('.body-gallery');
            let leftArrow = document.querySelector('.left-arrow');
            let rightArrow = document.querySelector('.right-arrow');


            let imgIndex = 0;
            const images = document.querySelectorAll('.img-gallery');



            images.forEach(img => {
                img.addEventListener('click', e => {


                    videoAlone.style.display = 'none';
                    imageAlone.style.display = 'none';
                    let path = e.target.src;

                    if (path.includes(".mp4")) {
                        videoAlone.style.display = "block";

                        videoAlone.src = e.target.src;

                    } else if (path.includes(".jpg")) {


                        imageAlone.style.display = "block";

                        imageAlone.src = e.target.src;

                    } else {
                        console.log('error');
                    }

                    imgIndex = [...images].indexOf(img);

                    const currentphoto = arrayArrowTitle[imgIndex];

                    title.innerHTML = currentphoto;

                    lightbox.style.display = 'block';
                });
            });

            // on récupère le ArrSameId on fait une boucle pour avoir tous les éléments

            let arrayArrow = ArrSameId.map(list => list.mediaItem);
            let arrayArrowTitle = ArrSameId.map(list => list.title);

            leftArrow.addEventListener('click', () => {
                imgIndex--;
                if (imgIndex < 0) {
                    imgIndex = images.length - 1;

                }
                const currentphoto = arrayArrowTitle[imgIndex];
                title.innerHTML = currentphoto;

                return setMedia();
            });

            // ACCESSIBILITÉ

            let containerGallery = document.querySelector('#container-gallery');

            containerGallery.addEventListener('keydown', e => {
                if (e.key === 'ArrowLeft') {
                    imgIndex--;
                    if (imgIndex < 0) {
                        imgIndex = images.length - 1;

                    }
                    const currentphoto = arrayArrowTitle[imgIndex];
                    title.innerHTML = currentphoto;

                    return setMedia();
                }
                else if (e.key === 'ArrowRight') {
                    imgIndex++;
                    if (imgIndex > images.length - 1) {
                        // mettre a la 1er image 
                        imgIndex = 0;

                    }
                    const currentphoto = arrayArrowTitle[imgIndex];
                    title.innerHTML = currentphoto;
                    return setMedia();
                }
                else if (e.key === 'Escape') {
                    if (bodyGallery.style.display === "none") {
                        bodyGallery.style.display = "block";
                    }
                    else {
                        bodyGallery.style.display = "none";
                    }
                }
                else if (e.key === 'Enter') {
                    // const splitPath = e.target.currentSrc.split("/");
                    // const imgFocus = splitPath[splitPath.length - 1];


                    videoAlone.style.display = 'none';
                    imageAlone.style.display = 'none';
                    let path = e.target.src;

                    if (path.includes(".mp4")) {
                        videoAlone.style.display = "block";

                        videoAlone.src = e.target.src;

                    } else if (path.includes(".jpg")) {

                        imageAlone.style.display = "block";

                        imageAlone.src = e.target.src;

                    } else {
                        console.log('error');
                    }




                    images.forEach(image => {
                        if (image.src === e.target.currentSrc) {
                            // image.title c'est l'attribut title j'ai pas utilisé alt car cette balise ne convient pas à la balise vidéo  
                            title.innerHTML = image.title;
                        }
                    });
                    // title.innerHTML = images.find(image => image.src === e.target.currentSrc).alt;

                    lightbox.style.display = 'block';


                }
            });



            rightArrow.addEventListener('click', () => {
                imgIndex++;
                if (imgIndex > images.length - 1) {
                    // mettre a la 1er image 
                    imgIndex = 0;

                }
                const currentphoto = arrayArrowTitle[imgIndex];
                title.innerHTML = currentphoto;
                return setMedia();
            });


            function setMedia() {
                let i = imgIndex;
                let image = document.querySelector('#img-alone');
                let video = document.querySelector('#video-alone');



                if (arrayArrow[i].includes(".jpg")) {
                    image.style.display = 'block';
                    video.style.display = 'none';
                    image.setAttribute('src', `assets/SamplePhotos/${idPhotographer}/${arrayArrow[i]}`);

                } else {
                    image.style.display = 'none';
                    video.style.display = 'block';
                    video.setAttribute('src', `assets/SamplePhotos/${idPhotographer}/${arrayArrow[i]}`);
                }

            }
        }
        lightboxclicked();
    }
}

const app = new App();
const apptwo = new AppTwo();
// si on ne fait pas ca il va charger les deux methodes en meme temps sur la meme page alors quelle agissent sur deu page différement 
// et on aura une erreur dans chacune des pages 
function activatePage() {

    if (document.URL.includes('index.html')) {

        app.mainAllPhotographers();
    } else if (document.URL.includes('photographer.html')) {

        apptwo.personalPagePhotographer();
    } else {
        console.log('error');
    }
}
activatePage();
