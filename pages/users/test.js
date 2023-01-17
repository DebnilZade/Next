import dbConnect from '../../db/mongodb.js';
import User from '../../models/User.js';
import { useState, useEffect } from 'react';
import {userService} from '../../services';




const test = () =>{
    const [users,setUsers]=useState(null);
    useEffect(() => {
        userService.getAll().then(x => console.log(x));
    }, []);

    //console.log(users);

  //const user = users.find((user)=> user.username === 'Debnil' && user.password === 'Debnil')
    console.log(users);

    return(
        <>
            hi
        </>
    );
}





export default test;