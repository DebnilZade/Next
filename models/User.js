import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
      /* The name of this task */
  
      type: String,
      required: [true, 'Please provide a username for this user.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    firstName: {
      /* The name of this task */
  
      type: String,
      required: [true, 'Please provide a Firstname for this user.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    lastName: {
      /* The name of this task */
  
      type: String,
      required: [true, 'Please provide a Lastname for this user.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    status: {
     
      type: String,
      required: [true, "Please select a status"]
    },
    password: {
     
      type: String,
      required: [true, "Please select a password"]
    },
    IsAdmin: {
        /* Boolean value, if applicable */
    
        type: Boolean,
      }
    
    
  });
  

  export default mongoose.models?.User || mongoose.model('User', UserSchema)