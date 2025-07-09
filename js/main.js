import slider from './slider.js'
import emailForm from './forms/email-form.js';
import Login from './login.js';
import ProjectForm from './forms/project-form.js'

const login = new Login();
const projectForm = new ProjectForm();

document.addEventListener('DOMContentLoaded', (e) => {
    slider();
    emailForm();

    login.openLoginScreen();
    login.closeLoginScreen();
    login.eventoLogin();
    login.logout();

    projectForm.openFormScreen();

});

const btnAdmLogin = document.querySelector('#btn-adm');
const btnBackLogin = document.querySelector('#btn-back-login');
