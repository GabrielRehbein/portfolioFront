import HandlerResponse from "./handler-response";

class HttpClient{
    constructor(){
        this.handlerResponse = new HandlerResponse();
    }

    async request(url, options){
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const body = await this.handlerResponse.parse(response);

            return {
                status: response.status,
                body: body,
            };

        } catch(error) {
            throw new Error(`Request failed: ${error.message}`);
        }
    }
}


export default HttpClient;