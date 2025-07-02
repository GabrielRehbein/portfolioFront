const sendEmailForm = document.querySelector(".form");

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


const slide = document.querySelector('#slide');
const imgs = document.querySelectorAll('.project-img');
const containerProject = document.querySelector('.container-project');
const projectInfo = document.querySelectorAll('.project-info');
let idImageSlide = 0;


containerProject.addEventListener('click', (e) => {
    const rightArrowClassName = 'fa-arrow-right';
    const leftArrowClassName = 'fa-arrow-left';

    if (e.target.classList.contains(rightArrowClassName)){
        imgs[idImageSlide].classList.add('hide');
        projectInfo[idImageSlide].classList.add('hide');
        idImageSlide++;
        
        if (idImageSlide > imgs.length - 1){
            idImageSlide = 0;
        }

        imgs[idImageSlide].classList.remove('hide');
        projectInfo[idImageSlide].classList.remove('hide');
    }
    if (e.target.classList.contains(leftArrowClassName)){
        imgs[idImageSlide].classList.add('hide');
        projectInfo[idImageSlide].classList.add('hide');
        idImageSlide--;

        if (idImageSlide < 0){
            idImageSlide = imgs.length - 1;
        }
         
        imgs[idImageSlide].classList.remove('hide');
        projectInfo[idImageSlide].classList.remove('hide');   
    }
})

// Login

const btnAdmLogin = document.querySelector('#btn-adm');
const site = document.querySelector('#site');
const loginScreen = document.querySelector('#login-screen');
const btnBackLogin = document.querySelector('#btn-back-login');
const btnLogin = document.querySelector('#btn-login');


btnLogin.addEventListener('click', () => {
    alert('Função de login ainda nao desenvolvida');
})
btnAdmLogin.addEventListener('click', () => {
    site.classList.add('hide');
    loginScreen.classList.remove('hide')
})

btnBackLogin.addEventListener('click', () => {
    site.classList.remove('hide');
    loginScreen.classList.add('hide')

})
