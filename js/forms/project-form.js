import changeScreen from "../utils.js"
import BaseForm from "./base-form.js"

const createProjectScreen = document.querySelector("#create-project-screen")
const btnCreateProject = document.querySelector("#btn-create-project")
const headerAdm = document.querySelector("#header-adm")
const createForm = document.querySelector("#create-project-form")
const admScreen = document.querySelector("#main-adm")
const btnRegisterProject = document.querySelector("#btn-register-project-final")

export default class CreateProjectForm extends BaseForm {

    constructor(){
        super(createForm);
        this.screenForm = createProjectScreen;
        this.addPreventDefault();
        this.createProject();
    }

    openFormScreen(){
        btnCreateProject.addEventListener('click', (e) => {
        e.preventDefault();
        changeScreen(this.screenForm, admScreen);
        changeScreen(this.screenForm, headerAdm);
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

    

    createProject(){
        btnRegisterProject.addEventListener('click', (e) => {
            e.preventDefault();
            // Pegar e (outra funcao validade os dados) e criar um dicionario
            const data = this.getInputsData();
            // Chamar API EX: ProductService.create(dados)
            console.log('projeto criado')
            changeScreen(admScreen, this.screenForm);
            changeScreen(headerAdm, this.screenForm);
        })
    }

}