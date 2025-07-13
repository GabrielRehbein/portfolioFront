import popUpNotify from "../warnings.js";

const sendEmailForm = document.querySelector("#email-form");

function emailForm() {
    sendEmailForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = document.querySelector('#email');
        const subjectInput = document.querySelector('#subject');
        const messageInput = document.querySelector('#message');

        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;

        if (email && subject && message) {
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";

            popUpNotify("E-mail enviado com sucesso!")
        } else {
            popUpNotify("Erro, preencha todos os campos!", true)
        }
    });
}

export default emailForm
