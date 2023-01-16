import { apiHandler, taskRepo, omit } from '../../../helpers/api';
export default apiHandler({
    get: getTasks
});

function getTasks(req, res) {
    
    console.log(req);
    const response = taskRepo.getAll();
    return res.status(200).json(response);
}