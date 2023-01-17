import { apiHandler, clientsRepo, omit } from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import Client from '../../../models/Client.js';
export default apiHandler({
    post: addClients
});

async function addClients(req, res) {
    
    await dbConnect();   
    const client_res = await Client.create(
        req.body
      ) 
      return res.status(201).json({ success: true, data: client_res })
}