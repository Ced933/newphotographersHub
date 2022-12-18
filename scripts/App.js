class App {
    constructor() {
        this.PhotographersWrapper = document.querySelector('.photographer_section');
        this.photographerApi = new PhotographersApi('data/photographers.json');
        this.sectionHeader = document.querySelector('#section-header');
        this.sectionCards = document.querySelector("#container-gallery");

    }

    async main() {

        const photographersData = await this.photographerApi.getPhotographers();


        photographersData.photographers.map(photographe => new Photographers(photographe))
            .forEach(photographe => {

                const Template = new PhotographersCard(photographe)
                this.PhotographersWrapper.appendChild(Template.createPhotographerCard())
            })


        // 





    }
    async header() {
        const photographerHeader = await this.photographerApi.getPhotographers();
        const idPhotographer = window.location.search.slice(4);


        photographerHeader.photographers.forEach(photographe => {
            if (idPhotographer == photographe.id) {
                const Template = new PhotographersCard(photographe)
                this.sectionHeader.appendChild(Template.createHeaderPhotgrapher())


            }

        })


        const ArrSameId = photographerHeader.media.filter(media => idPhotographer == media.photographerId);
        // console.log(ArrSameId);

        ArrSameId.map(media => {
            // console.log(media)
            const cardTemplate = new PhotographersCard(media);
            this.sectionCards.appendChild(cardTemplate.allCardsOfPhotographers())
        })




    }


}

const app = new App();
app.main();
app.header();
