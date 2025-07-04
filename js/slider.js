const slide = document.querySelector('#slide');
const imgs = document.querySelectorAll('.project-img');
const containerProject = document.querySelector('.container-project');
const projectInfo = document.querySelectorAll('.project-info');
let idImageSlide = 0;


function slider() {
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
}

export default slider