import changeScreen from "./utils.js";

const admScreen = document.querySelector('#adm');

class Admin{
    openAdminScreen(loginScreen){
        changeScreen(admScreen, loginScreen);
    }

    closeAdminScreen(loginScreen){
        changeScreen(loginScreen, admScreen);
    }
}

export default Admin

