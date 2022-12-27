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
            console.log(media)
            let cardTemplate = new PhotographersCard(media);
            this.sectionCards.appendChild(cardTemplate.allCardsOfPhotographers())
        })


        let date = document.querySelector("#date");
        // lorsqu'on clique sur l'option date dans le select 
        date.addEventListener('click', () => {
            // ArrSameId.splice(0);
            ArrSameId.sort((a, b) => {
                // par ordre alphabétique pour les chaine de caractère
                if (a.date < b.date) {
                    return -1
                }
            }).map(media => {
                console.log(media)
                let cardTemplate = new PhotographersCard(media);
                this.sectionCards.appendChild(cardTemplate.allCardsOfPhotographers())
            })
        })

        let popular = document.querySelector("#likes");
        // lorsqu'on clique sur l'option populaire dans le select 
        popular.addEventListener('click', () => {
            // du plus grand au plus petit  
            ArrSameId.sort((a, b) => {
                return b.likes - a.likes
            }).map(media => {
                console.log(media)
                let cardTemplate = new PhotographersCard(media);
                this.sectionCards.appendChild(cardTemplate.allCardsOfPhotographers())
            })
        })

        let title = document.querySelector("#title");
        // lorsqu'on clique sur l'option titre dans le select 
        title.addEventListener('click', () => {
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
        })

    }


}

const app = new App();
app.main();
app.header();
