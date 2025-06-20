const sendEmailForm = document.querySelector("#notify-me-form");

const successDiv = document.createElement('div');
successDiv.className = 'bg-green txt-center white-text success-warning';
successDiv.innerHTML = '<h3>Email enviado com sucesso!</h3>';



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

        document.body.appendChild(successDiv);

        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 2500);
    } else {
        alert('erro');
    }
});

