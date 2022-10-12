


class CardGalleryPhotographer extends Photographers {
    constructor(media, name) {
        super(name);
        this._id = media.id;
        this._photographerId = media.photographerId;
        this._title = media.title;
        this._image = media.image;
        this._likes = media.likes;
        this._date = media.date;
        this._price = media.price;

    }
    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }
    get title() {
        return this._title
    }
    get image() {
        return `assets/SamplePhotos/${this._name}/${this._image}`
    }
    get likes() {
        return this._likes
    }
    get date() {
        return this._date
    }
    get price() {
        return this._price
    }

}