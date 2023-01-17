import {apiHandler, taskRepo} from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import Task from '../../../models/Task.js';

export default apiHandler({
    post: addTask
});


async function addTask(req, res) {
    
    console.log(req);
   
    await dbConnect();
    const task = await Task.create(
        req.body
      ) 
      return res.status(201).json({ success: true, data: task })
}