import { colors } from "./colors.js";

const noticeDiv = document.createElement('div');

function popUpNotify(message, error = false, time = 2500){

    if (message){
        noticeDiv.className = 'txt-center white-text pop-up-notice';
        noticeDiv.innerHTML = `<h3>${message}</h3>`;
        if (error){
            noticeDiv.style.backgroundColor = colors.error;
        } else {
            noticeDiv.style.backgroundColor = colors.success;
        }
        document.body.appendChild(noticeDiv);

        setTimeout(() => {
            document.body.removeChild(noticeDiv);
        }, time);
    }
}

export default popUpNotify
