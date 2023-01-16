import { useState, useEffect } from 'react';
import {taskService} from '../../services';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const Add = ()=>{
    const router = useRouter();
    const [tasks,setTasks]=useState(null);
  
    const handleSubmit =  (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
            taskname: event.target.first.value,
            status: event.target.last.value,
            client_id: "1"
        }
       // console.log(data);
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
            <label htmlFor="first">Task Name</label>
            <input type="text" id="first" name="first" required />

            <label htmlFor="last">Status</label>
            <input type="text" id="last" name="last" required />

            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default Add;