import BaseService from "./base-service.js";

class ProjectService extends BaseService{
    constructor(){
        const baseUrl = '...';
        super(`${baseUrl}/projects/`);
    }
}

export default ProjectService;