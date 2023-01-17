import { useState, useEffect } from 'react';
import {taskService} from '../../services';
import Navbar from '../../components/Navbar';
import NextLink from 'next/link';
import {Link} from '../../components/Link';


const Index = ()=>{

    const [tasks,setTasks]=useState(null);
    useEffect(() => {
        taskService.getAll().then(x => setTasks(x.data));
    }, []);

    

    return(
        <>
        <Navbar></Navbar>
        
        <h1>Task List</h1>        
        <Link href="/tasks/add"><button className='add-button'>Add task</button></Link>
        
        
        <table>
            <thead>
            <tr>
                <th>Client id</th>
                <th>Task Name</th>
                <th>Status</th>
                
            </tr>
            </thead>
            
            <tbody>
            {tasks?tasks.map(task=>
                <tr key={task._id}>
                    <td>{task.client_id}</td>
                    <td>{task.taskname}</td>
                    <td>{task.status}</td>
                    
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