export default class HandlerResponse {
    async parse(response) {
        const contentType = response.headers.get('content-type') || '';

        const isJson = contentType.includes('application/json');
        const isBody = response.status !== 204;

        if (isJson && isBody) {
            return await response.json();
        }

        return null;
    }
}
