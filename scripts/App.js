class App {
    constructor() {
        this.PhotographersWrapper = document.querySelector('.photographer_section');
        this.photographerApi = new PhotographersApi('data/photographers.json');
        this.sectionHeader = document.querySelector('#section-header');


    }

    async main() {

        const photographersData = await this.photographerApi.getPhotographers();
        // const photographerHeader = await this.sectionHeader.getPhotographers();

        photographersData.photographers.map(photographe => new Photographers(photographe))
            .forEach(photographe => {

                const Template = new PhotographersCard(photographe)
                this.PhotographersWrapper.appendChild(Template.createPhotographerCard())
            })

        // const Template = new PhotographersCard(photographe)
        // photographerHeader.photographers.this.sectionHeader.appendChild(Template.createHeaderPhotgrapher())

    }
}

const app = new App();
app.main();