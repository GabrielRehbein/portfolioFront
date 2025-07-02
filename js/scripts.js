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

//TODO adicionar os links do projeto no "footer" da imagem do projeto(linkedin e github)
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

