class HandlerRequest {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.headers = {
            'Content-Type': 'application/json'
        }
    }

    makeOptions(method, body = null){
        const options = {
            method: method.toUpperCase(),
            headers: this.headers,
        };

        if (body){
            options.body = JSON.stringify(body);;
        }

        return options;
    }

    makeUrl(id = null){
        const url = this.baseUrl.endsWith('/') ? this.baseUrl : `${this.baseUrl}/`;
        return id ? `${url}${id}/` : url;
    }
}

export default HandlerRequest;
