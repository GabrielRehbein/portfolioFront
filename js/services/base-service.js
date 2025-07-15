import HandlerRequest from "../http/handler-request.js";
import HttpClient from "../http/http-client.js";

export default class BaseService{
    constructor(url){
        this.handlerRequest = new HandlerRequest(url);
        this.httpClient = new HttpClient();
    }

    async getAll(){
        const url = this.handlerRequest.makeUrl();
        const options = this.handlerRequest.makeOptions('GET');
        return await this.httpClient.request(url, options);
    }
}
