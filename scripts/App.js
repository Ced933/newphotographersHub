class App {
    constructor() {
        this.PhotographersWrapper = document.querySelector('#photographer_section');
        this.photographerApi = new PhotographersApi('data/photographers.json');
        this.sectionHeader = document.querySelector('#section-header');
        this.sectionCards = document.querySelector("#container-gallery");

    }

    async main() {

        const photographersData = await this.photographerApi.getPhotographers();


        photographersData.photographers.map(photographe => new Photographers(photographe))
            .forEach(photographe => {

                const Template = new PhotographersCard(photographe)
                console.log(document.querySelector('#photographer_section'));
                this.PhotographersWrapper.appendChild(Template.createPhotographerCard())
            })

    }



    async header() {
        const photographerHeader = await this.photographerApi.getPhotographers();
        const idPhotographer = window.location.search.slice(4);


        let leftArrow = document.querySelector('.left-arrow');
        let rightArrow = document.querySelector('.right-arrow');


        // pour afficher le header du photographe dans l'encadré 
        photographerHeader.photographers.forEach(photographe => {
            if (idPhotographer == photographe.id) {
                const Template = new PhotographersCard(photographe)
                this.sectionHeader.appendChild(Template.createHeaderPhotgrapher())
            }

        })

        // Pour afficher toutes les images de la gallery du photographe 
        // filtre les 59images pour ne garder que les image avec le meme id 
        let ArrSameId = photographerHeader.media.filter(media => idPhotographer == media.photographerId);
        // const ArrFilterByDate = photographerHeader.media.filter(media => media.date);

        // console.log(ArrFilterByDate);
        // boucle le tableau ArrSameId  
        ArrSameId.map(media => {
            let cardTemplate = new PhotographersCard(media);
            let figureCard = cardTemplate.allCardsOfPhotographers();
            console.log(figureCard);
            this.sectionCards.appendChild(figureCard);
            // console.log(++h4title);
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

            coeur.onclick = function () {
                h4.innerHTML = ++media.likes;
                // displayLikes(++totalLike);
                // h4.textContent = h4;
            }

            const divHeart = document.createElement('div');
            const Figurecaption = document.querySelector('.figcaption-describe');


            figureCard.appendChild(figcaption);
            figcaption.appendChild(h3);
            figcaption.appendChild(divHeart);

            divHeart.appendChild(h4);
            divHeart.appendChild(coeur);

        })

        let containerGallery = document.querySelector("#container-gallery");

        let date = document.querySelector("#date");
        // lorsqu'on clique sur l'option date dans le select 
        date.addEventListener('click', () => {
            // ArrSameId.splice(0);
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

                coeur.onclick = function () {
                    h4.innerHTML = ++media.likes;
                    // displayLikes(++totalLike);
                    // h4.textContent = h4;
                }

                const divHeart = document.createElement('div');
                const Figurecaption = document.querySelector('.figcaption-describe');


                figureCard.appendChild(figcaption);
                figcaption.appendChild(h3);
                figcaption.appendChild(divHeart);

                divHeart.appendChild(h4);
                divHeart.appendChild(coeur);
            })


            lightboxclicked();

        })

        let popular = document.querySelector("#likes");
        // lorsqu'on clique sur l'option populaire dans le select 
        popular.addEventListener('click', () => {
            containerGallery.innerHTML = "";
            // du plus grand au plus petit  
            ArrSameId.sort((a, b) => {
                return b.likes - a.likes
            }).map(media => {
                console.log(media)
                let cardTemplate = new PhotographersCard(media);
                this.sectionCards.appendChild(cardTemplate.allCardsOfPhotographers())
            })




            lightboxclicked();
        })

        let title = document.querySelector("#title");
        // lorsqu'on clique sur l'option titre dans le select 
        title.addEventListener('click', () => {
            containerGallery.innerHTML = "";
            // par ordre alphabétique pour les chaine de caractère
            ArrSameId.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                }

            }).map(media => {
                console.log(media)
                let cardTemplate = new PhotographersCard(media);
                this.sectionCards.appendChild(cardTemplate.allCardsOfPhotographers())
            })



            lightboxclicked();
        })

        function lightboxclicked() {
            let imageAlone = document.querySelector("#img-alone");
            let videoAlone = document.querySelector("#video-alone");
            let title = document.querySelector('#h5gallery');
            let h3 = document.querySelector('.h3-figcaption');


            let Allimg = document.querySelectorAll('img[class=img-gallery], video[class=img-gallery]')
                .forEach(link => link.addEventListener('click', e => {
                    // pour annuler le comportement du a qui te redirige vers un lien 
                    e.preventDefault();


                    let titleOfPhoto = ArrSameId.map(item => item.title);

                    console.log(titleOfPhoto);





                    let path = e.currentTarget.getAttribute('src');
                    console.log(ArrSameId);
                    const currentElement = ArrSameId.find(element => {
                        console.log(path);
                        console.log(element.mediaItem);

                        return path.includes(element.mediaItem);

                    });


                    title.innerHTML = currentElement.title;


                    console.log(path);
                    popUp(path);
                    videoAlone.style.display = 'none';
                    imageAlone.style.display = 'none';
                    if (path.includes(".mp4")) {
                        videoAlone.style.display = "block";
                        videoAlone.setAttribute('src', path);

                    } else if (path.includes(".jpg")) {

                        // videoAlone.style.display = "none";
                        imageAlone.style.display = "block";
                        imageAlone.setAttribute('src', path);

                    } else (console.log('error'))
                    // faire une condition pour la video 


                }));




            // on récupère le ArrSameId on fait une boucle pour avoir tous les éléments

            let arrayArrow = ArrSameId.map(list => list.mediaItem);
            let arrayArrowTitle = ArrSameId.map(list => list.title);

            console.log(arrayArrow);

            // on initialise var a 0 pour pouvoir avec un index 
            var i = 0;

            leftArrow.addEventListener('click', e => {
                if (i <= 0) i = arrayArrow.length;
                i--

                if (i <= 0) i = arrayArrowTitle.length;
                i--

                // let title = document.querySelector('#h5gallery');
                const currentphoto = arrayArrowTitle[i];
                console.log(currentphoto);

                title.innerHTML = currentphoto;

                return setMedia();
            })
            rightArrow.addEventListener('click', () => {
                if (i >= arrayArrow.length - 1) i = -1;
                i++

                if (i >= arrayArrowTitle.length - 1) i = -1;
                i++
                const currentphoto = arrayArrowTitle[i];
                title.innerHTML = currentphoto;
                return setMedia();

            })

            function setMedia() {
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
                // if(arrayArrow[i])
                // // si arrayArrow[i] contient du jpg alors  image.setAttribute('src', `assets/SamplePhotos/${idPhotographer}/${arrayArrow[i]}`);
                // // sinon arrayArrow[i] video.setAttribute('src', `assets/SamplePhotos/${idPhotographer}/${arrayArrow[i]}`);
                // // on recupère image on lui change son attribute avec le nouveau chemin le arrow au moment a l'inddex i 
                // image.setAttribute('src', `assets/SamplePhotos/${idPhotographer}/${arrayArrow[i]}`);
            }
        }
        lightboxclicked();

        // let ArrLikes = ArrSameId.map(item => item.likes);
        // console.log(ArrLikes);
        // let coeurs = document.querySelectorAll(".fa-heart").forEach
        //     .coeurs.addEventListener('click', () => {
        //         ArrSameId.forEach(item => {
        //             h4.innerHTML = ++item.likes
        //         })
        //     })

        // let Allimg = document.querySelectorAll('img[class=img-gallery], video[class=img-gallery]')
        // .forEach(link => link.addEventListener('click', e => {

        // function displayLikes() {
        //     const displayLikeCounter = document.querySelector("#total-likes");
        //     // let ArrLikes = ArrSameId.map(item => item.likes);
        //     let arrayLike = [];
        //     // mettre les like dans un tableau pour pourvoir les modiier et les incrémenter
        //     let nbrLikes = document.querySelectorAll('.singleLike');
        //     // selectionner tous les like dans les balise h4
        //     let likesText = 0;
        //     var totalLike = 0;

        //     nbrLikes.forEach((like) => {
        //         likesText = parseInt(
        //             // chaque h4 individuellement sera mis dans la variable likesText sera transformé en nombre car au depart c'est un string
        //             like.innerHTML
        //         );
        //         // tu me mets chaque h4 transformé dans le tableau arraylike (nous somme dans une boucle)
        //         arrayLike.push(
        //             likesText
        //         );
        //         totalLike = arrayLike.reduce((accumulator, currentValue) => {
        //             return accumulator + currentValue;
        //         }, 0); /** Calcule la somme du tableau */
        //         return (displayLikeCounter.innerHTML =
        //             totalLike);
        //         /** Met à jour le total des likes du photographe */
        //     });
        //     console.log(arrayLike);

        // }
        // displayLikes();












        // let h4title = document.querySelector('.singleLike');
        // parseInt(h4title.innerHTML);
        // console.log(++h4title);
        // let coeur = document.createElement('i');
        // let h4 = document.createElement('h4');

        // let Arrlikes = ArrSameId.map(item => item.likes);



        // // rajoutez les coeurs 
        // h4.innerHTML += Arrlikes[1];
        // h4.classList.add("singleLike");



        // coeur.setAttribute("class", 'fa-solid fa-heart');

        // coeur.onclick = function () {
        //     h4.innerHTML = ++Arrlikes[1];
        //     // displayLikes(++totalLike);
        //     // h4.textContent = h4;
        // }

        // const divHeart = document.createElement('div');
        // const Figurecaption = document.querySelector('.figcaption-describe');


        // Figurecaption.appendChild(divHeart);
        // divHeart.appendChild(h4);
        // divHeart.appendChild(coeur);













        // console.log(++ArrSameId[0].likes);

        // // coeur.onclick = function () {
        // //     h4title.innerHTML = ++ArrSameId.likes;
        // //     // h4.innerHTML = ++media.likes;
        // //     // displayLikes(++totalLike);
        // //     // h4.textContent = h4;
        // // }


        // coeur.addEventListener('click', function () {
        //     // // alert('okok');
        //     // h4title.innerHTML = "";
        //     // // h4title.innerHTML = ++ArrSameId.likes;

        //     h4title.innerHTML = ++h4title.innerHTML;

        // })



        // displayLikes(++totalLike);
        // h4.textContent = h4;

        // let coeurs = document.querySelector('.fa-heart');
        // console.log(coeurs, ArrLikes);
        // coeurs.onclick = function () {



        //     // h4.innerHTML = ++ArrSameId.likes;

        //     h4.innerHTML = ++ArrLikes.likes;

        // }
        // let h4title = document.querySelector('.singleLike');
        // let coeur = document.querySelector('.fa-heart');
        // console.log(++ArrSameId[0].likes);
        // coeur.addEventListener('click', function () {

        // })
    }


}

const app = new App();
app.main();
app.header();
