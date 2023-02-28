class Photographers {
    //  faire attention à ne pas mettre les propriétés dans le constructor car il mettra tout l'objet dans le 1er élèment 
    constructor(data) {
        this._name = data.name;
        // ici on va chercher la liste de chaque valeur. exemple : pour data.name c'est la liste de tous les noms 
        this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
        console.log(this.name);
    }
    // permet de retourner les valeurs à travers notre class Photographer 
    get name() {
        return this._name
    }

    get id() {
        return this._id
    }

    get city() {
        return this._city
    }

    get country() {
        return this._country
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }

    get portrait() {
        return `/assets/photographers/${this._portrait}`;
    }


}



// class CardGalleryPhotographer {
//     constructor(media) {
//         this._id = media.id;
//         this._photographerId = media.photographerId;
//         this._title = media.title;
//         this._image = media.image;
//         this._likes = media.likes;
//         this._date = media.date;
//         this._price = media.price;

//     }
//     get id() {
//         return this._id
//     }

//     get photographerId() {
//         return this._photographerId
//     }
//     get title() {
//         return this._title
//     }

//     get likes() {
//         return this._likes
//     }
//     get date() {
//         return this._date
//     }
//     get price() {
//         return this._price
//     }


//     get image() {
//         return `assets/SamplePhotos/${this._photographerId}/${this._image}`
//     }

// }
