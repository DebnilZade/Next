import { useState, useEffect } from 'react';
import {taskService} from '../../services';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const Add = ()=>{
    const router = useRouter();
    const [tasks,setTasks]=useState(null);

    const status = [

        { id:1,label: 'Pending', value: 'pending' },
     
        { id:2,label: 'On-progress', value: 'on_progress' },
     
        { id:3,label: 'Completed', value: 'completed' },
     
      ];
  
    const handleSubmit =  (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
            taskname: event.target.task_name.value,
            status: event.target.status.value,
            client_id: event.target.client.value,
        }
        //console.log(data);
        taskService.add(data).then(()=>{
            const returnUrl = router.query.returnUrl || '/tasks';
            router.push(returnUrl);            
        });
       
      }

    return(
        <>
        <Navbar></Navbar>
        <h1>Add Task</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="client">Client</label>
           
            <select id="client" name="client" required>

                <option value="1">Dc-consulting</option>

                <option value="2">Justin Becker</option>

                <option value="3">Zachery   </option>

            </select>

            <label htmlFor="task_name">Task Name</label>
            <input type="text" id="task_name" name="task_name" required />

            <label htmlFor="status">Status</label>
           
            <select id="status" name="status" required>

                {status.map((option) => (

                <option key={option.id} value={option.value}>{option.label}</option>

                ))}

            </select>

            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default Add;