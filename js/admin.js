import trocarTelas from "./utils.js";

const admScreen = document.querySelector('#adm');

class Admin{
    openAdminScreen(loginScreen){
        trocarTelas(admScreen, loginScreen);
    }

    closeAdminScreen(loginScreen){
        trocarTelas(loginScreen, admScreen);
    }
}

export default Admin

