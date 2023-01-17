import { useState, useEffect } from 'react';
import {clientService} from '../../services';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const Add = ()=>{
    const router = useRouter();
    

    const status = [

        { id:1,label: 'Active', value: 'active' },
     
        { id:2,label: 'De-Active', value: 'deActive' }     
       
     
      ];
  
    const handleSubmit =  (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
            name: event.target.client_name.value,
            status: event.target.status.value,
        }
        //console.log(data);
        clientService.add(data).then(()=>{
            const returnUrl = router.query.returnUrl || '/clients';
            router.push(returnUrl);            
        });
       
      }

    return(
        <>
        <Navbar></Navbar>
        <h1>Add Client</h1>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="client_name">Client Name</label>
            <input type="text" id="client_name" name="client_name" required />

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