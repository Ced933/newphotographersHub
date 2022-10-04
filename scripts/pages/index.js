// // Pour faire apparaître tous les photographes

// let myRequest = new Request("./data/photographers.json");
// fetch(myRequest)
//     //1ER then sert a convertir nos donnée qui ne sont toujours pas comprisent par le navigateur
//     .then(res => res.json())
//     .then(data => {

//         data.photographers.map(user => {
//             const photographersSection = document.querySelector(".photographer_section");
//             const link = document.createElement('a');
//             const article = document.createElement('article');
//             const img = document.createElement('img');




//             let path = `./assets/photographers/${user.portrait}`;
//             img.setAttribute("src", path);
//             const id = user.id;
//             let url = window.location.origin + `/photographer.html?id=${id}`;
//             link.setAttribute("href", url);

//             const nom = document.createElement('h2');

//             nom.innerHTML += user.name;
//             const location = document.createElement('h3');

//             let country = user.country;

//             let city = user.city;
//             location.innerHTML += city + "," + country;
//             const quotes = document.createElement('h4');

//             quotes.innerHTML += user.tagline;

//             const price = document.createElement('p');
//             price.innerHTML += user.price + "/j";


//             photographersSection.appendChild(link);
//             link.appendChild(article);
//             article.appendChild(img);
//             article.appendChild(nom);
//             article.appendChild(location);
//             article.appendChild(quotes);
//             article.appendChild(price);

//         })
//     }

//     );

