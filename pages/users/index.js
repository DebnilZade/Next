import { useState, useEffect } from 'react';
import {userService} from '../../services';
import users from '../api/users';
import Navbar from '../../components/Navbar';
import {Link} from '../../components/Link';


const Index = ()=>{

    const [users,setUsers]=useState(null);
    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    return(
        <>
        <Navbar></Navbar>
        <h1>Users List</h1>
        <Link href="/users/add"><button className='add-button'>Add User</button></Link>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>First Name</th>
                
            </tr>
            </thead>
            <tbody>
            {users?users.map(user=>
                <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
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