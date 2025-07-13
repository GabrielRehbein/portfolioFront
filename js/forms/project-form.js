import changeScreen from "../utils.js"
import BaseForm from "./base-form.js"

const createProjectScreen = document.querySelector("#create-project-screen")
const btnCreateProject = document.querySelector("#btn-create-project")
const headerAdm = document.querySelector("#header-adm")

const admScreen = document.querySelector("#main-adm")

export default class CreateProjectForm extends BaseForm {

    constructor(){
        super();
        this.screenForm = createProjectScreen;
    }
    openFormScreen(){
        btnCreateProject.addEventListener('click', (e) => {
        e.preventDefault();
        changeScreen(createProjectForm, admScreen);
        changeScreen(createProjectForm, headerAdm);
    })

}}