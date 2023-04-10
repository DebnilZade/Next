import { useState, useEffect } from 'react';
import {userService} from '../../services';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const Add = ()=>{
    const router = useRouter();
    

    const status = [

        { id:1,label: 'Active', value: 'active' },
     
        { id:2,label: 'In-active', value: 'in_active' }   
     
      ];
  
    const handleSubmit =  (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
            username: event.target.user_name.value,
            firstName: event.target.first_name.value,
            lastName: event.target.last_name.value,
            password: event.target.password.value,
            status: event.target.status.value,
            IsAdmin: event.target.role.value,
        }
        //console.log(data);
        userService.add(data).then(()=>{
            const returnUrl = router.query.returnUrl || '/users';
            router.push(returnUrl);            
        });
       
      }

    return(
        <>
        <Navbar></Navbar>
        <h1>Add User</h1>
        <div className="form-style">
        <form onSubmit={handleSubmit}>
            
            <div className="form-field">
            <label htmlFor="user_name">User Name</label>
            <input type="text" id="user_name" name="user_name" required />
            </div>
            <div className="form-field">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required />
            </div>
            <div className="form-field">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required />
            </div>
            <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" required />
            </div>
            <div className="form-field">
            <label htmlFor="role">Role</label>
            
            <select id="role" name="role" required>

                <option value="false">basic</option>

                <option value="true">admin</option>                

            </select>
            </div>
            <div className="form-field">
            <label htmlFor="status">Status 1</label>
           
            <select id="status" name="status" required>

                {status.map((option) => (

                <option key={option.id} value={option.value}>{option.label}</option>

                ))}

            </select>
            </div>
            

            <button type="submit" className="button">Submit</button>
        </form>
        </div>
        </>
    );
}
export default Add;