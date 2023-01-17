import { apiHandler, taskRepo, omit } from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import Task from '../../../models/Task.js';
export default apiHandler({
    get: getTasks
});

async function getTasks(req, res) {
    
    // console.log(req);
    // const response = taskRepo.getAll();
    // return res.status(200).json(response);
    await dbConnect();
    const tasks = await Task.find({})
    console.log(tasks);
    /* find all the data in our database */
        res.status(200).json({ success: true, data: tasks })
}