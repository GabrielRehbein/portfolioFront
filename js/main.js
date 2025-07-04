import slider from './slider.js'
import emailForm from './form.js';
import Login from './login.js';


const login = new Login();


document.addEventListener('DOMContentLoaded', (e) => {
    slider();
    emailForm();

    login.openLoginScreen();
    login.closeLoginScreen();
    login.eventoLogin();
    login.logout();

});

const btnAdmLogin = document.querySelector('#btn-adm');
const btnBackLogin = document.querySelector('#btn-back-login');



// Login

