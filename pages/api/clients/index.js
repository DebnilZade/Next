import { apiHandler, clientsRepo, omit } from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import Client from '../../../models/Client.js';
export default apiHandler({
    get: getClients
});

async function getClients(req, res) {
    
    await dbConnect();
    const clients = await Client.find({})
    return res.status(200).json(clients);
}