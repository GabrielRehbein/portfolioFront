import changeScreen from "../utils.js"
import popUpNotify from "../warnings.js"
import BaseForm from "./base-form.js"

const createProjectScreen = document.querySelector("#create-project-screen")
const btnCreateProject = document.querySelector("#btn-create-project")
const headerAdm = document.querySelector("#header-adm")
const createForm = document.querySelector("#create-project-form")
const admScreen = document.querySelector("#main-adm")
const btnRegisterProject = document.querySelector("#btn-register-project-final")
const btnBack = document.querySelector('#btn-back');
export default class CreateProjectForm extends BaseForm {

    constructor(){
        super(createForm, btnRegisterProject);
        this.screenForm = createProjectScreen;
        this.addPreventDefault();
        this.backFormScreen();
        this.onSubmit(() => this.changeFormScreen(true))
    }

    openFormScreen(){
        btnCreateProject.addEventListener('click', (e) => {
        e.preventDefault();
        changeScreen(this.screenForm, admScreen);
        changeScreen(this.screenForm, headerAdm);
        })
    }

    backFormScreen(){
        btnBack.addEventListener('click', (e) => {
            e.preventDefault();
            this.changeFormScreen(false);
            this.cleanFields();
        })
    }

    addPreventDefault() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        } else {
            console.warn("createForm não está definido.");
        }
    }

    changeFormScreen(isCreated){
        changeScreen(admScreen, this.screenForm);
        changeScreen(headerAdm, this.screenForm);
        if (isCreated) {
            popUpNotify('Projeto criado com sucesso!');
        }
    }

}