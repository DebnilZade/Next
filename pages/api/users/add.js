import {apiHandler, taskRepo} from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import User from '../../../models/User.js';

export default apiHandler({
    post: addUser
});


async function addUser(req, res) {
    
    console.log(req);
   
    await dbConnect();
    const user = await User.create(
        req.body
      ) 
      return res.status(201).json({ success: true, data: user })
}