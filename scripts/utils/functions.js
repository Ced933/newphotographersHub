let close = document.querySelector('.close');
let bodyGallery = document.querySelector('.body-gallery');

// Ferme la lightbbox

close.addEventListener('click', () => {
    if (bodyGallery.style.display === "none") {
        bodyGallery.style.display = "block";
    }
    else {
        bodyGallery.style.display = "none";
    }
})

// SELECT 

const dropdowns = document.querySelectorAll('.dropdown');
// selection tous les dropdowns

// pour chaque dropdowns
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('#caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Au clique sur le select tu ouvres le menu, si je reclique dessus tu fermes le menu

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    // Accessibilité. Au clique sur le select tu ouvres le menu, si je reclique dessus tu fermes le menu
    select.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        }
    });
    // pour chaque option sur lequel tu vas cliquer tu remplaces par son nom dans le selected
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        });
    });
});

