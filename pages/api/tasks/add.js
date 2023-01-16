import {apiHandler, taskRepo} from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import Task from '../../../models/Task.js';

export default apiHandler({
    post: addTask
});


async function addTask(req, res) {
    
    console.log(req);
    // const response = taskRepo.create(req,res);
    // console.log("test"+response)
    // return res.status(200).json(response);
    await dbConnect();
    const task = await Task.create(
        req.body
      ) 
      return res.status(201).json({ success: true, data: task })
}