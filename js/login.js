import Admin from "./admin.js";
import trocarTelas from "./utils.js";

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


const admin = new Admin();

class Login {
    #emailInput;
    #senhaInput;

    constructor() {
        this.#emailInput = document.querySelector('#adm-email');
        this.#senhaInput = document.querySelector('#adm-senha');
    }

    eventoLogin(){
        loginForm.addEventListener('submit', (e) => {
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
            alert('logado com sucesso')
            admin.openAdminScreen(loginScreen);
             this.#emailInput.value = '';
             this.#senhaInput.value = '';
        }
        else {
            alert('Senha e ou email incorretos')
        }   
    }

    logout(){
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            trocarTelas(site, admScreen);
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
