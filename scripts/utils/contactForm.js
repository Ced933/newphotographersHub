function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const modal = document.querySelector("#contact_modal");
const modalBox = document.querySelector(".modal");
// supprimer la modal 
document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        modal.style.display = "none";
    }
})



let photographerForm = document.querySelector('#photographer-form');

photographerForm.addEventListener("submit", function (e) {
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#mail");
    let message = document.querySelector("#message");
    let messageFirstname = document.querySelector('#message-one');
    let messageLastname = document.querySelector('#message-two');
    let messageMail = document.querySelector('#message-three');
    let messageErrorTextArea = document.querySelector('#message-four');
    let regex = /^[a-zA-Z-\s]+$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    function verifyForm() {
        // si les cases ne sont pas remplis correctement le bouton envoyer sera bloqué
        // firstname 

        if (regex.test(firstname.value) == false || firstname.value.trim() === "" || firstname.value.length <= 2) {
            e.preventDefault();
            messageFirstname.textContent = "Le champ est vide ou inférieur à deux caractère, chiffres et les caractères spéciaux interdits";
            return
        }

        else {
            messageFirstname.textContent = "";
        }


        // lastname 
        if (regex.test(lastname.value) == false || lastname.value.trim() === "" || lastname.value.length <= 2) {
            e.preventDefault();
            messageLastname.textContent = "Le champ est vide ou inférieur à deux caractère, chiffres et les caractères spéciaux interdits";
            return
        }

        else {
            messageLastname.textContent = "";

        }

        // email 
        if (regexEmail.test(email.value) == false) {
            e.preventDefault();
            messageMail.textContent = "Ceci n'est pas une adresse email";
            return
        }
        else {
            messageMail.textContent = "";

        }
        // message 

        if (message.value.trim() === "" || message.value.length <= 20) {
            e.preventDefault();
            messageErrorTextArea.textContent = "Minimum 20 caractères";
            return
        }
        else {
            messageErrorTextArea.textContent = "";

        }
        console.log(firstname.value);
        console.log(lastname.value);
        console.log(email.value);
        console.log(message.value);

        // Pour éviter que la page se recharge 
        e.preventDefault();
        // remettre les champs à 0
        firstname.value = "";
        lastname.value = "";
        email.value = "";
        message.value = "";

    }
    verifyForm();





});



