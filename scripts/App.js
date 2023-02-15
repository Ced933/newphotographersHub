class App {
    constructor() {
        this.PhotographersWrapper = document.querySelector('#photographer_section');
        this.photographerApi = new PhotographersApi('data/photographers.json');
        this.sectionHeader = document.querySelector('#section-header');
        this.sectionCards = document.querySelector("#container-gallery");
        this.body = document.querySelector('#body');

    }

    async main() {

        const photographersData = await this.photographerApi.getPhotographers();


        photographersData.photographers.map(photographe => new Photographers(photographe))
            .forEach(photographe => {

                const Template = new PhotographersCard(photographe)

                this.PhotographersWrapper.appendChild(Template.createPhotographerCard());

            })

    }



    async header() {




        const photographerHeader = await this.photographerApi.getPhotographers();
        const idPhotographer = window.location.search.slice(4);






        // pour afficher le header du photographe dans l'encadré 
        photographerHeader.photographers.forEach(photographe => {
            if (idPhotographer == photographe.id) {
                const Template = new PhotographersCard(photographe);
                this.sectionHeader.appendChild(Template.createHeaderPhotgrapher());
                // sticky price 
                this.body.appendChild(Template.stickyFunction());





            }

        })
        let date = document.querySelector("#date");
        let popular = document.querySelector("#likes");
        let title = document.querySelector("#title");
        // Pour afficher toutes les images de la gallery du photographe 
        // filtre les 59images pour ne garder que les image avec le meme id 
        let ArrSameId = photographerHeader.media.filter(media => idPhotographer == media.photographerId);

        // boucle le tableau ArrSameId  
        ArrSameId.map(media => {
            let cardTemplate = new PhotographersCard(media);
            let figureCard = cardTemplate.allCardsOfPhotographers();

            title.classList.add('d-block');
            popular.classList.add('d-block');
            // date.classList.remove('d-block');
            date.classList.add('d-none');

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
            }

            const divHeart = document.createElement('div');


            figureCard.appendChild(figcaption);
            figcaption.appendChild(h3);
            figcaption.appendChild(divHeart);

            divHeart.appendChild(h4);
            divHeart.appendChild(coeur);

        })



        var totalLike = 0;
        // mettre le totalLike en dehors de la fonction pour qui soit accessible à tous 

        function displayLikes() {
            /** ---------- Elements du DOM ---------- */
            const nbrLikes = document.querySelectorAll(".singleLike");

            const displayLikeCounter = document.querySelector("#total-likes");

            /** ---------- Variables ---------- */
            let likesText = 0;
            let arrayLikes = [];

            nbrLikes.forEach((like) => {
                console.log(like.textContent);
                likesText = parseInt(
                    like.textContent
                ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
                arrayLikes.push(
                    likesText
                );
                console.log(arrayLikes) /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
                totalLike = arrayLikes.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                }, 0); /** Calcule la somme du tableau */
                console.log(totalLike);
                return (displayLikeCounter.innerHTML =
                    totalLike); /** Met à jour le total des likes du photographe */
            });

        }
        displayLikes();








        let containerGallery = document.querySelector("#container-gallery");

        // let date = document.querySelector("#date");
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
                    return -1
                }
            }).map(media => {
                console.log(media);
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
                }

                const divHeart = document.createElement('div');
                const Figurecaption = document.querySelector('.figcaption-describe');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);
            })
            var totalLike = 0;
            // mettre le totalLike en dehors de la fonction pour qui soit accessible à tous 

            function displayLikes() {
                /** ---------- Elements du DOM ---------- */
                const nbrLikes = document.querySelectorAll(".singleLike");

                const displayLikeCounter = document.querySelector("#total-likes");

                /** ---------- Variables ---------- */
                let likesText = 0;
                let arrayLikes = [];

                nbrLikes.forEach((like) => {
                    console.log(like.textContent);
                    likesText = parseInt(
                        like.textContent
                    ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
                    arrayLikes.push(
                        likesText
                    );
                    console.log(arrayLikes) /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
                    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                    }, 0); /** Calcule la somme du tableau */
                    console.log(totalLike);
                    return (displayLikeCounter.innerHTML =
                        totalLike); /** Met à jour le total des likes du photographe */
                });
            }
            displayLikes();
            lightboxclicked();

        })

        // let popular = document.querySelector("#likes");
        // lorsqu'on clique sur l'option populaire dans le select 
        popular.addEventListener('click', () => {
            title.classList.add('d-block');
            popular.classList.remove('d-block');
            popular.classList.add('d-none');
            date.classList.add('d-block');

            containerGallery.innerHTML = "";
            // du plus grand au plus petit  
            ArrSameId.sort((a, b) => {
                return b.likes - a.likes
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
                }

                const divHeart = document.createElement('div');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);

            })



            var totalLike = 0;
            // mettre le totalLike en dehors de la fonction pour qui soit accessible à tous 

            function displayLikes() {
                /** ---------- Elements du DOM ---------- */
                const nbrLikes = document.querySelectorAll(".singleLike");

                const displayLikeCounter = document.querySelector("#total-likes");

                /** ---------- Variables ---------- */
                let likesText = 0;
                let arrayLikes = [];

                nbrLikes.forEach((like) => {
                    console.log(like.textContent);
                    likesText = parseInt(
                        like.textContent
                    ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
                    arrayLikes.push(
                        likesText
                    );
                    console.log(arrayLikes) /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
                    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                    }, 0); /** Calcule la somme du tableau */
                    console.log(totalLike);
                    return (displayLikeCounter.innerHTML =
                        totalLike); /** Met à jour le total des likes du photographe */
                });

            }
            displayLikes();





            lightboxclicked();
        })

        // let title = document.querySelector("#title");
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
                    return -1
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
                }

                const divHeart = document.createElement('div');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);

            })



            var totalLike = 0;
            // mettre le totalLike en dehors de la fonction pour qui soit accessible à tous 

            function displayLikes() {
                /** ---------- Elements du DOM ---------- */
                const nbrLikes = document.querySelectorAll(".singleLike");

                const displayLikeCounter = document.querySelector("#total-likes");

                /** ---------- Variables ---------- */
                let likesText = 0;
                let arrayLikes = [];

                nbrLikes.forEach((like) => {
                    console.log(like.textContent);
                    likesText = parseInt(
                        like.textContent
                    ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
                    arrayLikes.push(
                        likesText
                    );
                    console.log(arrayLikes) /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
                    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                    }, 0); /** Calcule la somme du tableau */
                    console.log(totalLike);
                    return (displayLikeCounter.innerHTML =
                        totalLike); /** Met à jour le total des likes du photographe */
                });

            }
            displayLikes();




            lightboxclicked();
        });

        function lightboxclicked() {
            let imageAlone = document.querySelector(".gallery-active");
            let videoAlone = document.querySelector("#video-alone");
            let title = document.querySelector('#h5gallery');
            let h3 = document.querySelector('.h3-figcaption');
            const lightbox = document.querySelector('.body-gallery');
            let leftArrow = document.querySelector('.left-arrow');
            let rightArrow = document.querySelector('.right-arrow');





            let titleOfPhoto = ArrSameId.map(item => item.title);





            let imgIndex = 0;
            const images = document.querySelectorAll('.img-gallery');
            const nameOfPhoto = document.querySelectorAll('.h3-figcaption');
            console.log(images);

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
                        console.log('error')
                    }

                    imgIndex = [...images].indexOf(img);

                    const currentphoto = arrayArrowTitle[imgIndex];
                    title.innerHTML = currentphoto;

                    lightbox.style.display = 'block';
                })
            })








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
                console.log(currentphoto);
                return setMedia();
            });
            // wcag

            document.addEventListener('keydown', e => {
                if (e.key === 'ArrowLeft') {
                    imgIndex--;
                    if (imgIndex < 0) {
                        imgIndex = images.length - 1;

                    }
                    const currentphoto = arrayArrowTitle[imgIndex];
                    title.innerHTML = currentphoto;
                    console.log(currentphoto);
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
                    images.forEach(img => {



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
                            console.log('error')
                        }

                        imgIndex = [...images].indexOf(img);

                        const currentphoto = arrayArrowTitle[imgIndex];
                        title.innerHTML = currentphoto;

                        lightbox.style.display = 'block';

                    })
                }
            })



            rightArrow.addEventListener('click', () => {
                imgIndex++;
                if (imgIndex > images.length - 1) {
                    // mettre a la 1er image 
                    imgIndex = 0;

                }
                const currentphoto = arrayArrowTitle[imgIndex];
                title.innerHTML = currentphoto;
                return setMedia();
            })


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
app.main();
app.header();
