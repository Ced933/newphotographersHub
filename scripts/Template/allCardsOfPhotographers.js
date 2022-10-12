class Cards {
    constructor(card) {
        this._card = card
    }

    allCardsOfPhotographers() {
        const sectionCards = document.querySelector('#container-gallery');

        const cards = `
 

    <figure>
        <img src="${this._card.image}" class="img-gallery">
            <figcaption>
                <h3 class="h3-figcaption">${this._card.title}</h3>
                <div>
                    <h4 class="singleLike">${this._card.likes}</h4><i class="fa-solid fa-heart"></i>
                </div>
            </figcaption>
    </figure>


    `
        sectionCards.innerHTML = cards;
        return sectionCards;
    }

}