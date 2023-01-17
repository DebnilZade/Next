import { apiHandler, usersRepo, omit } from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import User from '../../../models/User.js';

export default apiHandler({
    get: getUsers
});

async function getUsers(req, res) {
    // return users without hashed passwords in the response    
    // const response = usersRepo.getAll().map(x => omit(x, 'hash'));   
    // return res.status(200).json(response);
    await dbConnect();
    const user = await User.find({})
    return res.status(200).json(user);
}