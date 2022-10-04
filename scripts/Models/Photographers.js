class Photographers {
    // faire attention a ne pas mettre les propriété dans le constructor car il mettra le tout l'object dans le 1ere element 
    constructor(photographers) {
        this._name = photographers.name;
        this._id = photographers.id;
        this._city = photographers.city;
        this._country = photographers.country;
        this._tagline = photographers.tagline;
        this._price = photographers.price;
        this._portrait = photographers.portrait;
    }
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