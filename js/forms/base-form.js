import changeScreen from "../utils.js";

export default class Form {
    constructor(form, btnSubmit){
        this.form = form;
        this.btnSubmit = btnSubmit;
    }

    getInputsData(){
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    onSubmit(callback){
        this.btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            // Pegar e (outra funcao validade os dados) e criar um dicionario
            const data = this.getInputsData();
            // Chamar API EX: ProductService.create(dados)
            console.log('projeto criado')
            callback()
        })
    }

}