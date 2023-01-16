// users in JSON file for simplicity, store in a db for production applications
let tasks = require('../../data/tasks.json');
import dbConnect from '../../db/mongodb.js';
import Task from '../../models/Task.js';

export const taskRepo = {
    getAll: () => tasks,
    find: x => tasks.find(x),  
    update,
    delete: _delete
};




function update(id, params) {
    const task = tasks.find(x => x.id.toString() === id.toString());

    // set date updated
    task.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(task, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    tasks = tasks.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/task.json', JSON.stringify(tasks, null, 4));
}