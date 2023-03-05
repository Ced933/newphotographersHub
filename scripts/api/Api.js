// La connexion au fichier json 
class Api {
    constructor(url) {
        this._url = url
    }
    async getFetch() {
        return fetch(this._url)
            .then((res) => res.json())
            .then(data => data)
            .catch(err => console.log('an error occurs', err))
    }
}
