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
        <a class="link-article" href="photographer.html?id=${this._photographer.id}">
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
      
       <div class="container-header">
        <div class="photograph-header">
        <h2 class="photograph-header-h2">${this._photographer.name}</h2>
        <h3 id="h3-photographer-page">${this._photographer.city},${this._photographer.country}</h3>
        <p id="quote-photographer-page">${this._photographer.tagline}</p> 
        </div>
        <button class="contact_button" onclick="displayModal()"> Contactez-moi</button>
        <div id="div-img">

        <img class="photograph-header-img" src="../assets/photographers/${this._photographer.portrait}">

        </div>
        </div>
      
      `
        photographerHeader.innerHTML = headerPhotographer
        return photographerHeader
    }

    allCardsOfPhotographers() {
        const sectionCards = document.createElement('figure');

        // condition ternaire  pour faire apparaitre soit l'image soit la vidéo
        // si dans dans la key tu as mediaItem et que la valeur fini par .jpg alors tu m'affiche l'image sinon la video 
        const cards = this._photographer.mediaItem.includes('.jpg') ? `
        
        <img src="assets/SamplePhotos/${this._photographer.photographerId}/${this._photographer.mediaItem}"  class="img-gallery">
        

    ` : `

    <video src="assets/SamplePhotos/${this._photographer.photographerId}/${this._photographer.mediaItem}" class="img-gallery"></video>
 

`
        sectionCards.innerHTML = cards;
        return sectionCards;
    }

    // stickyFunction() {

    //     const containerStick = document.createElement('div');
    //     containerStick.classList.add("sticky-price");
    //     const StickyPrice = ` 
    // <div id="sticky-price" class="sticky-price">
    //     <div class="div-heart-total">
    //     <!-- où va être affiché le total de like   -->
    //     <h4 id="total-likes"></h4><i class="fa-solid fa-heart"></i>
    //   </div>
    //   <!-- <p id="price-by-day">300€/jour</p> -->
    //   <div id="price">

    //   </div>
    // </div>

    //   `
    //     containerStick.innerHTML = StickyPrice;
    //     return containerStick;

    // }





}