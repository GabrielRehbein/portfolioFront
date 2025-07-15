export default class BaseService{
    constructor(url){
        this.url = url;
        this.headers = {
            'Content-Type': 'application/json'
        };
    }

    #makeRequestOptions(method, body){
        method = method.toUpperCase();

        const options = {
            method: method,
            headers: this.headers,
        };

        if (body){
            options.body = JSON.stringify(body);;
        }

        return options;
    }

    #makeRequestUrlWithId(id){
        const base = this.url.endsWith('/') ? this.url : `${this.url}/`;
        return `${base}${id}/`;
    }

    async request(method, body = null, id = null){
        const options = this.#makeRequestOptions(method, body);

        const urlFinal = id ? this.#makeRequestUrlWithId(id) : this.url;

        try{
            const response = await fetch(urlFinal, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();

        } catch(error) {
            throw new Error(`Request failed: ${error.message}`);
        }
    }
}