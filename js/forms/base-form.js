export default class Form {
    constructor(form){
        this.form = form;
    }

    getInputsData(){
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

}