import { useState, useEffect } from 'react';
import {taskService} from '../../services';
import Navbar from '../../components/Navbar';

const Index = ()=>{

    const [tasks,setTasks]=useState(null);
    useEffect(() => {
        taskService.getAll().then(x => setTasks(x));
    }, []);

    return(
        <>
        <Navbar></Navbar>
        <h1>Task List</h1>
        <table>
            <thead>
            <tr>
                <th>Client id</th>
                <th>Task Name</th>
                
            </tr>
            </thead>
            <tbody>
            {tasks?tasks.map(task=>
                <tr key={task.id}>
                    <td>{task.client_id}</td>
                    <td>{task.taskname}</td>
                    
                </tr>
            ):
            <tr>
                <td >No value</td>
                <td >No value</td>
            </tr>
            
            }
            </tbody>
                
                
            
            
        </table>
        </>
    );
}
export default Index;