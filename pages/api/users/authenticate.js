import { apiHandler, usersRepo, omit } from '../../../helpers/api';
import dbConnect from '../../../db/mongodb.js';
import User from '../../../models/User.js';
import { useState, useEffect } from 'react';
import {userService} from '../../../services';
export default apiHandler({
    post: authenticate
});



async function authenticate(req, res ) {   
    
    const { username, password } = req.body;
   // const user = usersRepo.find(x => x.username === username && x.password === password);
   await dbConnect();
   const result = await User.find({})
    const users = result.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()
      return user
    })

    const user = users.find(x => x.username === username && x.password === password);

    if (!user) throw 'Username or password is incorrect';

    // return basic user details on success
    return res.status(200).json(omit(user, 'password'));
}

export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await User.find({})
    const users = result.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()
      return user
    })
  
    return { props: { users: users } }
  }
