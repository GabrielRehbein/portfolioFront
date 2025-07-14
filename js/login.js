import Admin from "./admin.js";
import changeScreen from "./utils.js";
import popUpNotify from "./warnings.js"; 

const btnAdmLogin = document.querySelector('#btn-adm');
const site = document.querySelector('#site');
const loginScreen = document.querySelector('#login-screen');
const btnBackLogin = document.querySelector('#btn-back-login');
const btnLogin = document.querySelector('#btn-login');
const btnLogout = document.querySelector('#btn-leave-adm');
const loginForm = document.querySelector('#login-form');
const admScreen = document.querySelector('#adm');
const emailADM = 'gaba@gaba.com';
const senhaADM = '123';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const admin = new Admin();

class Login {
    #emailInput;
    #senhaInput;

    constructor() {
        this.#emailInput = document.querySelector('#adm-email');
        this.#senhaInput = document.querySelector('#adm-senha');
    }

    eventoLogin(){
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            this.logar(
                this.#emailInput.value,
                this.#senhaInput.value
            )
        })
    }

    logar(email, senha){
        if (email === emailADM && senha === senhaADM)
        {
            popUpNotify('Usuário logado com sucesso!');
            admin.openAdminScreen(loginScreen);
            this.#emailInput.value = '';
            this.#senhaInput.value = '';
        }
        else {
            popUpNotify('Senha e/ou e-mail incorreto(s)!', true);
        }   
    }

    logout(){
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            changeScreen(site, admScreen);
            popUpNotify('Usuário deslogado com sucesso!')
        })
    }

    openLoginScreen(){
        btnAdmLogin.addEventListener('click', () => {
            site.classList.add('hide');
            loginScreen.classList.remove('hide')
        })
    }

    closeLoginScreen(){
        btnBackLogin.addEventListener('click', () => {
            site.classList.remove('hide');
            loginScreen.classList.add('hide')
        })
    }
}

export default Login
