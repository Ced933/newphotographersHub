class PhotographersCard {
    constructor(photographer) {
        this._photographer = photographer
    }
    // ici on recupère donc le construtor this._photographer qu'on associera en fonction de la propriété de notre tableau 
    //  si on veut afficher le name de l'objet photographers dans notre fichier json on fera  this._photographer.name
    createPhotographerCard() {
        const photographerSection = document.createElement('div');
        photographerSection.classList.add('.photographer_section_article');
        const photographerCard = `
        <a href="photographer.html?id=${this._photographer.id}">
        <article>
            <img src="${this._photographer.portrait}" alt="${this._photographer.name}">
            <h2>${this._photographer.name}</h2>
            <h3>${this._photographer.city},${this._photographer.country}</h3>
            <h4>${this._photographer.tagline}</h4>
            <p>${this._photographer.price}/j</p>
        </article>
        </a>
        `
        photographerSection.innerHTML = photographerCard;
        return photographerSection;
    }

    createHeaderPhotgrapher() {
        const photographerHeader = document.createElement('div');
        photographerHeader.classList.add('.photograph-header');
        const headerPhotographer = `
      
       
        <div id="photographer">
        <h2 id="h2-photographer-page">${this._photographer.name}</h2>
        <h3 id="h3-photographer-page">${this._photographer.city},${this._photographer.country}</h3>
        <p id="quote-photographer-page">${this._photographer.tagline}</p> 
        </div>
        <button class="contact_button" onclick="displayModal()"> Contactez-moi</button>
        <div id="div-img">

        <img src="${this._photographer.portrait}">

        </div>
      
      `
        photographerHeader.innerHTML = headerPhotographer
        return photographerHeader
    }
}