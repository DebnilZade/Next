import { useState, useEffect } from 'react';
import {clientService} from '../../services';
import Navbar from '../../components/Navbar';

const Index = ()=>{

    const [clients,setClients]=useState(null);
    useEffect(() => {
        clientService.getAll().then(x => setClients(x));
    }, []);

    return(
        <>
        <Navbar></Navbar>
        <h1>Client List</h1>
        <table>
            <thead>
            <tr>
                <th>Client id</th>
                <th>Client Name</th>
                <th>Status</th>
                
            </tr>
            </thead>
            <tbody>
            {clients?clients.map(client=>
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.firstName}</td>
                    <td>{client.status}</td>
                    
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