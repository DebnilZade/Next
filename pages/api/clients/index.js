import { apiHandler, clientsRepo, omit } from '../../../helpers/api';
export default apiHandler({
    get: getClients
});

function getClients(req, res) {
    
    console.log(req);
    const response = clientsRepo.getAll();
    return res.status(200).json(response);
}