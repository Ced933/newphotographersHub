// // let myRequest = new Request("./data/photographers.json");
// // fetch(myRequest)
// //1ER then sert a convertir nos donnée qui ne sont toujours pas comprisent par le navigateur
// // .then(res => res.json())
// // .then(data => {
// //     console.log(data.photographers == )
// // } );

// // console.log(data.photographers[0].name)
// // data.photographers[0]
// let media = null;

// const idPhotographer = window.location.search.slice(4);
// // console.log(idPhotographer);

// const fetchPhotographer = async () => {
//     await fetch(`data/photographers.json`)
//         .then((res) => res.json())
//         .then((data) => {

//             data.photographers.forEach(element => {
//                 if (element.id == idPhotographer) {
//                     const photographersDiv = document.querySelector("#photographer");
//                     const imgDiv = document.querySelector('#div-img');
//                     // const article = document.createElement('article');
//                     const img = document.createElement('img');




//                     let path = `./assets/photographers/${element.portrait}`;
//                     img.setAttribute("src", path);



//                     const nom = document.createElement('h2');

//                     nom.innerHTML += element.name;
//                     const location = document.createElement('h3');

//                     let country = element.country;

//                     let city = element.city;
//                     location.innerHTML += city + ", " + country;

//                     const quotes = document.createElement('p');
//                     quotes.innerHTML += element.tagline;

//                     const price = document.createElement('p');
//                     price.innerHTML += element.price + "/jour";


//                     const divPrice = document.querySelector('#sticky-price')
//                     // photographersDiv.appendChild(article);
//                     divPrice.appendChild(price);
//                     imgDiv.appendChild(img);
//                     photographersDiv.appendChild(nom);
//                     photographersDiv.appendChild(location);
//                     photographersDiv.appendChild(quotes);
//                     // article.appendChild(price);



//                     data.media.forEach(media => {

//                         if (media.photographerId == idPhotographer) {



//                             // let sortAlphabetic = async () => {

//                             //     // const idPhotographer = window.location.search.slice(4);

//                             //     let ArrayObjectMedia = data.media;




//                             //     let selectOption = document.querySelector('#select').value;
//                             //     console.log(selectOption);
//                             //     if (selectOption == 'title') {
//                             //         ArrayObjectMedia.sort(function (a, b) {
//                             //             // a.le nom de le clef b.le nom de le clef
//                             //             if (a.title < b.title)
//                             //                 return -1;
//                             //             return 0;

//                             //         });
//                             //         console.log(ArrayObjectMedia);

//                             //     }
//                             //     if (selectOption == 'date') {
//                             //         ArrayObjectMedia.sort(function (a, b) {
//                             //             // a.le nom de le clef b.le nom de le clef
//                             //             if (a.date < b.date)
//                             //                 return -1;
//                             //             return 0;

//                             //         });
//                             //         console.log(ArrayObjectMedia);
//                             //     }
//                             //     if (selectOption == "popular") {
//                             //         ArrayObjectMedia.sort(function (a, b) {
//                             //             // a.le nom de le clef b.le nom de le clef
//                             //             if (a.likes > b.likes)
//                             //                 return -1;
//                             //             return 0;

//                             //         });
//                             //         console.log(ArrayObjectMedia);
//                             //     }
//                             // }
//                             // sortAlphabetic();


//                             const figure = document.createElement('figure');
//                             const figcation = document.createElement('figcaption');

//                             const h3 = document.createElement('h3');
//                             // pour pouvoir attraper uniquement les h3 de tous les figure et non pas les h3 de toute la page 
//                             h3.setAttribute('class', 'h3-figcaption');

//                             h3.innerHTML += media.title;

//                             // const divH4 = document.querySelector("#heart-container");
//                             let h4 = document.createElement('h4');
//                             // rajoutez les coeurs 
//                             h4.innerHTML += media.likes;
//                             h4.className = "singleLike";



//                             const container = document.querySelector('#container-gallery');


//                             // console.log(totalylike);
//                             // const arrayLike = data.media.map(obj => obj.likes);



//                             let totalLike = 0;

//                             function displayLikes() {
//                                 /** ---------- Elements du DOM ---------- */
//                                 const nbrLikes = document.querySelectorAll(".singleLike");
//                                 const displayLikeCounter = document.querySelector("#total-likes");

//                                 /** ---------- Variables ---------- */
//                                 let likesText = 0;
//                                 var totalLike = 0;
//                                 let arrayLikes = [];

//                                 nbrLikes.forEach((like) => {
//                                     likesText = parseInt(
//                                         like.textContent
//                                     ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
//                                     arrayLikes.push(
//                                         likesText
//                                     ); /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
//                                     totalLike = arrayLikes.reduce((accumulator, currentValue) => {
//                                         return accumulator + currentValue;
//                                     }, 0); /** Calcule la somme du tableau */
//                                     return (displayLikeCounter.innerHTML =
//                                         totalLike); /** Met à jour le total des likes du photographe */
//                                 });
//                                 console.log(arrayLikes);



//                             }
//                             displayLikes();


//                             // let img = document.createElement('img');


//                             // const galleryWrap = document.querySelector(".gallery-wrap");
//                             // let path = `./assets/SamplePhotos/${element.name}/${media.image}`;
//                             // img.setAttribute("src", path);
//                             // img.setAttribute("class", "img-gallery");
//                             // container.appendChild(img);
//                             function imageAppear() {
//                                 let img = document.createElement('img');

//                                 if (media.image) {

//                                     let path = `./assets/SamplePhotos/${element.name}/${media.image}`;
//                                     img.setAttribute("src", path);
//                                     img.setAttribute("class", "img-gallery");
//                                     figure.appendChild(img);
//                                 }
//                                 else {
//                                     const video = document.createElement("video");
//                                     let pathVideo = `./assets/SamplePhotos/${element.name}/${media.video}`;
//                                     video.setAttribute("src", pathVideo);
//                                     video.setAttribute("class", "video-gallery");
//                                     figure.appendChild(video);

//                                 }
//                             }
//                             imageAppear();









//                             let leftArrow = document.querySelector('.left-arrow');
//                             let rightArrow = document.querySelector('.right-arrow');
//                             let close = document.querySelector('.close');
//                             let bodyGallery = document.querySelector('.body-gallery');



//                             // faire apparaitre et disparaitre la pop up gallery 
//                             img.onclick = function () {
//                                 if (bodyGallery.style.display === "none") {
//                                     bodyGallery.style.display = "block";
//                                     // pour faire apparaitre la photo sur laquelle on a cliqué 
//                                     let imageAlone = document.querySelector("#img-alone");
//                                     let path = `./assets/SamplePhotos/${element.name}/${media.image}`;

//                                     // creé un tableau 
//                                     imageAlone.setAttribute('src', path);
//                                     console.log(path);
//                                     let middle = document.querySelector('.middle');
//                                     imageAlone.middle;
//                                     // middle.appendChild(imageAlone);
//                                 }
//                                 else {
//                                     bodyGallery.style.display = "none";
//                                 }
//                             }
//                             // fermer la popup 
//                             close.onclick = function () {
//                                 if (bodyGallery.style.display === "none") {
//                                     bodyGallery.style.display = "block";
//                                 }
//                                 else {
//                                     bodyGallery.style.display = "none";
//                                 }

//                             }



//                             // Attrapper toutes les images dans le Dom 
//                             let imageAll = document.querySelectorAll('.img-gallery');

//                             var i = 0;

//                             leftArrow.onclick = function () {
//                                 if (i <= 0) i = imageAll.length;
//                                 i--

//                                 return setImg();

//                             };

//                             rightArrow.onclick = function () {

//                                 if (i >= imageAll.length - 1) i = -1;
//                                 i++
//                                 return setImg();

//                             };

//                             window.addEventListener('keydown', (event) => {
//                                 if (event.key == 'ArrowRight') {
//                                     if (i >= imageAll.length - 1) i = -8;
//                                     i++
//                                     return setImg();

//                                 }
//                             })
//                             window.addEventListener('keydown', (event) => {
//                                 if (event.key == 'ArrowLeft') {
//                                     if (i <= 0) i = imageAll.length;
//                                     i--

//                                     return setImg();

//                                 }
//                             })

//                             function setImg() {
//                                 let image = document.querySelector('#img-alone');
//                                 // faire defiller les images  
//                                 let path = `${imageAll[i].getAttribute('src')}`;
//                                 image.setAttribute("src", path);
//                             }




//                             // selectList.onchange = function(){

//                             // }






//                             let array = data.media;
//                             // console.log(array);

//                             let date = media.date;
//                             // console.log(date);











//                             // let totalSingleLikes = document.querySelectorAll('.singleLike');


//                             const imgOverflow = document.querySelector('#div-img-overflow')
//                             // condition video or photo 





//                             const divHeart = document.createElement('div');









//                             let coeur = document.createElement('i');
//                             coeur.setAttribute("class", 'fa-solid fa-heart');

//                             // incrémentation coeur 
//                             coeur.onclick = function () {
//                                 h4.innerHTML = ++media.likes;
//                                 displayLikes(++totalLike);
//                                 // h4.textContent = h4;
//                             }

//                             container.appendChild(figure);


//                             figure.appendChild(figcation);

//                             figcation.appendChild(h3);
//                             figcation.appendChild(divHeart)

//                             divHeart.appendChild(h4);
//                             divHeart.appendChild(coeur);






//                         }


//                     })



//                 }

//             });


//         });

// }

// fetchPhotographer();

// // var trier = async () => {
// //     await fetch(`data/photographers.json`)
// //         .then((res) => res.json())
// //         .then((data) => {
// //             //  data.media.map(media => {

// //             let ArrayObjectMedia = data.media;
// //             ArrayObjectMedia.sort(function (a, b) {
// //                 // a.le nom de le clef b.le nom de le clef
// //                 if (a.title < b.title)
// //                     return -1;
// //                 return 0;

// //             });
// //             console.log(ArrayObjectMedia);

// //         })


// // };
// // trier();

// let sortAlphabetic = async () => {
//     await fetch(`data/photographers.json`)
//         .then((res) => res.json())
//         .then((data) => {
//             const idPhotographer = window.location.search.slice(4);
//             let ArrayObjectPhotographer = data.photographers;
//             let ArrayObjectMedia = data.media;

//             // function imgAppear() {
//             //     let img = document.createElement('img');
//             //     if (ArrayObjectMedia.image) {
//             //         let figure = document.createElement('figure');
//             //         let path = `./assets/SamplePhotos/${ArrayObjectPhotographer.name}/${ArrayObjectMedia.image}`;
//             //         img.setAttribute("src", path);
//             //         img.setAttribute("class", "img-gallery");
//             //         figure.appendChild(img);
//             //     }
//             // }
//             // imgAppear();

//             let selectOption = document.querySelector('#select').value;
//             // console.log(selectOption);
//             if (selectOption == 'title') {
//                 let img = document.createElement('img');
//                 ArrayObjectMedia.sort(function (a, b) {
//                     // a.le nom de le clef b.le nom de le clef
//                     if (a.title < b.title)
//                         return -1;
//                     return 0;

//                 });
//                 console.log(ArrayObjectMedia.filter(
//                     (ArrayObjectMedia) => ArrayObjectMedia.photographerId === parseInt(idPhotographer)
//                 ));

//             }
//             if (selectOption == 'date') {
//                 ArrayObjectMedia.sort(function (a, b) {
//                     // a.le nom de le clef b.le nom de le clef
//                     if (a.date < b.date)
//                         return -1;
//                     return 0;

//                 });
//                 console.log(ArrayObjectMedia.filter(
//                     (ArrayObjectMedia) => ArrayObjectMedia.photographerId === parseInt(idPhotographer)
//                 ));
//             }
//             if (selectOption == "popular") {
//                 ArrayObjectMedia.sort(function (a, b) {
//                     // a.le nom de le clef b.le nom de le clef
//                     if (a.likes > b.likes)
//                         return -1;
//                     return 0;

//                 });
//                 console.log(ArrayObjectMedia.filter(
//                     (ArrayObjectMedia) => ArrayObjectMedia.photographerId === parseInt(idPhotographer)
//                 ));
//             }
//         })
// };

